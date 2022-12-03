<script>
    export let data;
    let { teams } = data;
    
    let target = null;
    
    const handleClick = (event) => {
        target = event.target;
        if(target.htmlFor == "homeId") target.className += " ring ring-inset ring-emerald-500";
        if(target.htmlFor == "awayId") target.className += " ring ring-inset ring-red-500";
    }

    const addTeamToSpot = (event) => {
        if(target == null) return false;
        target.innerHTML = event.target.innerHTML;
        document.querySelector(`input#${target.htmlFor}`).value = event.target.value;
    }
</script>

<div class="w-full">
    <form method="POST">
        <div class="w-full flex justify-evenly align-center text-slate-800 bg-slate-200 rounded-lg text-4xl py-4 my-2">
            <div>
                <input id="homeId" name="homeId" type="text" value="1" class="w-8 h-8 sr-only" readonly /> 
                <label for="homeId" class="bg-slate-300 rounded-lg py-1 px-3 focus:bg-slate-400 active:bg-slate-500" on:keypress={handleClick} on:click|preventDefault={handleClick}>A</label> 
            </div>
            <div>x</div>
            <div>
                <label for="awayId" class="bg-slate-300 rounded-lg py-1 px-3 active:bg-slate-500" on:keypress={handleClick} on:click|preventDefault={handleClick}>B</label> 
                <input id="awayId" name="awayId" type="text" value="1" class="w-8 h-8 sr-only" readonly /> 
            </div>
        </div>
        <div class="grid grid-cols-4 gap-2 text-2xl my-6">
            {#each teams as team}
                    <button class="py-1 px-2 bg-slate-400 hover:bg-slate-300 rounded-md" value={team.id} on:click|preventDefault={addTeamToSpot}>{team.flag}</button>
            {/each}
        </div>
        <div class="w-full text-2xl flex justify-center items-center align-middle uppercase hidden">
            <input class="w-6 h-6" type="checkbox" name="isPlayoff" id="isPlayoff" value="true" checked>
            <label class="ml-2" for="isPlayoff">Mata-mata?</label>
        </div>
        <div class="w-full text-2xl flex justify-center items-center align-middle uppercase my-6">
            <input class="w-full rounded-lg ring ring-inset ring-slate-500 text-slate-900 py-1 px-1 text-center" type="datetime-local" name="dateTime" id="dateTime" value="true" checked="true">
        </div>
        <div class="w-full text-2xl flex justify-center items-center align-middle uppercase">
            <button type="submit" class="font-bold rounded-full uppercase bg-orange-600 disabled:bg-slate-400 disabled:text-slate-900 hover:bg-orange-800 w-full h-10">Salvar</button>
        </div>
    </form>
</div>