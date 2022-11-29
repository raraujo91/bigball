<script>
    export let data;
    let { bet, match, teams } = data;
    console.log(bet);
    import { user } from "$lib/stores/user";
    let userDidBet = bet.isUserBet ? true : false;
    let userBetRing = bet.userForgotBet ? "ring ring-rose-600 opacity-75" : bet.isUserBet ? "ring ring-indigo-500 ring-inset" : "";
</script>

<a href="/bets/{match.id}{$user}" class="{bet.userForgotBet ? "pointer-events-none" : ""}" >
    <div class="text-slate-800 w-full h-100 text-6xl bg-gray-100 hover:bg-gray-200 drop-shadow-lg {userBetRing} rounded-lg mt-4 mb-4 p-6">
        <div>
            <div class="text-xs font-bold flex justify-evenly">
                <span>JOGO #{match.id} - {new Date(match.dateTime).toLocaleString()}</span>
            </div>
        </div>
        <div class="flex justify-evenly mt-2">
            <div>{ teams.home.flag }</div>
            <div>{ userDidBet ? bet.homeScore : "-"} <span class="inline-block align-middle text-xl">x</span> { userDidBet ? bet.awayScore : "-"}</div>
            <div>{ teams.away.flag }</div>
        </div>
        {#if userDidBet}
            <div class="flex justify-evenly mt-4">
                    <span class="ring ring-slate-300 uppercase font-bold text-sm rounded-full bg-slate-200 py-1 px-4">{ bet?.totalPoints } pontos</span>
            </div>
        {/if}  
    </div>
</a>