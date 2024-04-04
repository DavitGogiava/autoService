"use client"
import Image from "next/image"
import { useRouter } from 'next/navigation'

export default function Logo() {
    const router = useRouter()


    return(
        <div className="logo">
        <Image
          src="/images/Logo.png" // Route of the image file
          fill
          alt="Your Name"
          onClick={() => router.push('/')}
        />
      </div>
    )
}
