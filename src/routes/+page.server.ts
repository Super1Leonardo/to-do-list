import { PrismaClient } from '@prisma/client'
import type { Actions } from './$types';

const prisma = new PrismaClient()
export const actions = {	
    login: async ({request}) => {
        const {nickname, password} = Object.fromEntries(await request.formData()) as {
            nickname: string;
            password: string;
        }
        await prisma.user.create({
            data: {
                name: nickname,
                password: password
            }
        })
    },
} satisfies Actions;
