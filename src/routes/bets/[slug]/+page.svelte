<script>
    import BetContainer from "../../../components/BetContainer.svelte";
    import FinishedBetContainer from "../../../components/FinishedBetContainer.svelte";
    export let data;
</script>

{#if data.match.finshed || data.bet?.isUserBet}
    <FinishedBetContainer userBet={data} />
{:else}
    <BetContainer data={data} />
{/if}