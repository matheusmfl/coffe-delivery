import heroImg from '../../public/heroImg.png'
import Image from 'next/image'
import packageIcon from '../assets/iconPackage.svg'
import timeIcon from '../assets/iconTime.svg'
import coffeIcon from '../assets/iconCoffe.svg'
import cartIcon from '../assets/iconCart.svg'

import bgImage from '../../public/bg-image.png'

type iconHeroProps = {
  content: string
  type: 'package' | 'coffe' | 'time' | 'cart'
}

function IconHero({ content, type }: iconHeroProps) {
  switch (type) {
    case 'package':
      return (
        <div className="flex items-center justify-center gap-4 w-[231px] font-sans text-base">
          <button className="">
            <Image src={packageIcon} alt="Icon" width={32} height={32} />
          </button>
          <span className="text-gray-700 font-normal text-left">{content}</span>
        </div>
      )

    case 'coffe':
      return (
        <div className="flex items-center justify-center gap-4 w-[231px] font-sans text-base">
          <button className="">
            <Image src={coffeIcon} alt="Icon" width={32} height={32} />
          </button>
          <span className="text-gray-700 font-normal text-left">{content}</span>
        </div>
      )

    case 'time':
      return (
        <div className="flex items-center justify-center gap-4 w-[231px] font-sans text-base">
          <button className="">
            <Image src={timeIcon} alt="Icon" width={32} height={32} />
          </button>
          <span className="text-gray-700 font-normal text-left">{content}</span>
        </div>
      )

    case 'cart':
      return (
        <div className="flex items-center justify-center gap-4 w-[231px] font-sans text-base">
          <button className="">
            <Image src={cartIcon} alt="Icon" width={32} height={32} />
          </button>
          <span className="text-gray-700 font-normal text-left">{content}</span>
        </div>
      )
  }
}

export function Hero() {
  return (
    <main className="px-36 py-24 flex gap-8 relative">
      <div className="absolute left-[-100px] -z-10">
        <Image src={bgImage} alt="bg-image" />
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex text-left items-center flex-col gap-4">
          <h1 className="text-5xl font-alt font-extrabold text-[#272221]">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <span className="font-normal font-sans text-xl text-slate-500">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex gap-2">
            <IconHero type="cart" content="Compra simples e segura" />
            <IconHero type="coffe" content="Embalagem mantém o café intacto" />
          </div>
          <div className="flex gap-2">
            <IconHero type="time" content="Entrega rápida e rastreada" />
            <IconHero
              type="package"
              content="O café chega fresquinho até você"
            />
          </div>
        </div>
      </div>

      <div>
        <Image src={heroImg} alt="hero img" />
      </div>
    </main>
  )
}
