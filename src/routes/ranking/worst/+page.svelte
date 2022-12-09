<script>
    export let data;
    
    let { results, worst } = data;

    let orderedRanking = results.sort((a, b) => a.totalPoints - b.totalPoints);
</script>

<div class="mt-8">
    <div class="w-full flex justify-center pb-4">
        <h2 class="text-3xl font-bold uppercase">Pé di Rato do dia</h2>
    </div>
    {#if orderedRanking.length == 5}
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
                            🐀
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
    {:else} 
    <div class="w-full flex justify-center">
        <h1>Aguardando todos apostarem...</h1>
    </div>
    {/if}
    <div class="w-full flex justify-center pb-4">
        <h2 class="text-3xl font-bold uppercase mt-6">Piores apostas</h2>
    </div>
    <table class="table-fixed w-full border border-slate-500">
        <tbody>
            {#each worst as bet}
                <tr class="text-center border border-slate-500">
                    <td>{bet.userId.name}</td>
                    <td class="text-2xl inline-block align-middle w-full">{bet.homeId.flag} x {bet.awayId.flag}</td>
                    <td class="font-bold w-16">{bet.totalPoints}</td>
                </tr>
            {/each}
        </tbody>
    </table>    
</div>
