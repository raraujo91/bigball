import { redirect } from "@sveltejs/kit";

export function load({ url }) {
    throw redirect(303, `/ranking?${url.search}`);
}