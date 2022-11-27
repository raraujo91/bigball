<script>
    export let data, form;
    let { matches } = data;
</script>

<div class="w-full m-auto flex justify-center">
    <form method="POST">
        <select
            name="match"
            id="match"
            class="w-full h-14 rounded-lg text-slate-900 text-xl text-center"
        >
            {#each matches.data as match, id}
                <option
                    value={match.id}
                    selected={id == matches.data.length - 1 ? true : false}
                >
                    Jogo #{match.id} | {match.homeId.name} vs {match.awayId.name}
                </option>
            {/each}
        </select>
        <button
            class="w-full my-4 p-4 bg-amber-400 hover:bg-amber-500 rounded-lg font-bold text-xl text-slate-900"
            type="submit">Sync</button
        >
    </form>
</div>

<div class="w-full">
    {#if form?.success}
        <div class="w-full m-auto flex justify-center">
            {#if form?.count == 0}
                Nenhuma bet foi alterada. 
            {/if}
        </div>
        <table class="w-full table-auto">
            {#each form?.results as result, id}
                <tr class={id == 0 ? "bg-slate-700 text-center font-bold text-2xl" : "text-center text-2xl"}>
                    <td class="w-24">{id == 0 ? "🏆" : ""}</td>
                    <td class="w-64">{result.userName}</td>
                    <td class="w-24">{result.totalPoints}</td>
                </tr>
            {/each}
        </table>
    {/if}
</div>
