<style lang="postcss">
    
    /* h1 { font-size: 2em; }
    h2 { font-size: 1.5em; }
    h3 { font-size: 1.17em; }
    h4 { font-size: 1.12em; }
    h5 { font-size: .83em; }
    h6 { font-size: .75em; }     */
    
    button {
        @apply focus-visible:outline-none
    }
</style>

<script lang="ts">

import { PrismaClient } from '@prisma/client';
import { onMount } from 'svelte';
import type { PageData } from '../$types';
    import { text } from '@sveltejs/kit';
    import { numberOfDiv } from '../../store';
    import { get } from 'svelte/store';
    import { page } from '$app/stores';

const prisma = new PrismaClient()

let array: string[] = []
export let data: PageData;
data?.tasks?.forEach((item)=>{array.push(item)})

let form: any
$: form = $page.form

onMount(() => {
    async function Modal(display: string) {
        modal.style.marginTop = '0'
    }
    let number = false;
    let modal = document.querySelector('#modal') as HTMLDivElement
    let button = document.querySelector('#button') as HTMLDivElement
    let button2 = document.querySelector('#button2') as HTMLDivElement
    button.addEventListener('click', () => {
        if (number) {
            modal.style.marginTop = '600px'
            button2.style.display = 'none'
            button.innerHTML = "Add item"
            number = !number
        } else {
            modal.style.marginTop = '0'
            button2.style.display = 'flex'
            button.innerHTML = "Cancel"
            number = !number
        }
    })
    button2.addEventListener('click', () => {
        Modal('600')
        button2.style.display = 'none'
        button.innerHTML = "Add item"
    })
});

</script>

<link rel="stylesheet" href="src\routes\main.css">

<div class="flex justify-between h-dvh py-[2vh] flex-col">
    <div>
        <h1 class="font-bold text-5xl flexix text-spotify mt-[2vh] ">To do list</h1>
    <ul>
        {#each array as text}
            <li>
                <form method="post" class=" contents">
                    <input class="hidden" value={text} name="input">
                    <div id="4" class="bg-second mx-[2vw] flex px-4 items-center justify-between my-[3vh] h-[6vh] rounded-lg ">
                    <h1 class="text-2xl text-white">{array.indexOf(text)+1}: {text}</h1>
                    <button formaction="?/delete" class=" border-2 rounded-lg border-red-600 h-[40px] hover:bg-white focus:bg-black duration-350 ease-in-out transition-colors w-[40px] flex items-center justify-center ">
                        <img width="25" height="25" src="https://img.icons8.com/pastel-glyph/40/dc2626/trash.png" alt="trash"/>
                    </button>
                </div>
                </form>
            </li>
        {/each}
    </ul>
    </div>
    
    <h1 class=" mb-[75%] w-full text-2xl flex items-center justify-center">
        {#if form?.success === 'already'}
            <p class="text-red-600 flex justify-center text-center">You already have this item in your list</p>
        {/if}
    </h1>
    <form method="post" class=" contents">
    <div id='modal' class="fixed flex mt-[600px] border-4 border-spotify transition-all duration-500 ease-in-out left-0 justify-start py-[2vh] px-[5vw] flex-col top-[calc(50%-16vh)] right-0 z-20 bg-second mx-[2vw] rounded-lg h-[36vh] ">
        <h1 class="text-white text-3xl flex justify-center mt-[2vh] font-bold">Enter a text</h1>
        <textarea id='text' name="text" class="bg-black text-white text-start text-xl focus-visible:outline-none p-3 rounded-xl h-full mt-[2vh]"></textarea>
    </div>
    <div class="bg-black fixed bottom-0 left-0 right-0 z-10 transition-all duration-700 ease-in-out h-[6vh] rounded-lg text-black font-bold text-2xl">
            <button id="button2" formaction="?/submit" class="hidden hover:text-black hover:bg-spotify border-black justify-center transition-all duration-500 ease-in-out items-center bg-second border-4  cursor-pointer fixed bottom-0 left-0 right-0 mx-[2vw] z-10 mb-[13vh] h-[6vh] rounded-lg text-spotify font-bold text-2xl">Submit</button>
    </form>
    <button id='button' class="flexix bg-spotify hover:bg-black duration-500 transition-all ease-in-out hover:text-white border-2 border-black focus:border-black focus:bg-spotify focus:text-black hover:border-spotify cursor-pointer fixed bottom-0 left-0 right-0 mx-[2vw] z-10 mb-[6vh] h-[6vh] rounded-lg text-black font-bold text-2xl">Add item</button>
</div>


