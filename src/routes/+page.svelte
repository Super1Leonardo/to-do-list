<style lang="postcss">
    
    h1 { font-size: 3em; }
    h2 { font-size: 1.5em; }
    h3 { font-size: 1.17em; }
    h4 { font-size: 1.12em; }
    h5 { font-size: .83em; }
    h6 { font-size: .75em; }    
    h1, h2, h3, h4, h5, p, input, a {
        @apply text-white select-none
    }
</style>

<script lang="ts">
    import { goto } from '$app/navigation';
    
    async function toMain() {
        goto('/main-page');
    }
</script>

<div class="flexix flex-col h-full px-[2vw] pb-[1.5vh] pt-[10vh] ">
    <h1 class='font-bold text-5xl'>Welcome!</h1>
    <div class="bg-second rounded-lg flex flex-col items-center px-[5vw] w-full mt-[5vh] h-[45vh] ">
        <h2 class="font-bold mt-[5vh] ">Nickname</h2>
        <input class="text-white text-xl w-full bg-black mt-[2vh] border-4 border-spotify focus-visible:outline-none rounded-xl px-[1vh]">
        <h2 class="font-bold mt-[4vh] ">Password</h2>
        <input class="text-white w-full text-xl bg-black mt-[2vh] border-4 border-spotify focus-visible:outline-none rounded-xl px-[1vh]">
    </div>
    <button id='button' on:click={toMain} class="flexix bg-spotify cursor-pointer fixed bottom-0 left-0 right-0 mx-[2vw] z-10 mb-[11vh] h-[6vh] rounded-lg text-black font-bold text-2xl">Next</button>
</div>