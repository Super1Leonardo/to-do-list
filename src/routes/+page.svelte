<style lang="postcss">
    
    h1 { font-size: 3em; }
    h2 { font-size: 1.5em; }
    h3 { font-size: 1.17em; }
    h4 { font-size: 1.12em; }
    h5 { font-size: .83em; }
    h6 { font-size: .75em; }    
    h3, h4, h5, p, input, a {
        @apply text-white select-none
    }
</style>

<script lang="ts">
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import {browser} from '$app/environment';
    import type { ActionData, PageData } from './$types';
    import { page } from '$app/stores';
    import { writable } from 'svelte/store';
    

    async function toMain() {
        await goto('/main-page')
    }
    let form: any
    $: form = $page.form    
    
    // if (form.value === 3) {
    //     alert('Hello')
    // }

    // export let nickname: string;
    // export let password: string;

    onMount(() => {
        let nameInput = document.querySelector('#nickname') as HTMLInputElement
        const name = writable(nameInput.value)
        const input1 = document.querySelector('#nickname') as HTMLInputElement
        const input2 = document.querySelector('#password') as HTMLInputElement
    })
</script>


<div class="flex justify-center mt-7 px-6 w-full">
    <h2 class="z-10 absolute rounded-xl py-2 w-[80vw] mx-5 mt-2 text-center font-bold transition-all ease-in-out text-red-600">
        {#if form?.value === 1} Incorrect nickname
        {:else if form?.value === 2} Incorrect password
        {:else if form?.value === 3} Incorrect nickname and password
        {:else if form?.value === 10} Nickname already in use
        {:else if form?.value === 4} Nickname and password have to be 3 symbols or more
        {/if}
    </h2>
</div>


<div class="flexix flex-col h-full px-[2vw] pb-[1.5vh] pt-[10vh] ">
    <form method="post" style="display: contents;">
        <h1 class='font-bold text-white fixed mb-[50vh] text-5xl'>Welcome!</h1>
        <div class="bg-second fixed rounded-lg flex flex-col items-center mx-5 w-[96vw] mt-[5vh] h-[40vh] ">  
            <h2 class="font-bold text-white mt-[5vh] ">Nickname</h2>
            <input id="nickname" name="nickname" class="text-white text-xl w-[86vw] bg-black mt-[2vh] border-4 border-spotify focus-visible:outline-none rounded-xl px-[1vh]">
            <h2 class="font-bold text-white mt-[4vh] ">Password</h2>
            <input id="password" name="password" class="text-white w-[86vw] text-xl bg-black mt-[2vh] border-4 border-spotify focus-visible:outline-none rounded-xl px-[1vh]">
        </div>
        <div>
            <!-- create  -->
            <button id='button' formaction="?/create" class="flexix bg-spotify cursor-pointer fixed bottom-0 left-0 right-0 mx-[2vw] z-10 mb-[4vh] h-[6vh] rounded-lg text-black font-bold text-2xl">Create account</button>
            <!-- sign in -->
            <button id='button' formaction="?/sign_in" class="flexix bg-second cursor-pointer fixed bottom-0 left-0 right-0 mx-[2vw] z-10 mb-[11vh] h-[6vh] rounded-lg text-spotify font-bold text-2xl">Sign in</button>
        </div>
    </form>   
</div>
