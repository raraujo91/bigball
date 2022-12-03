import { directus } from "$lib/db/directus";
import { error } from "@sveltejs/kit";

export async function load({ params }) {

    try {
        
        let result = {};
        
        let match = await directus.items('matches').readOne(params.slug, {
            fields: ['*.*']
        });

        result = { match };

        let bets = await directus.items('bets').readByQuery({
            fields: ['*.*'],
            filter: {
                matchId: {
                    _eq: params.slug
                }
            }
        });

        if(bets.data.length != 0) {    
            Object.assign(result, {
                bets: bets.data
            });
        }

        return { result }
    } catch (err) {
        throw new error(500, err);
    }

}
