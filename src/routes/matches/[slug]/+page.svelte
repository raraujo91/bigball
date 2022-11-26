<script>
    export let data;
    let { match } = data;
    import MatchContainer from "../../../components/MatchContainer.svelte";
</script>

<MatchContainer match={match} />