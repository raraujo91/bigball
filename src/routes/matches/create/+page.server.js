import { directus } from "$lib/db/directus";
import { error, redirect } from "@sveltejs/kit";

export async function load() {
    try {
        let requestActiveTeams = await directus.items('teams').readByQuery({
            limit: 32,
            filter: {
                active: {
                    _eq: true
                }
            }
        });

        return { teams: requestActiveTeams.data };
    } catch(err) {
        console.log("Error:", err);
        throw new error(500, err);
    }
}

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const dataToJSON = Object.fromEntries(formData.entries());

        try {
            await directus.items('matches').createOne(dataToJSON);
        } catch(err) {
            throw new error(500, err);
        }

        throw new redirect(303, "/matches");
    }
}