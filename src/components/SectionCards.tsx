import { Card } from './Card'
import { fakeApi } from '@/utils/fakeApi'

export function SectionCards() {
  return (
    <section className="px-40 flex flex-col gap-10">
      <span>Nossos Cafés</span>

      <div className="grid grid-cols-4 gap-8 gap-y-12">
        {fakeApi.map((card) => {
          return (
            <Card
              key={card.id}
              tags={card.tags}
              title={card.title}
              description={card.subtitle}
            />
          )
        })}
      </div>
    </section>
  )
}
