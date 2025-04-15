'use client'

import { timeline } from '../sub/timelineData'
import { motion } from 'framer-motion'

export default function Timeline() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-16">
    <motion.h2
    initial={{ opacity: 0, x: -120 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: 'easeOut' }}
    className="text-5xl md:text-6xl text-white font-extrabold mb-16 text-center">
    <span className="bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text">
    Experience
    </span>
    </motion.h2>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300 dark:border-gray-600" />

        <div className="space-y-12">
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className={`relative flex justify-between items-center w-full ${
                  isLeft ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div className="w-[48%]">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
                    <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                    <h5 className="text-gray-700 dark:text-gray-300 text-xl font-semibold mb-2">{item.designation}</h5>
                    <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 z-10" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
