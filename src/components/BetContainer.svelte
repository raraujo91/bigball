<script>
    export let data;

    let { bet, teams, scores, match, userId } = data;
    
    let betLockDueDate = Date.now() > new Date(match.dateTime);
    
    let overUnderScores = scores.overUnder;
    console.log("ous-container", overUnderScores);

    $: console.log(helperCounter);

    $: helperCounter = [];
    $: betAmountValidation = helperCounter.length >= 5;

    const eventHandler = (event) => {

        let oppositeOption = event.target.value == "over" ? document.getElementById(`${event.target.name}-under`) : document.getElementById(`${event.target.name}-over`);

        oppositeOption.checked = false;

        if(helperCounter.includes(event.target.name)) {
            let removeDupeEntry = helperCounter.filter((entry) => entry != event.target.name);
            helperCounter = removeDupeEntry;
            return true;
        }

        helperCounter = [...helperCounter, event.target.name];
    }
</script>

<form method="POST">
    <input hidden name="userId" value={userId} />
    <input hidden name="homeId" value={teams.home.id} />
    <input hidden name="awayId" value={teams.away.id} />
    <input hidden name="dateTime" value={match.dateTime} />
    <input hidden name="matchId" bind:value={match.id} />
    <input hidden name="createdAt" value={new Date().toISOString()} />
    <div class="m-4">
        <div class="text-slate-800 w-full bg-gray-100 rounded-lg p-6 text-4xl">
            <div class="flex">
                <input class="font-bold w-10 text-center bg-transparent" name="homeScore" value={bet?.homeScore ? bet?.homeScore : 0} disabled={betLockDueDate} />
                <div class="ml-2 flex font-thin w-full">{teams.home.name}</div>
                <div class="">{teams.home.flag}</div>
            </div>
            <div class="flex">
                <input class="font-bold w-10 text-center bg-transparent" name="awayScore" value={bet?.awayScore ? bet?.awayScore : 0} disabled={betLockDueDate} />
                <span class="ml-2 flex font-thin w-full">{teams.away.name}</span>
                <span class="">{teams.away.flag}</span>
            </div>
        </div>

        {#if !betLockDueDate}
            {#each overUnderScores as score}
                <div class="w-full flex flex-col text-center mt-6">
                    <h1 class="text-xl mb-4">{score.label}</h1>
                    <div class="flex w-full">
                        <input
                            type="checkbox"
                            name={score.name}
                            id="{score.name}-over"
                            value="over"
                            class="sr-only peer/over"
                            on:click={eventHandler}
                            disabled={betLockDueDate}
                        />
                        <label
                            for="{score.name}-over"
                            class="rounded-l-full p-4 w-full bg-slate-500 hover:bg-slate-600 peer-checked/over:bg-emerald-700 cursor-pointer"
                            >Over {score.base}</label
                        >
                        <input
                            type="checkbox"
                            name={score.name}
                            id="{score.name}-under"
                            value="under"
                            class={`sr-only peer/under`}
                            on:click={eventHandler}
                            disabled={betLockDueDate}
                        />
                        <label
                            for="{score.name}-under"
                            class={`rounded-r-full p-4 w-full bg-slate-500 hover:bg-slate-600 peer-checked/under:bg-red-700 cursor-pointer`}
                            >Under {score.base}</label
                        >
                    </div>
                </div>
            {/each}
        {/if}

        <button class="font-bold rounded-full uppercase bg-orange-600 disabled:bg-slate-400 disabled:text-slate-900 hover:bg-orange-800 w-full h-10 mt-8" disabled={!betAmountValidation}>
            {#if betLockDueDate}
                Apostas encerradas
            {:else}
                {#if helperCounter.length < 5}
                    Faltam mais {5 - helperCounter.length} apostas
                {:else}
                    Salvar
                {/if}
            {/if}
        </button> 
    </div>
</form>