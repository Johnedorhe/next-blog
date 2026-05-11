import React from 'react'

const Post = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-store",
    })
    
    if (!res.ok) {
        throw new Error('Failed to fetch posts')
    }

    const data: { id: number; title: string; body: string }[] = await res.json()

    return (
        <div>
            <h1 className='text-2xl font-semibold text-center'>All Posts</h1>
            {data.map((post) => (
                <div className='flex flex-col p-3 gap-5' key={post.id}>
                    <h2 className='text-xl font-bold text-gray-200'>{post.title}</h2>
                    <p className=' text-gray-50'>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Post
