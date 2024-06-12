import { PrismaClient } from '@prisma/client'
import type { Actions } from './$types';
import type { PageServerLoad } from './$types';
import { goto } from '$app/navigation';
import { redirect } from '@sveltejs/kit';
import { writable } from 'svelte/store';

const prisma = new PrismaClient()

export let load: PageServerLoad = async () => {
    return {
        product: 'hello'
    }
}

export const actions = {
	sign_in: async ({request}) => {
	    const {nickname, password} = Object.fromEntries(await request.formData()) as {
            nickname: string;
            password: string;
        }
        
        // console.log(password, nickname)
        const users = await prisma.user.findMany()
        let names: string[] = []
        let passwords: string[] = []
        users.forEach((item)=>{names.push(item.name), passwords.push(item.password)})
        if (names.includes(nickname) && passwords.includes(password)) {
            redirect(301, '/main-page')
        } else if (!(names.includes(nickname)) && passwords.includes(password)) {
            console.log(1)
        } else if (!(passwords.includes(password)) && names.includes(nickname)) {
            console.log(2)
        } else if (!(names.includes(nickname) && passwords.includes(password))) {
            return {
                value: 3
            }
        } 
        
        // redirect(301, '/main-page')
    },
    create: async ({request}) => {
        const {nickname, password} = Object.fromEntries(await request.formData()) as {
            nickname: string;
            password: string;
        }
        const users = await prisma.user.create({
            data: {
                password: password,
                name: nickname
            }
        })
    }
} satisfies Actions;
