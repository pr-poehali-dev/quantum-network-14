import { motion } from "framer-motion"

const portfolioItems = [
  "https://cdn.poehali.dev/projects/d28053a7-6fd8-4974-9318-7b4038dc7202/files/238c8047-c0bc-4dd5-b489-f19d2d7818a3.jpg",
  "https://cdn.poehali.dev/projects/d28053a7-6fd8-4974-9318-7b4038dc7202/files/de5cefeb-01a5-4cc8-b5c4-44d2b7d846da.jpg",
  "https://cdn.poehali.dev/projects/d28053a7-6fd8-4974-9318-7b4038dc7202/files/22f8c023-0287-46fb-a1c0-57b6d47028d5.jpg",
  "https://cdn.poehali.dev/projects/d28053a7-6fd8-4974-9318-7b4038dc7202/files/e218a52a-743c-460f-8192-e43eaf2a3a9d.jpg",
]

export function CarouselSection() {
  // Duplicate for seamless loop
  const items = [...portfolioItems, ...portfolioItems]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Зарубежные товары — у вас на складе.
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-xl overflow-hidden shadow-2xl"
              data-clickable
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`Пример портфолио ${(i % portfolioItems.length) + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}