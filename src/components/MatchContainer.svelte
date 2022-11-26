<script>
    export let match;
    import { overUnderRules } from "$lib/func";
</script>

<div class="m-4">
    <div class="text-slate-800 w-full bg-gray-100 rounded-lg p-6 text-4xl">
        <div class="flex">
            <div class="font-bold">{match.homeScore}</div>
            <div class="ml-2 flex font-thin w-full">{match.homeId.name}</div>
            <div>{match.homeId.flag}</div>
        </div>
        <div class="flex">
            <span class="font-bold">{match.awayScore}</span>
            <span class="ml-2 flex font-thin w-full">{match.awayId.name}</span>
            <span class="">{match.awayId.flag}</span>
        </div>
    </div>

    <div class="mt-4 w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 flex justify-center text-center">
        {#each Object.keys(overUnderRules) as detail}
            <div class="border border-slate-500 py-4">
                <div class="text-5xl font-bold pb-4">{match[detail]}</div>
                <div class="text-xs uppercase">{overUnderRules[detail]}</div>
            </div>
        {/each}
    </div>
</div>