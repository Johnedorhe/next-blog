'use server'

export async function handleSubmit(formData: FormData) {
    const title = formData.get('title') as string
    const postContent = formData.get('postContent') as string
    console.log({ title, postContent })
}