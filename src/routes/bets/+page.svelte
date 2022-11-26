<script>
    import BetCard from "../../components/BetCard.svelte";
    export let data;
</script>

{#each data.bets as bet}
    <BetCard data={bet} />
{/each}
