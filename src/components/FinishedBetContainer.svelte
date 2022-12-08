<script>
    import { overUnderRules, saoPauloTime } from "$lib/func";
    export let userBet;
    let { bet, match, teams, points, scores, id, user } = userBet;
</script>

<div class="m-4">
    <div class="text-slate-800 w-full bg-gray-100 rounded-lg p-6">
        <div class="flex text-3xl">
            <div class="font-bold">{bet.homeScore}</div>
            <div class="ml-2 flex font-thin w-full">{teams.home.name}</div>
            <div>{teams.home.flag}</div>
        </div>
        <div class="flex text-3xl">
            <span class="font-bold">{bet.awayScore}</span>
            <span class="ml-2 flex font-thin w-full">{teams.away.name}</span>
            <span class="">{teams.away.flag}</span>
        </div>
        <div class="flex justify-evenly mt-6">
            {#if saoPauloTime > match.dateTime}
                <span class="ring ring-slate-300 uppercase font-bold text-sm rounded-full bg-slate-200 py-1 px-4">
                    {teams.home.name}
                    {match.homeScore} x {match.awayScore}
                    {teams.away.name}
                </span>
            {:else}
                <a href="/bets/{id}/edit?user={user}" class="flex items-center justify-center font-bold rounded-full uppercase bg-orange-600 disabled:bg-slate-400 disabled:text-slate-900 hover:bg-orange-800 w-full h-10 text-slate-100">Editar</a>
            {/if}
        </div>
        {#if match.finished}
            <div class="w-full mt-6">
                {#if points.conditions.length > 0}
                    {#each points.conditions as condition}
                        <div class="w-full flex justify-between text-md">
                            <span>{condition.rule}</span>
                            <span class="font-bold">{condition.score}</span>
                        </div>
                    {/each}
                {/if}
                {#each Object.keys(overUnderRules) as score}
                    <div class="w-full flex justify-between text-md">
                        <span>{scores.overUnder.find((point) => point.name == score).label}</span>
                        <span class="font-bold {points.overUnderPoints[score] < 0 ? "text-red-500" : ""}">{points.overUnderPoints[score] ?? "-"}</span>
                    </div>
                {/each}
                    <div class="w-full flex justify-between text-2xl font-bold pt-4 uppercase">
                        <span>Total</span>
                        <span class="font-bold">{points.totalPoints}</span>
                    </div>
            </div>
        {/if}
    </div>
</div>
