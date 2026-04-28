import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function PriceAnimation() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShow((prev) => !prev)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-2">
      <motion.span
        className="font-serif text-4xl md:text-5xl text-foreground"
        animate={{ scale: show ? 1.15 : 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {show ? "−40%" : "Опт"}
      </motion.span>
      <span className="text-sm text-muted-foreground">ниже рынка</span>
    </div>
  )
}

function DeliveryAnimation() {
  const [step, setStep] = useState(0)
  const steps = ["📦 Закупка", "✈️ Доставка", "🏪 У вас"]

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % steps.length)
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        key={step}
        className="text-2xl md:text-3xl font-serif text-foreground text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {steps[step]}
      </motion.div>
    </div>
  )
}

function RussiaIndicator() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => setProgress(100), 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <span className="text-3xl md:text-4xl font-sans font-medium text-foreground">🇷🇺</span>
      <span className="text-sm text-muted-foreground">Вся Россия</span>
      <div className="w-full max-w-[120px] h-1.5 bg-foreground/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.2 }}
        />
      </div>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Преимущества
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <PriceAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Выгодные цены</h3>
              <p className="text-muted-foreground text-sm mt-1">Закупаем напрямую у производителей — без лишних наценок.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <DeliveryAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Под ключ</h3>
              <p className="text-muted-foreground text-sm mt-1">Берём на себя закупку, таможню и доставку до вашего склада.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <RussiaIndicator />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">По всей России</h3>
              <p className="text-muted-foreground text-sm mt-1">Доставляем в любой город — от Москвы до Владивостока.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
