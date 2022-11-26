<script>
    export let match;
    import { user } from '$lib/stores/user';
</script>

<a href="/matches/{ match.id }{ $user }">
    <div class={`text-slate-800 w-full h-100 text-6xl bg-gray-100 hover:bg-gray-200 hover:drop-shadow-sm rounded-lg mt-4 mb-4 p-6`}>
        <div>
            <div class="text-xs font-bold flex justify-evenly">JOGO #{ match.id } - { new Date(match.dateTime).toLocaleString() }</div>
        </div>
        <div class="flex justify-evenly mt-2">
            <div>{ match.homeId.flag }</div>
            <div>{ match.homeScore } <span class="inline-block align-middle text-xl">x</span> { match.awayScore }</div>
            <div>{ match.awayId.flag }</div>
        </div>  
    </div>
</a>