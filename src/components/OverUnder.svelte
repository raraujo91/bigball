<script>
    export let score;
</script>

<div class="w-full flex flex-col text-center mt-6">
    <h1 class="text-xl mb-4">{score.rule}</h1>
    <div class="flex w-full">
        <input
            type="radio"
            name="over-under"
            id="over"
            value="over"
            class="sr-only peer/over"
        />
        <label
            for="over"
            class="rounded-l-full p-4 w-full bg-slate-500 peer-checked/over:bg-emerald-700"
            >Over</label
        >
        <input
            type="radio"
            name="over-under"
            id="under"
            value="under"
            class="sr-only peer/under"
        />
        <label
            for="under"
            class="rounded-r-full p-4 w-full bg-slate-500 peer-checked/under:bg-red-700"
            >Under</label
        >
    </div>
</div>
