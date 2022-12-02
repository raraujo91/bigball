<script>
    import moment from "moment-timezone";
    import MatchContainer from "../../../components/MatchContainer.svelte";
    import MiniBetsContainer from "../../../components/MiniBetsContainer.svelte";
    
    export let data;
    let { match, bets } = data.result;

    let showBets = moment(new Date().toISOString()).tz('America/Sao_Paulo').format() > match.dateTime;
</script>

<MatchContainer match={match} />
{#if showBets}
    <MiniBetsContainer bets={bets} />
{/if}