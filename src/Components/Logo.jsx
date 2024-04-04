"use client"
import Image from "next/image"
import { useRouter } from 'next/navigation'

export default function Logo() {
    const router = useRouter()


    return(
        <div className="logo">
        <Image
          src="/images/Logo.png" // Route of the image file
          height={70} // Desired size with correct aspect ratio
          width={300} // Desired size with correct aspect ratio
          alt="Your Name"
          onClick={() => router.push('/')}
        />
      </div>
    )
}
