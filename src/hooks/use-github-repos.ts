// hooks/useGithubRepo.ts
import { useState, useEffect } from 'react'
import type { Project } from '@/types/project'

interface UseGithubReposReturn {
  repos: Project[]
  isLoading: boolean
  isError: boolean
  errorMessage: string | null
  meta: {
    count: number
    rateLimit: {
      limit: string
      remaining: string
      reset: string
    }
  } | null
}

// Simple transformer function (inline to avoid import issues)
const transformGithubRepoToProject = (repo: any): Project => {
  // Get tech stack based on language and common patterns
  const getTechStack = (language: string | null, repoName: string): string[] => {
    const stack: string[] = []
    
    if (language) {
      stack.push(language)
    }
    
    // Add common frameworks based on repo name patterns
    const name = repoName.toLowerCase()
    if (name.includes('next') || name.includes('nextjs')) stack.push('Next.js')
    if (name.includes('react')) stack.push('React')
    if (name.includes('vue')) stack.push('Vue.js')
    if (name.includes('express')) stack.push('Express')
    if (name.includes('node')) stack.push('Node.js')
    if (name.includes('admin') || name.includes('dashboard')) stack.push('Dashboard')
    if (name.includes('api')) stack.push('API')
    if (name.includes('ecommerce')) stack.push('E-commerce')
    
    return Array.from(new Set(stack)) // Remove duplicates
  }
  
  // Get category based on repo data
  const getCategory = (language: string | null, description: string | null, repoName: string): string => {
    const desc = description?.toLowerCase() || ''
    const name = repoName.toLowerCase()
    
    if (desc.includes('admin') || name.includes('admin') || desc.includes('dashboard')) return 'dashboard'
    if (desc.includes('api') || name.includes('api') || desc.includes('backend')) return 'backend'
    if (desc.includes('ecommerce') || name.includes('ecommerce')) return 'ecommerce'
    if (desc.includes('mobile') || name.includes('mobile')) return 'mobile'
    if (language === 'TypeScript' || language === 'JavaScript') return 'web'
    
    return 'other'
  }
  
  const stack = getTechStack(repo.language, repo.name)
  const category = getCategory(repo.language, repo.description, repo.name)
  
  return {
    id: repo.id,
    title: repo.name.replace(/[-_]/g, ' ').replace(/\w\S*/g, (txt: string) => 
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    ),
    description: repo.description || 'No description available',
    image: `https://opengraph.githubassets.com/1/${repo.full_name}`,
    stack,
    category,
    tags: repo.topics || [],
    github: repo.html_url,
    demo: repo.homepage || undefined,
    featured: repo.stargazers_count > 0 || !repo.archived,
    stats: {
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      lastUpdated: repo.updated_at
    }
  }
}

const transformGithubRepos = (repos: any[]): Project[] => {
  return repos
    .filter(repo => !repo.archived) // Filter out archived repos
    .map(transformGithubRepoToProject)
    .sort((a, b) => {
      // Sort by stars first, then by last updated
      if (a.stats?.stars !== b.stats?.stars) {
        return (b.stats?.stars || 0) - (a.stats?.stars || 0)
      }
      return new Date(b.stats?.lastUpdated || 0).getTime() - new Date(a.stats?.lastUpdated || 0).getTime()
    })
}

export const useGithubRepos = (limit: number = 20): UseGithubReposReturn => {
  const [repos, setRepos] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [meta, setMeta] = useState<UseGithubReposReturn['meta']>(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setIsLoading(true)
        setIsError(false)
        setErrorMessage(null)

        console.log('🚀 Fetching GitHub repositories...')
        
        const response = await fetch(`/api/github/repos?sort=updated&per_page=${limit}`)
        
        if (!response.ok) {
          const errorText = await response.text()
          console.error('❌ Response not OK:', response.status, errorText)
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const result = await response.json()
        console.log('📥 API Response:', result)
        
        if (!result.success) {
          throw new Error(result.message || 'Failed to fetch repositories')
        }

        if (!result.data || !Array.isArray(result.data)) {
          throw new Error('Invalid data format received from API')
        }

        console.log('✅ Raw GitHub repos fetched:', result.data.length)
        
        // Transform GitHub repos to Project format
        const transformedRepos = transformGithubRepos(result.data)
        
        console.log('✅ Transformed repos:', transformedRepos.length)
        if (transformedRepos.length > 0) {
          console.log('📊 Sample transformed repo:', transformedRepos[0])
        }
        
        setRepos(transformedRepos)
        setMeta(result.meta)
        
      } catch (error) {
        console.error('❌ Error fetching GitHub repos:', error)
        setIsError(true)
        setErrorMessage(error instanceof Error ? error.message : 'Unknown error occurred')
        setRepos([]) // Set empty array on error
      } finally {
        setIsLoading(false)
      }
    }

    fetchRepos()
  }, [limit])

  return {
    repos,
    isLoading,
    isError,
    errorMessage,
    meta
  }
}