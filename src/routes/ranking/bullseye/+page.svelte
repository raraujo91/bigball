<script>
    export let data;

    let { ranking } = data;

    let orderedRanking = ranking.sort((a, b) => b.bullseyes - a.bullseyes);
</script>

<div class="mt-8">
    <div class="w-full flex justify-center pb-4">
        <h1 class="text-3xl font-bold uppercase">As cravadas</h1>
    </div>
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
                        {:else}
                            {id+1}
                        {/if} 
                    </td>
                    <td>{user.name}</td>
                    <td class="font-bold">{user.bullseyes}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
