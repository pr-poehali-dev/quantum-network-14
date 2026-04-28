import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    title: "Электроника и гаджеты",
    category: "Категория",
    image: "https://cdn.poehali.dev/projects/d28053a7-6fd8-4974-9318-7b4038dc7202/files/de5cefeb-01a5-4cc8-b5c4-44d2b7d846da.jpg",
  },
  {
    title: "Косметика и уход",
    category: "Категория",
    image: "https://cdn.poehali.dev/projects/d28053a7-6fd8-4974-9318-7b4038dc7202/files/22f8c023-0287-46fb-a1c0-57b6d47028d5.jpg",
  },
  {
    title: "Одежда и аксессуары",
    category: "Категория",
    image: "https://cdn.poehali.dev/projects/d28053a7-6fd8-4974-9318-7b4038dc7202/files/238c8047-c0bc-4dd5-b489-f19d2d7818a3.jpg",
  },
  {
    title: "Товары для дома",
    category: "Категория",
    image: "https://cdn.poehali.dev/projects/d28053a7-6fd8-4974-9318-7b4038dc7202/files/e218a52a-743c-460f-8192-e43eaf2a3a9d.jpg",
  },
]

export function InsightsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section className="bg-background px-6 py-24" onMouseMove={handleMouseMove}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Категории товаров
        </motion.p>

        <div className="divide-y divide-border">
          {categories.map((item, i) => (
            <motion.a
              key={i}
              href="#"
              className="group flex items-center justify-between py-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ paddingLeft: 16, paddingRight: 16 }}
              data-clickable
            >
              <div className="flex-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{item.category}</span>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mt-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </motion.a>
          ))}
        </div>

        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              className="fixed pointer-events-none z-50 w-[200px] md:w-[300px] rounded-lg overflow-hidden shadow-2xl hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePosition.x + 20,
                y: mousePosition.y - 100,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={categories[hoveredIndex].image}
                alt={categories[hoveredIndex].title}
                className="w-full h-auto"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
