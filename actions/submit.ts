'use server'

import prisma from "@/lib/prisma";


export async function handleSubmit(formData: FormData) {
    const title = formData.get('title') as string
    const content = formData.get('content') as string
    console.log({ title, content })
    
    await prisma.post.create({
        data: {
            title,
            content
        }
    })
}
