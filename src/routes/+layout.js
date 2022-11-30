export function load({ params, url }) {
    let userId = url.searchParams.get('user');

    return {
        active: params.slug,
        user: userId
    }
}