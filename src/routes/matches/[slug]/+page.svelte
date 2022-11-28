<script>
    export let data;
    let { match, bets } = data.result;
    import MatchContainer from "../../../components/MatchContainer.svelte";
    import MiniBetsContainer from "../../../components/MiniBetsContainer.svelte";
</script>

<MatchContainer match={match} />
{#if bets}
    <MiniBetsContainer bets={bets} />
{/if}