"use client"
import { useState, useEffect } from "react"

interface TypewriterTextProps {
  text: string
  className?: string
  speed?: number
  pauseDuration?: number
}

export default function TypewriterText({
  text,
  className = "",
  speed = 150,
  pauseDuration = 2000,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (!isDeleting && currentIndex < text.length) {
          // Typing forward
          setDisplayText(text.slice(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        } else if (!isDeleting && currentIndex === text.length) {
          // Pause at end before deleting
          setTimeout(() => setIsDeleting(true), pauseDuration)
        } else if (isDeleting && currentIndex > 0) {
          // Deleting backward
          setDisplayText(text.slice(0, currentIndex - 1))
          setCurrentIndex(currentIndex - 1)
        } else if (isDeleting && currentIndex === 0) {
          // Start typing again
          setIsDeleting(false)
        }
      },
      isDeleting ? speed / 2 : speed,
    )

    return () => clearTimeout(timer)
  }, [currentIndex, isDeleting, text, speed, pauseDuration])

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorTimer)
  }, [])

  return (
    <span className={className}>
      <span className={className}>{displayText}</span>
      <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100 ${className}`}>
        |
      </span>
    </span>
  )
}
