"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"

export default function LikeButton() {
    const [isLiked, setIsLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(0)

    const handleLike = () => {
        if (isLiked) {
            setLikeCount(prev => prev - 1)
        } else {
            setLikeCount(prev => prev + 1)
        }
        setIsLiked(!isLiked)
    }

    return (
        <div className="flex items-center gap-2">
            <Button 
                variant="ghost" 
                size="icon"
                onClick={handleLike}
                className="hover:bg-transparent"
            >
                <Heart 
                    className={cn(
                        "h-10 w-10 transition-all", 
                        isLiked 
                            ? "fill-red-500 text-red-500 scale-110" 
                            : "text-gray-500 hover:text-red-400"
                    )} 
                />
                <span className="sr-only">Like</span>
            </Button>
            {likeCount > 0 && (
                <span className="text-sm text-gray-500">{likeCount}</span>
            )}
        </div>
    )
}
