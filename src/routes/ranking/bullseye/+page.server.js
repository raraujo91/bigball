import { error } from "@sveltejs/kit";
import { directus } from "$lib/db/directus";

export async function load() {
    
    try {
        let bullseyes = await directus.items('bets').readByQuery({
            limit: 5, 
            fields: ['*.*', 'userId.*'],
            filter: {
                hitTheBullseye: true
            },
            groupBy: ['userId'],
            aggregate: {
                count: ['hitTheBullseye']
            }
        });

        let users = await directus.items('users').readByQuery({
            limit: 5
        });

        let result = [];
        
        users.data.map(user => {
            bullseyes.data.map(bullseye => {
                if(bullseye.userId == user.id) {
                    result.push({
                        userId: bullseye.userId, 
                        name: user.name,
                        bullseyes: bullseye.count.hitTheBullseye
                    });
                }
            })
        })

        return { ranking: result };
    } catch(err) {
        throw new error(500, err.errors)
    }

}