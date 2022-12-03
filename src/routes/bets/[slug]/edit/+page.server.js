import { directus } from "$lib/db/directus";
import { error, redirect } from "@sveltejs/kit";

export async function load({ params, url, fetch }) {
    let matchId = params.slug;
    let userId = url.searchParams.get('user');

    try {

        let requestBet = await directus.items('bets').readByQuery({
            fields: ['*.*'],
            filter: {
                _and: [
                    {
                        matchId: {
                            _eq: matchId
                        }
                    },
                    {
                        userId: {
                            _eq: userId
                        }
                    }
                ]
            }
        });

        let { matchId: match, userId: user, homeId, awayId, ...rest } = requestBet.data[0];

        let requestScoreDetails = await fetch('/api/points');
        let scoreDetails = await requestScoreDetails.json();

        return { 
            match, 
            user, 
            scores: scoreDetails, 
            teams: {
                home: homeId, 
                away: awayId
            },
            bet: rest
         }

    } catch(err) {
        let { errors } = err;
        throw new error(500, errors);
    }
}

export const actions = {
    default: async({ request }) => {
        const data = await request.formData();

        const json = Object.fromEntries(data.entries());

        let { userId, betId, ...rest } = json;

        const betToEdit = await directus.items('bets').updateOne(betId, rest);

        console.log(betToEdit);

        throw redirect(303, `/bets?user=${userId}`);
    }
}