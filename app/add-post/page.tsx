import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { handleSubmit } from '@/actions/submit'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

const Page = async () => {
  const { isAuthenticated } = getKindeServerSession()  
  const isUserAuthenticated = await isAuthenticated()
  
  if (!isUserAuthenticated) {
    redirect('/api/auth/login?post_login_redirect_url=/add-post')
  }

  return (
    <div className="max-w-md mx-auto py-10">
      <h1 className='text-2xl font-semibold text-center mb-6'>Add New Post</h1>
      <form action={handleSubmit} className="space-y-4">
        <Input name="title" placeholder="Enter title" required />
        <Textarea 
          name="content" 
          placeholder="Enter post content" 
          required 
          className="min-h-50"
        />
        <Button type="submit" className="w-full">Post</Button>
      </form>
    </div>
  )
}

export default Page