<script>
    export let user;
</script>
<div class="w-full flex justify-around text-3xl">
    <a href="/ranking?user={user}">🥇</a>
    <a href="/ranking/worst?user={user}">🐭</a>
    <a href="/ranking/bullseye?user={user}">🎯</a>
</div>