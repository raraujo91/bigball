import { directus } from "$lib/db/directus";
import { error } from "@sveltejs/kit";

export async function load() {
        try {
            let requestMatches = await directus.items('matches').readByQuery({ 
                limit: -1,
                fields: ['*.*']
            });

            let { data: matches } = requestMatches;
    
            return { matches: matches.sort((a, b) => b.id - a.id) }
        } catch (err) {
            throw new error(500, err);
        }
}