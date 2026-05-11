import React, { Suspense } from 'react'
import FetchPost from '@/components/fetch-post'

const Post = async ({ params }: { params: Promise<{ id: string }> }) => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <FetchPost params={params} />
            </Suspense>
        </div>
    )
}

export default Post