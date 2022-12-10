<script>
    import { OVER_UNDER_PLAYOFFS } from "$lib/func";
    export let data;
    let { match } = data;

    let { isPlayoff, overtime, penaltyKicks, penaltyKickWinner, overtimeWinner, finished } = match;

    const inputFields = OVER_UNDER_PLAYOFFS.map(RULE => { 
        return { 
            value: match[RULE.NAME],
            label: RULE.LABEL,
            name: RULE.NAME
        } 
    });

    const checkboxFields = {
        isPlayoff: Boolean(isPlayoff), 
        overtime: Boolean(overtime), 
        penaltyKicks: Boolean(penaltyKicks),
        finished: Boolean(finished)
    }

    $: console.log(checkboxFields);

    const checkboxLabels = (field) => {
        switch(field) {
            case 'isPlayoff':
                return "Mata-mata";
            case "overtime":
                return "Prorrogação";
            case "penaltyKicks":
                return "Penaltis";
            case "penaltyKickWinner":
                return "Vencedor nos pênaltis";
            case "overtimeWinner":
                return "Vencedor na prorrogação";
            case "finished":
                return "Finalizado";
        }
    }
</script>

<form method="POST">
    <div class="w-full uppercase text-md">
        <div class="flex justify-center text-center py-2">
            <input class="w-auto text-center text-slate-800 rounded-lg" type="datetime-local" id="dateTime" name="dateTime" value={match.dateTime} />
        </div>
        <div class="grid grid-cols-2 flex justify-center text-center py-4">
            <div>
                <div class="font-bold text-lg">({match.homeId.id}) {match.homeId.name}</div>
                <input class="w-24 h-24 text-slate-900 text-center text-6xl rounded-lg" name="homeScore" type="text" value="{match.homeScore}"/>
            </div>
            <div>
                <div class="font-bold text-lg">({match.awayId.id}) {match.awayId.name}</div>
                <input class="w-24 h-24 text-slate-900 text-center text-6xl rounded-lg" name="awayScore" type="text" value="{match.awayScore}"/>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-2 uppercase text-sm flex">    
        {#each inputFields as field}
            <div class="justify-center text-center py-4">
                <input class="w-24 h-24 text-slate-900 text-center text-6xl rounded-lg mb-2" name={field.name} id={field.name} value={field.value} />
                <div class="font-thin" id="ruleLabel">{field.label}</div>
            </div>
        {/each}
            <div class="flex flex-col justify-center uppercase text-md px-4 mb-2">
                {#each Object.keys(checkboxFields) as field}
                    <div class="py-1">
                        <input type="checkbox" name={field} id={field} bind:checked={checkboxFields[field]} />
                        <label class="font-thin" for={field} id="ruleLabel">{checkboxLabels(field)}</label>
                    </div>
                {/each}
            </div>
    </div>
    <div class="px-4 w-full uppercase text-sm flex flex-col justify-center items-center">
        {#if checkboxFields.overtime}
            <div class="pb-1" id="ruleLabel">{checkboxLabels("overtimeWinner")}</div>
            <input class="text-slate-900 w-10 h-10" type="text" name="overtimeWinner" id="overtimeWinner" value="{overtimeWinner?.id ?? ""}" />
        {/if}
        {#if checkboxFields.penaltyKicks}
            <div class="pb-1" id="ruleLabel">{checkboxLabels("penaltyKickWinner")}</div>
            <input class="text-slate-900 w-10 h-10 text-2xl text-center" type="text" name="penaltyKickWinner" id="penaltyKickWinner" value="{penaltyKickWinner?.id ?? ""}" />
        {/if}
    </div>
    <div class="w-full text-2xl flex justify-center items-center align-middle uppercase mt-6">
        <button type="submit" class="font-bold rounded-full uppercase bg-orange-600 disabled:bg-slate-400 disabled:text-slate-900 hover:bg-orange-800 w-full h-10">Salvar</button>
    </div>
</form>