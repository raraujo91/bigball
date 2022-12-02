import { directus } from "$lib/db/directus";
import { error } from "@sveltejs/kit";

export async function load({ params, url }) {
    let matchId = params.slug;
    let userId = url.searchParams.get('user');

    try {
        let bet = await directus.items('bets').readByQuery({
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

        return { bet }
    } catch(err) {
        let { errors } = err;
        console.log(errors);
        throw new error(500, errors.message);
    }
}