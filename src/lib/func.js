import moment from "moment-timezone";

export let saoPauloTime = moment(new Date().toISOString()).tz('America/Sao_Paulo').format();

export let overUnderRules = {
    yellowCards: "Cartões amarelos",
    redCards: "Cartões vermelhos",
    cornerKicks: "Escanteios",
    headerGoals: "Gols de cabeça",
    freeKickGoals: "Gols de falta",
    penaltyKickGoals: "Gols de pênalti",
    longRangeGoals: "Gols de fora da área"
};

export let REGULAR_SCORE = {
    BULLSEYE: 10,
    EXTRA_POINT: 6,
    DRAW: 6,
    WINNER_GOALS: 6,
    WINNER_GOALS_LOSER: 4
};

export let OVER_UNDER_REGULAR = [
    {
        NAME: 'yellowCards',
        LABEL: 'Cartões amarelos',
        BASE: 2.5,
        POINTS_OVER: 6,
        POINTS_UNDER: 4
    },
    {
        NAME: 'redCards',
        LABEL: 'Cartões vermelhos',
        BASE: 1.5,
        POINTS_OVER: 8,
        POINTS_UNDER: 6
    },
    {
        NAME: 'cornerKicks',
        LABEL: 'Escanteios',
        BASE: 8.5,
        POINTS_OVER: 6,
        POINTS_UNDER: 6
    },
    {
        NAME: 'headerGoals',
        LABEL: 'Gols de cabeça',
        BASE: 1.5,
        POINTS_OVER: 6,
        POINTS_UNDER: 6
    },
    {
        NAME: 'freeKickGoals',
        LABEL: 'Gols de falta',
        BASE: 1.5,
        POINTS_OVER: 8,
        POINTS_UNDER: 6
    },
    {
        NAME: 'longRangeGoals',
        LABEL: 'Gols de fora da área',
        BASE: 1.5,
        POINTS_OVER: 4,
        POINTS_UNDER: 4
    },
    {
        NAME: 'penaltyKickGoals',
        LABEL: 'Gols de pênalti',
        BASE: 1.5,
        POINTS_OVER: 8,
        POINTS_UNDER: 6
    }
];

export let OVER_UNDER_PLAYOFFS = [
    {
        NAME: 'yellowCards',
        LABEL: 'Cartões amarelos',
        BASE: 2.5,
        POINTS_OVER: 6,
        POINTS_UNDER: 4
    },
    {
        NAME: 'redCards',
        LABEL: 'Cartões vermelhos',
        BASE: 0.5,
        POINTS_OVER: 8,
        POINTS_UNDER: 6
    },
    {
        NAME: 'cornerKicks',
        LABEL: 'Escanteios',
        BASE: 8.5,
        POINTS_OVER: 6,
        POINTS_UNDER: 6
    },
    {
        NAME: 'headerGoals',
        LABEL: 'Gols de cabeça',
        BASE: 0.5,
        POINTS_OVER: 6,
        POINTS_UNDER: 6
    },
    {
        NAME: 'freeKickGoals',
        LABEL: 'Gols de falta',
        BASE: 0.5,
        POINTS_OVER: 8,
        POINTS_UNDER: 6
    },
    {
        NAME: 'longRangeGoals',
        LABEL: 'Gols de fora da área',
        BASE: 0.5,
        POINTS_OVER: 4,
        POINTS_UNDER: 4
    },
    {
        NAME: 'penaltyKickGoals',
        LABEL: 'Gols de pênalti',
        BASE: 0.5,
        POINTS_OVER: 8,
        POINTS_UNDER: 6
    }
];
