import { directus } from "$lib/db/directus";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    let matchId = params.slug;

    try {
        let requestMatch = await directus.items('matches').readOne(matchId, { fields: ['*.*']});

        return { match: requestMatch }
    } catch(err) {
        throw new error(500, err)
    }
}

export const actions = {
    default: async ({ request, params }) => {
        let matchId = params.slug;

        const form = await request.formData();

        let formToJSON = {};

        for(const [key, value] of form) {
            if(value == "on") {
                Object.assign(formToJSON, { [key]: true })
            } else {
                Object.assign(formToJSON, { [key]: value })
            }
        };

        try {
            await directus.items('matches').updateOne(matchId, formToJSON);
        } catch(err) {
            throw new error(500, err);
        }

    }
}