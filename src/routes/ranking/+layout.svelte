<script>
    import RankingTypesContainer from "../../components/RankingTypesContainer.svelte";
    export let data;

    console.log(data);
</script>
<div>
    <RankingTypesContainer user={data.user} />
    <slot></slot>
</div>