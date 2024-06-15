import { onMount } from "svelte";
import { dataStore, numberOfDiv } from "../../store";
import { get } from "svelte/store";
import { PrismaClient } from '@prisma/client'
import type { Actions, PageServerLoad } from "./$types";
import { redirect, text } from "@sveltejs/kit";
import { IdOfDiv } from "./+page.svelte";

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



export const actions = {
	submit: async ({request}) => {
        const {text} = Object.fromEntries(await request.formData()) as {
            text: string
        }
        // console.log(text)
        const createTask = await prisma.task.create({
            data: {
                text: text,
                userId: id
            }
        })
        const PushTask = await prisma.task.findMany({
            where: {
                userId: id
            },
            select: {
                text: true
            }
        })
        tasks = []
        PushTask.forEach((item)=>{tasks.push(item.text)})
    },
    delete: async ({request}) => {
        const formData = await request.formData()
        const inputId = formData.get('1')
        console.log(inputId)        
        
        // const deleteTask = await prisma.task.delete({
        //     where: {
        //         number: 1
        //     }
        // })
        // const PushTask = await prisma.task.findMany({
        //     where: {
        //         userId: id
        //     },
        //     select: {
        //         text: true
        //     }
        // })
        // tasks = []
        // PushTask.forEach((item)=>{tasks.push(item.text)})
    }
} satisfies Actions;

export let load: PageServerLoad = async () => {
    while (true) {
        return {
            tasks: tasks
        }
    }
}