import { PrismaClient } from '@prisma/client'
import type { Actions } from './$types';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { writable } from 'svelte/store';
import { dataStore } from '../store';

const prisma = new PrismaClient()
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
            dataStore.set(nickname)
            redirect(301, '/main-page')
        } else if (!(names.includes(nickname)) && passwords.includes(password)) {
            return {
                value: 1
            }
        } else if (!(passwords.includes(password)) && names.includes(nickname)) {
            return {
                value: 2
            }
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
        const findUsers = await prisma.user.findMany()
        let names: string[] = []
        let passwords: string[] = []
        findUsers.forEach((item)=>{names.push(item.name), passwords.push(item.password)})
        if (!(names.includes(nickname))) {
            await prisma.user.create({
                data: {
                    name: nickname,
                    password: password
                }
            })
            dataStore.set(nickname)
            redirect(301, '/main-page')
        } else if (names.includes(nickname)) {
            return {
                value: 10
            }
        }
    }
} satisfies Actions;
