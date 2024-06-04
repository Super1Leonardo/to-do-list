import { PrismaClient } from '@prisma/client'
import type { Actions } from './$types';

const prisma = new PrismaClient()
export const actions = {	
    sign_in: async ({request}) => {
        const {nickname, password} = Object.fromEntries(await request.formData()) as {
            nickname: string;
            password: string;
        }
        const users = await prisma.user.findMany({
            select: {
                name: true,
                password: true
            }
        })
        let names: string[];
        let passwords: string[];
        names = users.map(item => item.name)
        passwords = users.map(item => item.password)
        if (names.includes(nickname) && passwords.includes(password)) {
            // succesfully logged in
        } else if (!(names.includes(nickname)) && passwords.includes(password)) {
            alert('Nickname already in use')
        } else if (!(names.includes(nickname)) && !(passwords.includes(password))) {
            alert('Incorrect password or nickname')
        }
        // console.log('Hi')
    }
} satisfies Actions;
