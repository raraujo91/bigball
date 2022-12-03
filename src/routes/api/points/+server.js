import { json, error } from "@sveltejs/kit";
import { directus } from "$lib/db/directus";
import { OVER_UNDER_PLAYOFFS, REGULAR_SCORE } from "$lib/func";

let OVER_UNDER = OVER_UNDER_PLAYOFFS;

export async function GET() {

    const regularRules = [
        {
            "label": "Placar exato",
            "points": REGULAR_SCORE.BULLSEYE
        },
        {
            "label": "+3 gols de diferença",
            "points": REGULAR_SCORE.EXTRA_POINT
        },
        {
            "label": "Empate",
            "points": REGULAR_SCORE.DRAW
        },
        {
            "label": "Gols do vencedor",
            "points": REGULAR_SCORE.WINNER_GOALS
        },
        {
            "label": "Vencedor + gols do perdedor",
            "points": REGULAR_SCORE.WINNER_GOALS_LOSER
        },
    ];

    const overUnderRules = OVER_UNDER.map(
        function (RULE) {
            return {
                name: RULE.NAME,
                label: RULE.LABEL,
                base: RULE.BASE,
                overPoints: RULE.POINTS_OVER,
                underPoints: RULE.POINTS_UNDER,
            }
        }
    );


    return new json({
        regular: regularRules,
        overUnder: overUnderRules
    });
}

export async function POST({ request }) {
    try {
        let { matchId, userId } = await request.json();

        let requestMatch = await directus.items('matches').readOne(matchId);
        let requestBet = await directus.items('bets').readByQuery({
            filter: { "_and": [{ "matchId": { "_eq": matchId }, "userId": { "_eq": userId } }] }
        });

        let bet = await requestBet.data[0];
        let match = await requestMatch;

        /* Match score calculation based on the REGULAR_SCORE rules */
        const matchScoreAnalysis = (m, b) => {
            let result = "";
            let totalPoints = 0;

            let bet = [b.homeScore, b.awayScore];
            let match = [m.homeScore, m.awayScore];

            console.log(`${requestMatch.homeId.name} x ${requestMatch.awayId.name}`);
            console.log(`bet: ${bet[0]} - ${bet[1]}`);
            console.log(`match: ${match[0]} - ${match[1]}`);

            if (match[0] == match[1]) result = "draw";
            if (match[0] > match[1]) result = "home";
            if (match[0] < match[1]) result = "away";


            // PLACAR EXATO ...................................................... +10
            if (String(match) == String(bet)) {
                totalPoints += REGULAR_SCORE.BULLSEYE;
                console.log("+10 exato");

                // 3 GOLS DE DIFERENÇA ........................................... +6 
                if (match.sort((a, b) => b - a).reduce((tot, num) => tot - num) >= 3) {
                    totalPoints += REGULAR_SCORE.EXTRA_POINT;
                    console.log("+6 ex_point");
                }
                // return totalPoints;
            }

            // EMPATE ............................................................ +4
            if (match[0] - match[1] == 0 && bet[0] - bet[1] == 0) {
                totalPoints += REGULAR_SCORE.DRAW;
                console.log("+4 draw");
            }

            // GOLS DO VENCEDOR .................................................. +6
            if (result == "home" || result == "away") {
                let winner, loser;
                if (result == "home") {
                    winner = "homeScore";
                    loser = "awayScore";
                };

                if (result == "away") {
                    winner = "awayScore";
                    loser = "homeScore";
                };

                if (b[winner] == m[winner] && b[winner] > b[loser]) {
                    totalPoints += REGULAR_SCORE.WINNER_GOALS;
                    console.log("+6 win_goals");
                }
            }

            // VENCEDOR E GOLS DO PERDEDOR ....................................... +4
            if (result == "home") {
                let loser = "awayScore";
                let winner = "homeScore";

                if (b[winner] > b[loser]) {
                    totalPoints += REGULAR_SCORE.WINNER_GOALS_LOSER;
                    console.log("+4 win");
                }

                if (b[winner] > b[loser] && b[loser] == m[loser]) {
                    totalPoints += REGULAR_SCORE.WINNER_GOALS_LOSER;
                    console.log("+4 win_home_goal");
                }
            }

            if (result == "away") {
                let loser = "homeScore";
                let winner = "awayScore";

                if (b[winner] > b[loser]) {
                    totalPoints += REGULAR_SCORE.WINNER_GOALS_LOSER;
                    console.log("+4 win");
                }

                if (b[winner] > b[loser] && b[loser] == m[loser]) {
                    totalPoints += REGULAR_SCORE.WINNER_GOALS_LOSER;
                    console.log("+4 win_away_goal");
                }
            }

            return totalPoints;
        }

        /* Match data transformation from numbers to over/under values */
        const overUnderAnalysis = (ctx) => {
            const obj = {};

            OVER_UNDER.map(function (RULE) {
                if (Object.keys(ctx).includes(RULE.NAME)) {
                    let overUnder = ctx[RULE.NAME] > RULE.BASE ? "over" : "under";
                    return Object.assign(obj, { [RULE.NAME]: overUnder });
                }
            });

            return obj;
        }

        /* Over/under converstion to final values to be summed */
        const overUnderComparison = (m, b) => {
            let matchBet = {}

            Object.keys(b).map(function (entry) {
                if (m[entry] == b[entry]) {
                    if (b[entry] == "over") {
                        let overUnderValues = OVER_UNDER.find(RULE => RULE.NAME == entry)
                        return Object.assign(matchBet, {
                            [entry]: overUnderValues.POINTS_OVER
                        })
                    }

                    if (b[entry] == "under") {
                        let overUnderValues = OVER_UNDER.find(RULE => RULE.NAME == entry)
                        return Object.assign(matchBet, {
                            [entry]: overUnderValues.POINTS_UNDER
                        })
                    }
                }

                if (m[entry] != b[entry]) {
                    if (b[entry] == "over") {
                        let overUnderValues = OVER_UNDER.find(RULE => RULE.NAME == entry)
                        return Object.assign(matchBet, {
                            [entry]: (-overUnderValues.POINTS_OVER / 2)
                        })
                    }

                    if (b[entry] == "under") {
                        let overUnderValues = OVER_UNDER.find(RULE => RULE.NAME == entry)
                        return Object.assign(matchBet, {
                            [entry]: (-overUnderValues.POINTS_UNDER / 2)
                        })
                    }
                }
            });

            return matchBet;
        }

        let scorePoints = matchScoreAnalysis(match, bet);
        let matchResults = overUnderAnalysis(match);
        let overUnderPoints = overUnderComparison(matchResults, bet);

        return new json({
            score: scorePoints,
            totalPoints: scorePoints + Object.values(overUnderPoints).reduce((t, n) => t + n),
            overUnderPoints
        });
    } catch (err) {
        console.log(err);
        throw new error(500, err);
    }
}