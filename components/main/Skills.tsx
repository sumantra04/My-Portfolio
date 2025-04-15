"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromRight, slideInFromTop } from '@/utils/motion'
import { Backend_skill, Skill_data } from "@/constants"
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
    const { ref, inView } = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    const animationDelay = 0.3
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay }}
        >
            <Image
                src={src}
                width={width}
                height={height}
                alt='skill image'
            />
        </motion.div>
    )
}

const SkillText = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <motion.div variants={slideInFromTop}></motion.div>
            <motion.h2
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="text-5xl md:text-6xl text-white font-extrabold mb-16 text-center"
            >
                <span className="bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text">
                    Skills and Tech Stack
                </span>
            </motion.h2>
            <motion.div variants={slideInFromRight(0.5)}></motion.div>
        </div>
    )
}

const Skills = () => {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20 pt-24"
            style={{ transform: "scale(0.9)" }}
        >
            <SkillText />

            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Skill_data.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>

            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Backend_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
        </section>
    )
}

export default Skills
