import prisma from "@/lib/prisma";
import Link from "next/link";

const Post = async () => {
    const posts = await prisma.post.findMany();

    return (
        <div>
            <h1 className='text-2xl font-semibold text-center'>All Posts</h1>
            {posts.map((post: { id: number; title: string; content: string }) => (
                <div className='flex flex-col p-3 gap-5' key={post.id}>
                    <h2 className='text-xl font-bold text-gray-200'>
                        <Link href={`/posts/${post.id}`} className='flex items-center gap-1 text-gray-400 hover:text-gray-200'>
                            {post.title}
                        </Link>
                        </h2>
                </div>
            ))}
        </div>
    )
}

export default Post
