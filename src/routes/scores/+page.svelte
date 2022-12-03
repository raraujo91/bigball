<script>
    export let data;
    let { regular: regularRules, overUnder: overUnderRules } = data;
</script>

<div class="w-full flex flex-col justify-center mb-8">
    <div class="flex justify-center w-full m-auto">
        <h1 class="text-2xl font-bold m-4">Regular</h1>
    </div>
    <table class="table-auto w-full border border-slate-500">
        <thead>
            <tr class="bg-slate-600">
                <th>Regra</th>
                <th>&nbsp;</th>
                <th>Pontos</th>
            </tr>
        </thead>
        <tbody>
            {#each regularRules as rule}
                <tr class="text-center border border-slate-500">
                    <td class="p-2">{rule.label}</td>
                    <td>&nbsp;</td>
                    <td class="font-bold border border-slate-500">{rule.points}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<div class="w-full flex flex-col justify-center">
    <div class="flex justify-center w-full m-auto">
        <h1 class="text-2xl font-bold m-4">Over/Under</h1>
    </div>
    <table class="table-auto w-full border border-slate-500">
        <thead>
            <tr class="bg-slate-600">
                <th>Regra</th>
                <th>&nbsp;</th>
                <th>O</th>
                <th>U</th>
            </tr>
        </thead>
        <tbody>
            {#each overUnderRules as rule}
                <tr class="text-center border border-slate-500">
                    <td rowspan="2">{rule.label}</td>
                    <td rowspan="2" class="border border-slate-500">{rule.base}</td>
                    <td class="border border-slate-500 text-green-500 font-bold">{rule.overPoints}</td>
                    <td class="text-green-500 font-bold">{rule.underPoints}</td>
                </tr>
                <tr class="text-center">
                    <td class="border border-slate-500 text-red-300 font-bold">{(-rule.overPoints / 2)}</td>
                    <td class="text-red-300 font-bold">{(-rule.underPoints / 2 )}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>