<script>
    export let active;
    import { user } from "$lib/stores/user";

    user.set($active.url.search);

   $: isActive = ( activePath ) => {
        if($active.route.id.includes(activePath)) {
            return "w-full block py-5 px-3 text-center bg-slate-700 text-yellow-500"
        } else {
            return "w-full block py-5 px-3 text-center hover:bg-slate-700";
        }
    }

    // console.log($active);
</script>

<div class="fixed bottom-0 inset-x-0 flex justify-evenly bg-slate-500 uppercase text-xs font-bold">
    <a href="/ranking{$user}" class={isActive('ranking')}>
        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto icon icon-tabler icon-tabler-trophy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
        <line x1="7" y1="4" x2="17" y2="4"></line>
        <path d="M17 4v8a5 5 0 0 1 -10 0v-8"></path>
        <circle cx="5" cy="9" r="2"></circle>
        <circle cx="19" cy="9" r="2"></circle>
     </svg>Ranking
    </a>
    <a href="/matches{$user}" class={isActive('matches')}>
        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto icon icon-tabler icon-tabler-ball-football" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="9"></circle>
            <path d="M12 7l4.76 3.45l-1.76 5.55h-6l-1.76 -5.55z"></path>
            <path d="M12 7v-4m3 13l2.5 3m-.74 -8.55l3.74 -1.45m-11.44 7.05l-2.56 2.95m.74 -8.55l-3.74 -1.45"></path>
         </svg>
         Matches
    </a>
    <a href="/bets{$user}" class={isActive('bets')}>
        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto icon icon-tabler icon-tabler-checkbox" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <polyline points="9 11 12 14 20 6"></polyline>
            <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9"></path>
         </svg>
         Bets
    </a>
    <a href="/scores{$user}" class={isActive('scores')}>
        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto icon icon-tabler icon-tabler-calculator" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <rect x="4" y="3" width="16" height="18" rx="2"></rect>
            <rect x="8" y="7" width="8" height="3" rx="1"></rect>
            <line x1="8" y1="14" x2="8" y2="14.01"></line>
            <line x1="12" y1="14" x2="12" y2="14.01"></line>
            <line x1="16" y1="14" x2="16" y2="14.01"></line>
            <line x1="8" y1="17" x2="8" y2="17.01"></line>
            <line x1="12" y1="17" x2="12" y2="17.01"></line>
            <line x1="16" y1="17" x2="16" y2="17.01"></line>
         </svg>
         Scoring
    </a>
</div>