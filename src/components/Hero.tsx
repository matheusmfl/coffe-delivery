'use client'
import { ShoppingCart } from '@phosphor-icons/react'
import heroImg from '../../public/heroImg.png'
import Image from 'next/image'

import bgImage from '../../public/bg-image.png'

type iconHeroProps = {
  content: string
}

function IconHero({ content }: iconHeroProps) {
  return (
    <div className="flex items-center justify-center gap-4 w-[231px]">
      <button className="p-2 bg-purple-100 flex rounded-full text-purple-600 items-center justify-center gap-2">
        <ShoppingCart size={22} fill="orange" />
      </button>
      <span className="text-gray-700 font-normal text-left">{content}</span>
    </div>
  )
}

export function Hero() {
  return (
    <main className="px-40 py-24 flex gap-8 relative">
      <div className="absolute left-[-100px]">
        <Image src={bgImage} alt="bg-image" />
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex text-left items-center flex-col gap-4">
          <h1 className="font-extrabold font-sans text-5xl text-black">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <span className="font-normal font-sans text-xl text-slate-500">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex gap-2">
            <IconHero content="Compra simples e segura" />
            <IconHero content="Embalagem mantém o café intacto" />
          </div>
          <div className="flex gap-2">
            <IconHero content="Entrega rápida e rastreada" />
            <IconHero content="O café chega fresquinho até você" />
          </div>
        </div>
      </div>

      <div>
        <Image src={heroImg} alt="hero img" />
      </div>
    </main>
  )
}
