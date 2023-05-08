import Image from 'next/image'
import coffeImage from '../../public/coffeImage.png'

type cardProps = {
  tags: string[]
  title: string
  description: string
}

export function Card({ tags, title, description }: cardProps) {
  return (
    <div className="bg-[#F3F2F2] h-80 w-64 rounded-tr-3xl rounded-tl-sm rounded-bl-2xl rounded-br-sm relative px-5">
      <div className="w-full flex items-center justify-center relative">
        <Image
          src={coffeImage}
          alt="Imagem de café"
          width={120}
          height={120}
          className="absolute top-[-20px]"
        />
      </div>
      <div className="pt-[120px] flex flex-col items-center justify-center gap-3">
        <div className="flex w-full items-center justify-center gap-2">
          {tags.map((tag, i) => {
            return (
              <span
                key={i}
                className="bg-[#F1E9C9] rounded-full font-bold text-[#C47F17] text-sm p-1"
              >
                {tag}
              </span>
            )
          })}
        </div>

        <h2>{title}</h2>

        <span className="text-center">{description}</span>
      </div>

      <div>
        <span className="text-bold text-lg">R$ 9,90</span>
        <div></div>
      </div>
    </div>
  )
}
