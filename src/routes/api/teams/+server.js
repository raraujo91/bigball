import { directus } from "$lib/db/directus"
import { error, json } from "@sveltejs/kit";

export async function GET({ url, setHeaders }){

    const teams = await directus.items('teams').readByQuery({ limit: -1 });

    setHeaders({
        'cache-control': 'max-age=3600, public'
    })

    return json(teams);
}