import { directus } from "$lib/db/directus";
import { error, redirect } from "@sveltejs/kit";

export async function load({ params, url, fetch }) {
    try {
        let userId = url.searchParams.get('user');
        let pointsFromMatch = {};
        
        let requestTeams = await fetch('/api/teams');
        let teams = await requestTeams.json();

        let filteredBet = await directus.items('bets').readByQuery({
            filter: {
                "_and": 
                [
                    {
                        "matchId": 
                        {
                            "_eq": params.slug
                        }
                    },
                    {
                        "userId": {
                            "_eq": userId
                        }
                    }
                ]
            }
        });

        let filteredMatch = await directus.items('matches').readOne(params.slug);
        let filteredHomeTeam = teams.data.find(team => team.id == filteredMatch.homeId);
        let filteredAwayTeam = teams.data.find(team => team.id == filteredMatch.awayId);

        if (filteredMatch.finished) {
            pointsFromMatch = await fetch('/api/points', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    userId,
                    matchId: params.slug
                })
            });

            pointsFromMatch = await pointsFromMatch.json()

            if(filteredBet.isSynced == false) {
                await directus.items('bets').updateOne(filteredBet.id, {
                    totalPoints: pointsFromMatch.totalPoints
                })
            }
        }

        let requestScoreDetails = await fetch('/api/points');
        let scoreDetails = await requestScoreDetails.json();

        return {
                id: params.slug,
                userId,
                bet: filteredBet.data[0],
                teams: {
                    home: filteredHomeTeam,
                    away: filteredAwayTeam
                },
                points: pointsFromMatch,
                scores: scoreDetails,
                match: filteredMatch
        }

    } catch (err) {

        throw new error(500, err);

    }
}

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const json = Object.fromEntries(data.entries());

        let formattedJson = {
            ...json,
            homeScore: Number(data.get('homeScore')),
            awayScore: Number(data.get('awayScore')),
            matchId: Number(data.get('matchId')),
            isUserBet: true
        };

        try {
            await directus.items('bets').createOne(formattedJson);
        } catch(err) {
            let { errors } = err;
            throw new error(errors);
        }

        throw redirect(303, `/bets?user=${data.get('userId')}`);
    }
}