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

        let createRanking = [];
        
        users.data.map((user) => {
            sumAllBets.data.filter((point) => {
                if(user.id == point.userId) {
                     console.log({ ...user, totalPoints: point.sum.totalPoints });
                    createRanking.push({ ...user, totalPoints: point.sum.totalPoints })
                }
            })
        });

        console.log(createRanking);

        return { ranking: createRanking }

    } catch (err) {

        throw error(500, err);

    }

}