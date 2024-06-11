import { PrismaClient } from '@prisma/client'
import type { Actions } from './$types';
import type { PageServerLoad } from './$types';
import { goto } from '$app/navigation';

const prisma = new PrismaClient()
export const actions = {
    default: async ({ request }) => {
        console.log(request.body)
    }
} satisfies Actions;
