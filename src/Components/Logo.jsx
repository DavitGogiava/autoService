"use client"
import Image from "next/image"
import { useRouter } from 'next/navigation'

export default function Logo() {
    const router = useRouter()


    return(
        <div className="logo">
        <Image
          src="/images/Logo1.png" 
          fill
          sizes="100%"
          alt="Logo"
          onClick={() => router.push('/')}
        />
      </div>
    )
}
