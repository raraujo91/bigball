// import { bets } from "$lib/db/mock";
// import { matches } from "$lib/db/mock";
// import { teams } from "$lib/db/mock";

import { directus } from '$lib/db/directus';
import { error, json } from '@sveltejs/kit';

export async function load({ fetch, url }) {
    let userId = url.searchParams.get('user');

    try {
        let availableBets = [];
        let betsWithTeams = [];

        let requestMatches = await directus.items('matches').readByQuery({ 
            limit: -1 ,
            fields: ['*.*']
        });

        let requestBets = await directus.items('bets').readByQuery({ 
            limit: -1,
            filter: {
                userId: {
                    "_eq": userId
                }
            },
            fields: ['*.*']
        });

        let { data: bets } = requestBets;
        let { data: matches } = requestMatches;

        let matchesWithoutBet = matches.filter(match => !bets.map(bet => bet.matchId.id).includes(match.id));
        
        let newBets = bets.map(oldBet => {
            let { homeId, awayId, matchId, ...rest } = oldBet;
            return {
                bet: { ...rest },
                match: matchId,
                teams: {
                    home: homeId, 
                    away: awayId
                }
            }
        });

        let newMatches = matchesWithoutBet.map(oldMatch => {
            let { homeId, awayId, ...rest } = oldMatch;
            return {
                bet: {},
                match: { ...rest },
                teams: {
                    home: homeId, 
                    away: awayId
                }
            }
        });

        availableBets = [...newBets, ...newMatches]

        return { bets: availableBets.sort((a, b) => b.match.id - a.match.id) }

    } catch (err) {
        throw new error(500, err);
    }
}