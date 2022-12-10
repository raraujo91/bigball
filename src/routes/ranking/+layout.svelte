<script>
    import RankingTypesContainer from "../../components/RankingTypesContainer.svelte";
    export let data;
</script>
<div>
    <RankingTypesContainer user={data.user} />
    <slot></slot>
</div>