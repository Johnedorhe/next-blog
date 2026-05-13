import React from 'react'
import LikeButton from './like-button'
import prisma from "@/lib/prisma";

const FetchPost = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params

    const post = await prisma.post.findUnique({
        where: { id: parseInt(id) }
    })
    
    if (!post) {
        throw new Error('Post not found')
    }

    return (
        <div>
            <h1 className='text-2xl font-semibold text-center'>Post Details</h1>
                <div className='flex flex-col p-3 gap-5'>
                    <h2 className='text-xl font-bold text-gray-200'>{post.title}</h2>
                    <p className=' text-gray-50'>{post.content}</p>
                </div> 
                <LikeButton />
        </div>
    )
}

export default FetchPost