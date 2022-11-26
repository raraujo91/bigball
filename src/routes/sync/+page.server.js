import { directus } from "$lib/db/directus";
import { json } from "@sveltejs/kit";

export async function load({ params, fetch }) {

    try {
        let listMatches = await directus.items('matches').readByQuery({
            limit: -1, 
            fields: ['*.*']
        });

        return { matches: listMatches };

    } catch (err) {
        console.log(err);

    }
}

export const actions = {
    default: async({ request, fetch }) => {

        let data = await request.formData();
        let matchId = data.get('match');

        try {

            let requestBets = await directus.items('bets').readByQuery({
                filter: {
                    "matchId": matchId
                }
            });

            let { data: bets } = await requestBets;

            let syncedBets = await bets.filter(bet => bet.isSynced != true);

            if (syncedBets.length == 0) {
                return { count: syncedBets.length, results: syncedBets, success: true }
            }

            let requestUsers = await directus.items('users').readByQuery({ limit: -1 });

            let { data: users } = requestUsers;

            let userPointsForThisMatch = await Promise.all(
                syncedBets.map(async (bet) => {
                    try {
                        let requestPoints = await fetch('/api/points', {
                            method: 'POST',
                            body: JSON.stringify({
                                matchId,
                                userId: bet.userId
                            })
                        });

                        let userName = users.find(user => user.id == bet.userId).name;

                        let points = await requestPoints.json();

                        await directus.items('bets').updateOne(bet.id, {
                            totalPoints: points.totalPoints,
                            isSynced: true
                        })

                        return { matchId, userName, userId: bet.userId, totalPoints: points.totalPoints };
                    } catch (err) {
                        console.log(err);
                    }
                })
            );

            let sortedResults = userPointsForThisMatch.sort((a, b) => b.totalPoints - a.totalPoints); 

            return { matchId, count: syncedBets.length, results: sortedResults, success: true };

        } catch (err) {

            console.log(err);

        }
    }
}