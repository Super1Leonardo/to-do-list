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
    import { onMount } from 'svelte';
    import {browser} from '$app/environment';
    import type { ActionData, PageData } from './$types';
    import { page } from '$app/stores';
    

    async function toMain() {
        await goto('/main-page')
    }

    export let data: PageData
    let form
    $: form = $page.form    
    
    // if (form.value === 3) {
    //     alert('Hello')
    // }

    // export let nickname: string;
    // export let password: string;

    // onMount(() => {
    //     let nick = document.querySelector('#nickname') as HTMLInputElement
    //     let pass = document.querySelector('#password') as HTMLInputElement
    //     nick.addEventListener('input', () => {
    //         nickname = nick.value
    //     })
    //     pass.addEventListener('input', () => {
    //         password = pass.value
    //     })
    // })
</script>

{#if form?.value === 3}
    <h1> Hello</h1>
{/if}

<div class="flexix flex-col h-full px-[2vw] pb-[1.5vh] pt-[10vh] ">
    <form method="post" style="display: contents;">
        <h1 class='font-bold text-5xl'>Welcome!</h1>
        <div class="bg-second rounded-lg flex flex-col items-center px-[5vw] w-full mt-[5vh] h-[45vh] ">  
            <h2 class="font-bold mt-[5vh] ">Nickname</h2>
            <input id="nickname" name="nickname" class="text-white text-xl w-full bg-black mt-[2vh] border-4 border-spotify focus-visible:outline-none rounded-xl px-[1vh]">
            <h2 class="font-bold mt-[4vh] ">Password</h2>
            <input id="password" name="password" class="text-white w-full text-xl bg-black mt-[2vh] border-4 border-spotify focus-visible:outline-none rounded-xl px-[1vh]">
        </div>
        <div>
            <!-- create  -->
            <button id='button' formaction="?/create" class="flexix bg-spotify cursor-pointer fixed bottom-0 left-0 right-0 mx-[2vw] z-10 mb-[4vh] h-[6vh] rounded-lg text-black font-bold text-2xl">Create account</button>
            <!-- sign in -->
            <button id='button' formaction="?/sign_in" class="flexix bg-second cursor-pointer fixed bottom-0 left-0 right-0 mx-[2vw] z-10 mb-[11vh] h-[6vh] rounded-lg text-spotify font-bold text-2xl">Sign in</button>
        </div>
    </form>   
</div>
