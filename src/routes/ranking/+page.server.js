// import { ranking } from "$lib/db/mock";
import { directus } from "$lib/db/directus";
import { error } from "@sveltejs/kit";

export async function load() {

    try {

        let sumAllBets = await directus.items('bets').readByQuery(
            { 
                limit: -1,
                fields: ['*.*'],
                aggregate: {
                    sum: ['totalPoints']
                },
                groupBy: ['userId']
            } 
        );

        let users = await directus.items('users').readByQuery(
            { 
                limit: -1 
            }
        );

        let countFinishedMatches = await directus.items('matches').readByQuery(
            {
                aggregate: {
                    count: ['finished']
                }
            }
        );

        let bestResults = await directus.items('bets').readByQuery(
            {
                fields: ['*.*'],
                sort: ['-totalPoints'],
                limit: 3,
                filter: {
                    matchId: {
                        finished: true
                    }
                }
            }
        );

        let finishedMatches = countFinishedMatches.data[0].count.finished;

        let createRanking = [];
        
        users.data.map((user) => {
            sumAllBets.data.filter((point) => {
                if(user.id == point.userId) {
                    createRanking.push({ ...user, totalPoints: point.sum.totalPoints })
                }
            })
        });

        console.log(createRanking);

        return { ranking: createRanking, matches: finishedMatches, best: bestResults.data }

    } catch (err) {

        throw error(500, err);

    }

}