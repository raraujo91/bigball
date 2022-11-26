import { directus } from "$lib/db/directus";
import { error } from "@sveltejs/kit";

export async function load({ params }) {

    try {
        let match = await directus.items('matches').readOne(params.slug, {
            fields: ['*.*']
        });

        return { match }
    } catch (err) {
        throw new error(500, err);
    }

}
