'use client'

import { motion } from 'framer-motion'
import { Code, Smartphone, Cloud, Database, Globe, Zap } from 'lucide-react'


const skills = [
  { name: 'React / Next.js', icon: Code, color: 'text-blue-400' },
  { name: 'React Native (Expo & CLI)', icon: Smartphone, color: 'text-purple-400' },
  { name: 'NestJS / Node.js', icon: Zap, color: 'text-green-400' },
  { name: 'Laravel (API & RBAC)', icon: Code, color: 'text-red-400' },
  { name: 'MongoDB', icon: Database, color: 'text-teal-400' },
  { name: 'PostgreSQL / Redis', icon: Database, color: 'text-indigo-400' },
  { name: 'Tailwind / Radix UI', icon: Globe, color: 'text-cyan-400' },
  { name: 'TypeScript / JavaScript', icon: Globe, color: 'text-yellow-400' },
  { name: 'Flutter (Legacy Projects)', icon: Smartphone, color: 'text-pink-400' },
  { name: 'Push Notifications (FCM / OneSignal)', icon: Zap, color: 'text-orange-400' },
  { name: 'Cloud & DevOps (AWS / CloudNavi)', icon: Cloud, color: 'text-orange-500' },
  { name: 'AI & Web Scraping (Experimental)', icon: Zap, color: 'text-gray-400' },
]


const timeline = [
  {
    year: '2020',
    title: 'Frontend Development',
    description: 'Started professional journey building responsive web applications using React and Next.js.',
    icon: Code,
  },
  {
    year: '2021',
    title: 'Mobile Development & Freelancing',
    description: 'Expanded into React Native and Flutter, delivering freelance projects integrating APIs and payment gateways.',
    icon: Smartphone,
  },
  {
    year: '2023',
    title: 'Backend Specialization',
    description: 'Focused on NestJS, Prisma, and PostgreSQL, building secure APIs and multi-role systems. Introduced Laravel for enterprise RBAC and notifications.',
    icon: Cloud,
  },
  {
    year: '2024',
    title: 'Fullstack Development',
    description: 'Delivered end-to-end solutions (Foodly Eats, Cashworx) combining mobile, backend, and admin dashboards with real-time features.',
    icon: Zap,
  },
  {
    year: '2025',
    title: 'Fintech, Healthcare & AI Systems',
    description: 'Built scalable fintech platforms, healthcare management systems (GuardianCare Pro), and experimented with AI-powered e-commerce (Snap2Shop AI).',
    icon: Zap,
  },
]


export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground">My journey in technology and development</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-purple-400">Developer Journey</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I love creating innovative solutions that bridge the gap between design and functionality, 
              always focusing on user experience and performance.
            </p>

            <div className="space-y-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{item.title}</h4>
                      <span className="text-sm text-purple-400">({item.year})</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-purple-400">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect p-4 rounded-xl text-center hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <skill.icon className={`w-8 h-8 mx-auto mb-2 ${skill.color}`} />
                  <p className="font-semibold text-sm">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}