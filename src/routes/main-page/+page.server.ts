import { onMount } from "svelte";
import { dataStore } from "../../store";
import { get } from "svelte/store";
import { PrismaClient } from '@prisma/client'
import type { PageServerLoad } from "./$types";
import { text } from "@sveltejs/kit";

const prisma = new PrismaClient()

let name = get(dataStore)
const findTasks = await prisma.user.findMany({
    where: {
        name: name
    }
})
let id = findTasks[0].id
const task = await prisma.task.findMany({
    where: {
        userId: id
    },
    select: {
        text: true
    }
})
let tasks: string[] = []
task.forEach((item)=>{tasks.push(item.text)})

const postSubscription = await prisma.task.strea

export let load: PageServerLoad = async () => {
    while (true) {
        return {
            tasks: tasks
        }
    }
}
