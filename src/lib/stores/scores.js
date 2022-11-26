import { readable } from "svelte/store";

export const scores = readable([
    {
        "id": 1,
        "slug": "bullseye",
        "rule": "Placar exato",
        "points": 10,
        "overUnder": false,
        "overPoints": 0,
        "underPoints": 0,
        "overUnderValue": 0
    },
    {
        "id": 2,
        "slug": "extraPoint",
        "rule": "+3 gols de diferença",
        "points": 5,
        "overUnder": false,
        "overPoints": 0,
        "underPoints": 0,
        "overUnderValue": 0
    },
    {
        "id": 3,
        "slug": "golsWinner",
        "rule": "Gols do vencedor",
        "points": 5,
        "overUnder": false,
        "overPoints": 0,
        "underPoints": 0,
        "overUnderValue": 0
    },
    {
        "id": 4,
        "slug": "draw",
        "rule": "Empate",
        "points": 4,
        "overUnder": false,
        "overPoints": 0,
        "underPoints": 0,
        "overUnderValue": 0
    },
    {
        "id": 5,
        "slug": "winner",
        "rule": "Vencedor",
        "points": 4,
        "overUnder": false,
        "overPoints": 0,
        "underPoints": 0,
        "overUnderValue": 0
    },
    {
        "id": 6,
        "slug": "loserGoals",
        "rule": "Gols do perdedor",
        "points": 4,
        "overUnder": false,
        "overPoints": 0,
        "underPoints": 0,
        "overUnderValue": 0
    },
    {
        "id": 7,
        "slug": "winnerPk",
        "rule": "Vencedor nos pênaltis",
        "points": 5,
        "overUnder": false,
        "overPoints": 0,
        "underPoints": 0,
        "overUnderValue": 0
    },
    {
        "id": 8,
        "slug": "yellowCards",
        "rule": "Cartão amarelo",
        "points": 0,
        "overUnder": true,
        "overPoints": 6,
        "underPoints": 4,
        "overUnderValue": 2.5
    },
    {
        "id": 9,
        "slug": "redCards",
        "rule": "Cartão vermelho",
        "points": 0,
        "overUnder": true,
        "overPoints": 8,
        "underPoints": 6,
        "overUnderValue": 1.5
    },
    {
        "id": 10,
        "slug": "headerGoals",
        "rule": "Gol de cabeça",
        "points": 0,
        "overUnder": true,
        "overPoints": 6,
        "underPoints": 6,
        "overUnderValue": 1.5
    },
    {
        "id": 11,
        "slug": "cornerKicks",
        "rule": "Escanteios",
        "points": 0,
        "overUnder": true,
        "overPoints": 6,
        "underPoints": 6,
        "overUnderValue": 8.5
    },
    {
        "id": 12,
        "slug": "freeKickGoals",
        "rule": "Gol de falta",
        "points": 0,
        "overUnder": true,
        "overPoints": 8,
        "underPoints": 6,
        "overUnderValue": 1.5
    },
    {
        "id": 14,
        "slug": "longRangeGoal",
        "rule": "Gol de fora da área",
        "points": 0,
        "overUnder": true,
        "overPoints": 4,
        "underPoints": 4,
        "overUnderValue": 1.5
    },
    {
        "id": 15,
        "slug": "penaltyKickGoal",
        "rule": "Gol de pênalti",
        "points": 0,
        "overUnder": true,
        "overPoints": 8,
        "underPoints": 6,
        "overUnderValue": 1.5
    }
]);