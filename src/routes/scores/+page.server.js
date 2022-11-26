// import { scores } from "$lib/db/mock"

export async function load({ fetch }) {
    let res = await fetch('/api/points');
    let scores = await res.json();
    return { ...scores }
}