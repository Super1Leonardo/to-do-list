<style lang="postcss">
    
    /* h1 { font-size: 2em; }
    h2 { font-size: 1.5em; }
    h3 { font-size: 1.17em; }
    h4 { font-size: 1.12em; }
    h5 { font-size: .83em; }
    h6 { font-size: .75em; }     */
    p {
        @apply text-white
    }
</style>

<script lang="ts">
    import { PrismaClient } from '@prisma/client';
    import { onMount } from 'svelte';


const prisma = new PrismaClient()

async function findTask() {
    
}

let array: {
    id: number;
    text: string;
}[] = []



onMount(() => {
    async function Modal(opacity: string) {
        modal.style.opacity = opacity
    }
    let modal = document.querySelector('#modal') as HTMLDivElement
    let button = document.querySelector('#button') as HTMLDivElement
    let button2 = document.querySelector('#button2') as HTMLDivElement
    button.addEventListener('click', () => {
        const modalDisplayStyle = getComputedStyle(modal).opacity;
        if (modalDisplayStyle === '0') {
            Modal('1')
            button2.style.opacity = '1'
            button.innerHTML = "Cancel"
        } else {
            Modal('0')
            button2.style.opacity = '0'
            button.innerHTML = "Add item"
        }
    })
    button2.addEventListener('click', () => {
        const modalDisplayStyle = getComputedStyle(modal).opacity;
        Modal('0')
            button2.style.opacity = '0'
            button.innerHTML = "Add item"
    })

    // submiting
    let title = (document.querySelector('#title')).innerHTML
    let text = (document.querySelector('#text')).innerHTML

    async function Submit(title: string, text: string) {
        const newTask = await prisma.task.create    
    }
});



</script>

<link rel="stylesheet" href="src\routes\main.css">

<div class="flex justify-between h-dvh py-[2vh] flex-col">
    <div>
        <h1 class="font-bold text-5xl flexix text-spotify mt-[2vh] ">To do list</h1>
    <ul>
        {#each array as {id, text}}
            <li>
                <div class="bg-second mx-[2vw] flex px-4 items-center my-[3vh] h-[6vh] rounded-lg ">
                    <h1 class="text-2xl text-white">{id}: {text}</h1>
                </div>
            </li>
        {/each}
    </ul>
    </div>
    <div id='modal' class="fixed flex opacity-0 transition-all duration-500 ease-in-out left-0 justify-start py-[2vh] px-[5vw] flex-col top-[calc(50%-16vh)] right-0 z-20 bg-second mx-[2vw] rounded-lg h-[36vh] ">
        <h1 class="text-white text-3xl font-bold flex justify-center">Enter a title</h1>
        <input id="title" class="text-white text-xl bg-black mt-[2vh] border-4 border-spotify focus-visible:outline-none rounded-xl px-[1vh]">
        <h1 class="text-white text-3xl flex justify-center mt-[2vh] font-bold">Enter a text</h1>
        <textarea id='text' class="bg-black text-white text-start text-xl focus-visible:outline-none border-4 border-spotify p-3 rounded-xl h-full mt-[2vh]"></textarea>
    </div>
    <div class="bg-black fixed bottom-0 left-0 right-0 z-10 transition-all duration-700 ease-in-out h-[6vh] rounded-lg text-black font-bold text-2xl">
        <button id="button2" class="flex justify-center opacity-0 transition-all duration-500 ease-in-out items-center bg-black border-4 border-spotify cursor-pointer fixed bottom-0 left-0 right-0 mx-[2vw] z-10 mb-[13vh] h-[6vh] rounded-lg text-spotify font-bold text-2xl">Submit</button>
        <button id='button' class="flexix bg-spotify cursor-pointer fixed bottom-0 left-0 right-0 mx-[2vw] z-10 mb-[6vh] h-[6vh] rounded-lg text-black font-bold text-2xl">Add item</button>
    </div>
</div>

