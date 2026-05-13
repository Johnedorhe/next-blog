import prisma from "@/lib/prisma";

const Post = async () => {
    const posts = await prisma.post.findMany();

    return (
        <div>
            <h1 className='text-2xl font-semibold text-center'>All Posts</h1>
            {posts.map((post: { id: number; title: string; content: string }) => (
                <div className='flex flex-col p-3 gap-5' key={post.id}>
                    <h2 className='text-xl font-bold text-gray-200'>{post.title}</h2>
                    <p className='text-gray-50'>{post.content}</p>
                </div>
            ))}
        </div>
    )
}

export default Post
