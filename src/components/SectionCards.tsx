import { Card } from './Card'
import { coffeeList } from '@/utils/fakeApi'

export function SectionCards() {
  return (
    <section className="px-20 py-10 flex flex-col gap-10">
      <span>Nossos Cafés</span>

      <div className="grid grid-cols-4 gap-x-8 gap-y-12">
        {coffeeList.map((card) => {
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
