import { directus } from "$lib/db/directus"
import { error } from "@sveltejs/kit";
import { saoPauloTime } from "$lib/func";

export async function load({ params, url }) {

    let dateFrom = url.searchParams.get('dateFrom');
    let dateTo = url.searchParams.get('dateTo');
    let dateQuery = [];

    const isoStringDate = saoPauloTime;
    const today = isoStringDate.slice(0, 10);
    
    if(dateFrom == undefined) {
        dateFrom = today
    }

    dateQuery.push({ matchId: { dateTime: { _gt: dateFrom } } });

    if(dateTo != undefined) {
        dateQuery.push({ matchId: { dateTime: { _lt: dateTo } } })
    }

    try {
        let users = await directus.items('users').readByQuery({ limit: -1 });
        let results = await directus.items('bets').readByQuery({
            fields: ['matchId.*', 'userId.*'],
            aggregate: {
                sum: ['totalPoints'],
            },
            groupBy: ['userId'],
            filter: { _and: dateQuery }
        });

        let worstResults = await directus.items('bets').readByQuery(
            {
                fields: ['*.*'],
                sort: ['totalPoints'],
                limit: 3,
                filter: {
                    _and: [
                        {
                            matchId: {
                                finished: true
                            }
                        },
                        {
                            totalPoints: {
                                _gt: 0
                            }
                        }
                    ]
                }
            }
        );

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


        return { results: newResults, worst: worstResults.data }
    } catch (err) {
        throw new error(err.errors);
    }

}