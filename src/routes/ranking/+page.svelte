<script>
    export let data;

    let { ranking } = data;

    let orderedRanking = ranking.sort((a, b) => b.totalPoints - a.totalPoints);
</script>

<div class="mt-8">
    <table class="table-fixed w-full border border-slate-500">
        <thead>
            <tr class="bg-slate-600">
                <th>&nbsp;</th>
                <th>Nome</th>
                <th>Pontos</th>
            </tr>
        </thead>
        <tbody>
            {#each orderedRanking as user, id}
                <tr class="text-center border border-slate-500 {id == 0 ? "bg-slate-700 text-2xl font-bold" : ""}">
                    <td>
                        {#if id == 0}
                            🏆
                        {:else if id == 1}
                            🥈
                        {:else if id == 2}
                            🥉
                        {:else}
                            {id+1}
                        {/if} 
                    </td>
                    <td>{user.name}</td>
                    <td class="font-bold">{user.totalPoints}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
