'use client'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logo from '../../public/logoCoffe.png'
import Image from 'next/image'

export function Header() {
  return (
    <header className="px-40 py-8 flex justify-between">
      <div className="h-10 overflow-hidden">
        <Image src={logo} height={40} width={82} alt="Logo" />
      </div>
      <div className="flex gap-4">
        <button className="p-2 bg-purple-100 flex rounded-md text-purple-600 items-center justify-center gap-2">
          <MapPin size={22} fill="#8047F8" />
          <span>Recife, PE</span>
        </button>
        <button className="p-2 bg-purple-100 flex rounded-md text-purple-600 items-center justify-center gap-2">
          <ShoppingCart size={22} fill="orange" />
        </button>
      </div>
    </header>
  )
}
