<script>
    import "../app.css";
    import Container from "../components/Container.svelte";
    import Navbar from "../components/Navbar.svelte";
    
    import { page } from "$app/stores";
</script>

<svelte:head>
    <title>Bolão do Ratatouille</title>
</svelte:head>

<Container>
    <slot />
    <Navbar active={page}/>
</Container>
