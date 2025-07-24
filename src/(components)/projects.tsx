'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { privateProjects } from '@/constants/projects'
import type { Project } from '@/types/project'
import ProjectFilter from './project-filter'
import ProjectCard from './project-card'
import { useGithubRepos } from '@/hooks/use-github-repos'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([])
  const [showAll, setShowAll] = useState(false)
  const { repos: githubRepos, isLoading, isError, errorMessage, meta } = useGithubRepos(20)

  // Safely combine GitHub repos with private projects
  const allProjects = [...(githubRepos || []), ...(privateProjects || [])]

  useEffect(() => {
    let filtered = allProjects
    if (filter !== 'all') {
      filtered = allProjects.filter(project => project.category === filter)
    }
    
    setDisplayedProjects(showAll ? filtered : filtered.slice(0, 6))
  }, [filter, showAll, githubRepos]) // Remove allProjects from dependency array to avoid infinite loop

  // Debug logging
  useEffect(() => {
    console.log('📊 Projects Component State:')
    console.log('  - GitHub repos:', githubRepos?.length || 0)
    console.log('  - Private projects:', privateProjects?.length || 0)
    console.log('  - All projects:', allProjects.length)
    console.log('  - Displayed projects:', displayedProjects.length)
    console.log('  - Is loading:', isLoading)
    console.log('  - Is error:', isError)
    console.log('  - Error message:', errorMessage)
  }, [githubRepos, displayedProjects, isLoading, isError, errorMessage])

  return (
    <section id="projects" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">A showcase of my recent work and contributions</p>
        </motion.div>

        <ProjectFilter currentFilter={filter} onFilterChange={setFilter} />

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading GitHub repositories...</p>
          </div>
        )}

        {/* Error State */}
        {isError && (
          <div className="text-center py-8 mb-8">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-red-400 text-sm">
                ⚠️ Could not load GitHub repositories
                {errorMessage && (
                  <span className="block mt-1 text-xs opacity-75">
                    {errorMessage}
                  </span>
                )}
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Showing {privateProjects?.length || 0} private projects
              </p>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        {displayedProjects.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {displayedProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${index}`} // More unique key
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        ) : !isLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-400">No projects found for the current filter.</p>
          </div>
        ) : null}

        {/* Load More Button */}
        {allProjects.length > 6 && (
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="glass-effect px-8 py-4 rounded-xl font-semibold hover:bg-purple-500/20 transition-all"
            >
              {showAll ? 'Show Less' : `Load More Projects (${allProjects.length - 6} more)`}
            </motion.button>
          </div>
        )}

        {/* Debug Info (remove in production) */}
        {process.env.NODE_ENV === 'development' && meta && (
          <div className="mt-8 text-center">
            <details className="text-xs text-gray-500">
              <summary className="cursor-pointer">Debug Info</summary>
              <div className="mt-2 text-left max-w-lg mx-auto bg-gray-900/50 p-3 rounded">
                <p>GitHub Repos: {githubRepos?.length || 0}</p>
                <p>Private Projects: {privateProjects?.length || 0}</p>
                <p>Rate Limit: {meta.rateLimit.remaining}/{meta.rateLimit.limit}</p>
                <p>Filter: {filter}</p>
                <p>Show All: {showAll.toString()}</p>
              </div>
            </details>
          </div>
        )}
      </div>
    </section>
  )
}