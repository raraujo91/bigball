<script>
    export let data;

    let { ranking, matches, best } = data;

    let orderedRanking = ranking.sort((a, b) => b.totalPoints - a.totalPoints);

    let orderAvgRanking = ranking.map(data => {
        let { totalPoints, ...user } = data;

        return { 
            avgPoints: parseFloat(totalPoints / matches).toPrecision(3),
            ...user
        }
    });
        

</script>

<div class="mt-8">
    <div class="w-full flex justify-center pb-4">
        <h2 class="text-3xl font-bold uppercase">Ranking Geral</h2>
    </div>
    <table class="table-auto w-full border border-slate-500">
        <thead>
            <tr class="bg-slate-600">
                <th>&nbsp;</th>
                <th>Nome</th>
                <th>Pontos</th>
                <th>Md/J</th>
            </tr>
        </thead>
        <tbody>
            {#each orderedRanking as user, id}
                <tr class="text-center border border-slate-500 {id == 0 ? "bg-slate-700 font-bold" : ""}">
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
                    <td>{user.totalPoints}</td>
                    <td>{orderAvgRanking[id].avgPoints}</td>
                </tr>
            {/each}
        </tbody>
    </table>
    <div class="w-full flex justify-center pb-4">
        <h2 class="text-3xl font-bold uppercase mt-6">Top #3 apostas</h2>
    </div>
    <table class="table-fixed w-full border border-slate-500">
        <tbody>
            {#each best as bet}
                <tr class="text-center border border-slate-500">
                    <td>{bet.userId.name}</td>
                    <td class="text-2xl inline-block align-middle w-full">{bet.homeId.flag} x {bet.awayId.flag}</td>
                    <td class="font-bold w-16">{bet.totalPoints}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
