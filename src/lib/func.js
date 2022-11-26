import { browser } from "$app/environment";

export const overUnderRules = {
    yellowCards: "Cartões amarelos",
    redCards: "Cartões vermelhos",
    cornerKicks: "Escanteios",
    headerGoals: "Gols de cabeça",
    freeKickGoals: "Gols de falta",
    penaltyKickGoals: "Gols de pênalti",
    longRangeGoals: "Gols de fora da área"
};

export function checkIfCached(endpoint) {

    let cachedContent;

    if(browser) {
        cachedContent = window.localStorage.getItem(endpoint);
        if(cachedContent != undefined) {
            return cachedContent;
        }
    }

    return false;
}