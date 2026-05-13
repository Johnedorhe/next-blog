'use server'

import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/client/components/navigation";


export async function handleSubmit(formData: FormData) {
    const {isAuthenticated} = getKindeServerSession()

    if (!isAuthenticated) {
        redirect('/api/auth/login')
    }

    const title = formData.get('title') as string
    const content = formData.get('content') as string
    console.log({ title, content })
    
    await prisma.post.create({
        data: {
            title,
            content
        }
    })

    revalidatePath('/posts')
}
