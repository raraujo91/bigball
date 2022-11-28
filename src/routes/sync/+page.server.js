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
    default: async ({ request, fetch }) => {

        let data = await request.formData();
        let matchId = data.get('match');
        const avoidTooManyRequests = (msg) => {
            return new Promise(resolve => {
                console.log(`[${new Date().toISOString()}] --- ${msg} ---`)
                setTimeout(resolve, 200);
            });
        }

        try {

            let requestBets = await directus.items('bets').readByQuery({
                filter: {
                    "matchId": matchId
                }
            });
            
            await avoidTooManyRequests("Reading bets");

            let { data: bets } = requestBets;


            let syncedBets = await bets.filter(bet => bet.isSynced != true);

            if (syncedBets.length == 0) {
                await avoidTooManyRequests("No bets pending to be synced");
                return { count: syncedBets.length, results: syncedBets, success: true }
            }

            let requestUsers = await directus.items('users').readByQuery({ limit: -1 });
            
            await avoidTooManyRequests("Reading users");

            let { data: users } = requestUsers;

            async function delayedApiCall(bets) {
                let userPointCalculation = [];
                for(let bet of bets) {
                    let userName = users.find(user => user.id == bet.userId).name;
                    await avoidTooManyRequests(`Calculating points from ${userName}`);
                    let requestPoints = await fetch('/api/points', { method: 'POST', body: JSON.stringify({ matchId, userId: bet.userId }) });
                    let points = await requestPoints.json();
                    await avoidTooManyRequests(`Saving bets from ${userName}`);
                    await directus.items('bets').updateOne(bet.id, { totalPoints: points.totalPoints, isSynced: true });
                    userPointCalculation.push({ matchId, userName, userId: bet.userId, totalPoints: points.totalPoints });
                }

                return userPointCalculation;
            };

            let userPointsForThisMatch = await delayedApiCall(syncedBets);

            let sortedResults = userPointsForThisMatch.sort((a, b) => b.totalPoints - a.totalPoints);

            return { matchId, count: syncedBets.length, results: sortedResults, success: true };

        } catch (err) {
            console.log(err);
        }
    }
}