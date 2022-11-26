export let scores = [
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
];

export let matches = [
    {
        "matchId": 1,
        "dateTime": "2022-11-20T13:00:00-03:00",
        "finished": true,
        "homeId": "1",
        "awayId": "2",
        "homeScore": 0,
        "awayScore": 2,
        "yellowCards": 6,
        "redCards": 0,
        "cornerKicks": 4,
        "headerGoals": 1,
        "freeKickGoals": 0,
        "penaltyKickGoals": 1,
        "longRangeGoals": 0
    },
    {
        "matchId": 2,
        "dateTime": "2022-11-24T10:00:00-03:00",
        "finished": false,
        "homeId": "5",
        "awayId": "6",
        "homeScore": 6,
        "awayScore": 2,
        "yellowCards": 0,
        "redCards": 0,
        "cornerKicks": 0,
        "headerGoals": 0,
        "freeKickGoals": 0,
        "penaltyKickGoals": 0,
        "longRangeGoals": 0
    },
    {
        "matchId": 3,
        "dateTime": "2022-11-21T13:00:00-03:00",
        "finished": false,
        "homeId": "3",
        "awayId": "4",
        "homeScore": 0,
        "awayScore": 2,
        "yellowCards": 0,
        "redCards": 0,
        "cornerKicks": 0,
        "headerGoals": 0,
        "freeKickGoals": 0,
        "penaltyKickGoals": 0,
        "longRangeGoals": 0
    }
];

export let ranking = [
    {
        "userId": 1,
        "name": "Naruto",
        "totalPoints": 10
    },
    {
        "userId": 2,
        "name": "Gohan",
        "totalPoints": 5
    },
    {
        "userId": 3,
        "name": "Tai",
        "totalPoints": 6
    },
    {
        "userId": 3,
        "name": "Toguro",
        "totalPoints": 4
    }
];

export let bets = [
    {
        "userId": "89271giasd978",
        "matchId": 1,
        "dateTime": "2022-11-20T13:00:00-03:00",
        "homeScore": 0,
        "awayScore": 1,
        "isUserBet": true,
        "finished": true,
        "homeId": "1",
        "awayId": "2",
        "yellowCards": "over",
        "redCards": "under",
        "cornerKicks": "under",
        "headerGoals": "under",
        "freeKickGoals": "under",
        "penaltyKickGoals": "under",
        "longRangeGoals": "under",
        "totalPoints": 54
    }
];

export let teams = [
    {
        "id": "1",
        "name": "Catar",
        "flag": "🇶🇦",
        "group": "A"
    },
    {
        "id": "2",
        "name": "Equador",
        "flag": "🇪🇨",
        "group": "A"
    },
    {
        "id": "3",
        "name": "Senegal",
        "flag": "🇸🇳",
        "group": "A"
    },
    {
        "id": "4",
        "name": "Holanda",
        "flag": "🇳🇱",
        "group": "A"
    },
    {
        "id": "5",
        "name": "Inglaterra",
        "flag": "🇬🇧",
        "group": "B"
    },
    {
        "id": "6",
        "name": "Irã",
        "flag": "🇮🇷",
        "group": "B"
    },
    {
        "id": "7",
        "name": "EUA",
        "flag": "🇺🇸",
        "group": "B"
    },
    {
        "id": "8",
        "name": "País de Gales",
        "flag": "🐉",
        "group": "B"
    },
    {
        "id": "9",
        "name": "Argentina",
        "flag": "🇦🇷",
        "group": "C"
    },
    {
        "id": "10",
        "name": "Arabia Saudita",
        "flag": "🇸🇦",
        "group": "C"
    },
    {
        "id": "11",
        "name": "Mexico",
        "flag": "🇲🇽",
        "group": "C"
    },
    {
        "id": "12",
        "name": "Polônia",
        "flag": "🇵🇱",
        "group": "C"
    },
    {
        "id": "13",
        "name": "França",
        "flag": "🇫🇷",
        "group": "D"
    },
    {
        "id": "14",
        "name": "Austrália",
        "flag": "🇦🇺",
        "group": "D"
    },
    {
        "id": "15",
        "name": "Dinamarca",
        "flag": "🇩🇰",
        "group": "D"
    },
    {
        "id": "16",
        "name": "Tunisia",
        "flag": "🇹🇳",
        "group": "D"
    },
    {
        "id": "17",
        "name": "Espanha",
        "flag": "🇪🇸",
        "group": "E"
    },
    {
        "id": "18",
        "name": "Costa Rica",
        "flag": "🇨🇷",
        "group": "E"
    },
    {
        "id": "19",
        "name": "Alemanha",
        "flag": "🇩🇪",
        "group": "E"
    },
    {
        "id": "20",
        "name": "Japão",
        "flag": "🇯🇵",
        "group": "E"
    },
    {
        "id": "21",
        "name": "Belgica",
        "flag": "🇧🇪",
        "group": "F"
    },
    {
        "id": "22",
        "name": "Canadá",
        "flag": "🇨🇦",
        "group": "F"
    },
    {
        "id": "23",
        "name": "Marrocos",
        "flag": "🇲🇦",
        "group": "F"
    },
    {
        "id": "24",
        "name": "Croácia",
        "flag": "🇭🇷",
        "group": "F"
    },
    {
        "id": "25",
        "name": "Brasil",
        "flag": "🇧🇷",
        "group": "G"
    },
    {
        "id": "26",
        "name": "Servia",
        "flag": "🇷🇸",
        "group": "G"
    },
    {
        "id": "27",
        "name": "Suiça",
        "flag": "🇨🇭",
        "group": "G"
    },
    {
        "id": "28",
        "name": "Camarões",
        "flag": "🇨🇲",
        "group": "G"
    },
    {
        "id": "29",
        "name": "Portugal",
        "flag": "🇵🇹",
        "group": "H"
    },
    {
        "id": "30",
        "name": "Gana",
        "flag": "🇬🇭",
        "group": "H"
    },
    {
        "id": "31",
        "name": "Uruguai",
        "flag": "🇺🇾",
        "group": "H"
    },
    {
        "id": "32",
        "name": "Coréia do Sul",
        "flag": "🇰🇷",
        "group": "H"
    },
];