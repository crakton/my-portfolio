'use client'

import { motion } from 'framer-motion'

interface ProjectFilterProps {
  currentFilter: string
  onFilterChange: (filter: string) => void
}

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'web', label: 'Web App' },
  { id: 'api', label: 'API' },
]

export default function ProjectFilter({ currentFilter, onFilterChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {filters.map((filter) => (
        <motion.button
          key={filter.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onFilterChange(filter.id)}
          className={`px-6 py-2 rounded-full glass-effect transition-all ${
            currentFilter === filter.id
              ? 'bg-purple-500/20 text-purple-400'
              : 'hover:bg-purple-500/10'
          }`}
        >
          {filter.label}
        </motion.button>
      ))}
    </div>
  )
}
