'use server'

export async function handleSubmit(formData: FormData) {
    const title = formData.get('title') as string
    const content = formData.get('content') as string
    console.log({ title, content })
}