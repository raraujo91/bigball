<script>
    import { OVER_UNDER_PLAYOFFS, OVER_UNDER_REGULAR, saoPauloTime } from "$lib/func";
    export let bets;

    let OVER_UNDER = saoPauloTime > "2022-12-03T00:00:00" ? OVER_UNDER_PLAYOFFS : OVER_UNDER_REGULAR;

    function getBaseValue(bet, rule) {
        const ruleOverUnder = OVER_UNDER.find(OU => OU.NAME == rule);
        const checkOverUnder = bet.matchId[rule] > ruleOverUnder.BASE ? "over" : "under";
        return checkOverUnder;
    }

    const BET_ICONS = {
        "yellowCards": "AMA", 
        "redCards": "VER", 
        "cornerKicks": "ESC", 
        "headerGoals": "CAB", 
        "freeKickGoals": "FAL", 
        "longRangeGoals": "FOR", 
        "penaltyKickGoals": "PEN", 
    }
</script>

{#each bets as bet}
    <div class="m-4 border border-slate-500">
        <div class="w-full flex">
            <div class="w-full text-center text-2xl font-bold">
                <span class="align-middle">{bet.userId.name}</span>
            </div>
            <div class="w-full text-center text-2xl font-bold">
                <span class="align-middle">{bet.homeId.flag} {bet.homeScore} x {bet.awayScore} {bet.awayId.flag}</span>
            </div>
        </div>
        <div class="w-full py-2 text-center text-lg font-bold">
            {#each Object.keys(BET_ICONS) as icon}
                <span class="{bet.matchId.finished == false || bet[icon] == null ? "bg-slate-700 border-slate-100 text-slate-100" : getBaseValue(bet, icon) == bet[icon] ? "bg-emerald-500 border-emerald-900" : "bg-red-500 border-red-900"} inline-flex items-baseline align-middle my-1 mx-1 px-2 border rounded-full">
                    {BET_ICONS[icon]} {bet[icon] == "over" ? "🔼" : bet[icon] == "under" ? "🔽" : "😴" } 
                </span>
            {/each}
        </div>
    </div>
{/each}