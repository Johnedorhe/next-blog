import React from 'react'
import LikeButton from './like-button'
const FetchPost = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params

    const res = await fetch(`https://dummyjson.com/posts/${id}`, {
        cache: "no-store",
    })
    
    if (!res.ok) {
        throw new Error('Failed to fetch posts')
    }

    const post: { id: number; title: string; body: string } = await res.json()

    return (
        <div>
            <h1 className='text-2xl font-semibold text-center'>All Posts</h1>
                <div className='flex flex-col p-3 gap-5'>
                    <h2 className='text-xl font-bold text-gray-200'>{post.title}</h2>
                    <p className=' text-gray-50'>{post.body}</p>
                </div> 
                <LikeButton />
        </div>
    )
}

export default FetchPost