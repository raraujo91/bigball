import { Directus } from '@directus/sdk';
import 'dotenv/config';

const directusToken = process.env.DIRECTUS_API_TOKEN;
const directusUrl = process.env.DIRECTUS_URL;

export const directus = new Directus(directusUrl, {
    auth: {
        staticToken: directusToken
    }
});