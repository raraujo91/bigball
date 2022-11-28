import { directus } from "$lib/db/directus"
import { error } from "@sveltejs/kit";

export async function load({ params, url }) {

    let filteredDay = url.searchParams.get('day')

    try {
        let users = await directus.items('users').readByQuery({ limit: -1 });
        let results = await directus.items('bets').readByQuery({
            fields: ['matchId.*', 'userId.*'],
            aggregate: {
                sum: ['totalPoints'],
            },
            groupBy: ['userId'],
            filter: {
                matchId: {
                    dateTime: {
                        _gt: filteredDay
                    }
                }
            }
        });

        let newResults = [];
        
        users.data.map(user => results.data.filter(result => {
            if(user.id == result.userId) {
                newResults.push({ 
                    userId: user.id,
                    name: user.name, 
                    totalPoints: result.sum.totalPoints
                });
            }
        }))


        return { results: newResults }
    } catch (err) {
        console.log(err.errors);
        throw new error(err.errors);
    }

}