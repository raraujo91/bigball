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
        {#if match.finished && points.conditions.length > 0}
            <div class="w-full mt-6">
                {#each points.conditions as condition}
                    <div class="w-full flex justify-between text-sm">
                        <span>{condition.rule}</span>
                        <span class="font-bold">{condition.score}</span>
                    </div>
                {/each}
            </div>
        {/if}
    </div>
    <div class="mt-4 w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 flex justify-center text-center">
        {#each Object.keys(overUnderRules) as score}
            {#if match.finished}
                <div class="relative border border-slate-500 py-4">
                    <div class="text-5xl font-bold pb-4">{match[score]}</div>
                    <div class="text-xs font-bold uppercase">
                        {scores.overUnder.find((point) => point.name == score).label}
                    </div>
                    {#if points.overUnderPoints[score]}
                        <div class="absolute inline-flex font-bold justify-center items-center rounded-full -top-2 -right-3 py-2 {points.overUnderPoints[score] > 0 ? 'bg-emerald-600 px-3' : 'bg-red-600 px-4'}">
                            {points.overUnderPoints[score] > 0 ? `+${points.overUnderPoints[score]}`: points.overUnderPoints[score] }
                        </div>
                    {/if}
                </div>
            {:else}
                <button class="relative border border-slate-500 py-4">
                    <div class="flex items-center justify-evenly pb-4 uppercase">
                        {#if bet[score]}
                            <span class="font-bold text-5xl">{bet[score] == "over" ? "+" : "-"}{scores.overUnder.find(overUnder => overUnder.name == score ).base}</span>
                        {:else}
                            <span class="align-middle font-bold text-5xl">-</span>
                        {/if}
                    </div>
                    <div class="text-xs font-bold uppercase">
                        {scores.overUnder.find((point) => point.name == score).label}
                    </div>
                    {#if match.finished && points.overUnderPoints[score]}
                        <div class="absolute inline-flex font-bold justify-center items-center rounded-full -top-2 -right-3 py-2 px-4 {points.overUnderPoints[score] > 0 ? 'bg-emerald-600' : 'bg-red-600'}">
                            {points.overUnderPoints[score]}
                        </div>
                    {/if}
                </button>
            {/if}
        {/each}
        {#if match.finished}
            <div class="bg-slate-100 text-slate-900 border border-slate-100 py-4">
                <div class="text-5xl font-bold pb-4">{points.totalPoints}</div>
                <div class="text-xs font-bold uppercase">pontuação total</div>
            </div>
        {/if}
    </div>
</div>
