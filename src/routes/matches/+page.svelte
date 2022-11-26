<script>
    import MatchCard from "../../components/MatchCard.svelte";
    export let data;
    let { matches } = data;
</script>

{#each matches as match}
    <MatchCard match={match} />
{/each}