import type { Project } from '@/types/project'

interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  created_at: string
  topics: string[]
  archived: boolean
}

// Technology mapping based on repository language and topics
const getTechStack = (language: string | null, topics: string[], repoName: string): string[] => {
  const stack: string[] = []
  
  // Add primary language
  if (language) {
    stack.push(language)
  }
  
  // Add common frameworks/libraries based on language
  if (language === 'TypeScript' || language === 'JavaScript') {
    // Check repo name or topics for framework hints
    if (repoName.includes('next') || topics.includes('nextjs')) {
      stack.push('Next.js')
    }
    if (repoName.includes('react') || topics.includes('react')) {
      stack.push('React')
    }
    if (repoName.includes('vue') || topics.includes('vue')) {
      stack.push('Vue.js')
    }
    if (repoName.includes('express') || topics.includes('express')) {
      stack.push('Express')
    }
    if (repoName.includes('node') || topics.includes('nodejs')) {
      stack.push('Node.js')
    }
    if (topics.includes('tailwindcss') || repoName.includes('tailwind')) {
      stack.push('Tailwind CSS')
    }
  }
  
  // Add other technologies based on topics
  topics.forEach(topic => {
    const topicMap: Record<string, string> = {
      'mongodb': 'MongoDB',
      'postgresql': 'PostgreSQL',
      'mysql': 'MySQL',
      'redis': 'Redis',
      'docker': 'Docker',
      'kubernetes': 'Kubernetes',
      'aws': 'AWS',
      'firebase': 'Firebase',
      'vercel': 'Vercel',
      'graphql': 'GraphQL',
      'rest-api': 'REST API',
      'typescript': 'TypeScript',
      'javascript': 'JavaScript',
      'python': 'Python',
      'java': 'Java',
      'css': 'CSS',
      'html': 'HTML',
      'sass': 'Sass',
      'bootstrap': 'Bootstrap'
    }
    
    if (topicMap[topic.toLowerCase()]) {
      stack.push(topicMap[topic.toLowerCase()])
    }
  })
  
  // Remove duplicates and limit to reasonable number
  return Array.from(new Set(stack)).slice(0, 6)
}

// Determine category based on repository data
const getCategory = (language: string | null, topics: string[], description: string | null, repoName: string): string => {
  const lowerDesc = description?.toLowerCase() || ''
  const lowerName = repoName.toLowerCase()
  
  // Check for specific project types
  if (lowerDesc.includes('admin') || lowerName.includes('admin') || lowerDesc.includes('dashboard')) {
    return 'dashboard'
  }
  
  if (lowerDesc.includes('api') || lowerName.includes('api') || lowerDesc.includes('backend')) {
    return 'backend'
  }
  
  if (lowerDesc.includes('ecommerce') || lowerName.includes('ecommerce') || lowerDesc.includes('shop')) {
    return 'ecommerce'
  }
  
  if (lowerDesc.includes('mobile') || lowerName.includes('mobile') || topics.includes('mobile')) {
    return 'mobile'
  }
  
  if (language === 'TypeScript' || language === 'JavaScript') {
    return 'web'
  }
  
  return 'other'
}

export const transformGithubRepoToProject = (repo: GitHubRepo): Project => {
  const stack = getTechStack(repo.language, repo.topics, repo.name)
  const category = getCategory(repo.language, repo.topics, repo.description, repo.name)
  
  return {
    id: repo.id.toString(),
    title: repo.name.replace(/[-_]/g, ' ').replace(/\w\S*/g, (txt) => 
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    ),
    description: repo.description || 'No description available',
    image: `https://opengraph.githubassets.com/1/${repo.full_name}`, // GitHub's auto-generated image
    stack,
    tags: repo.topics || [],
    category,
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

export const transformGithubRepos = (repos: GitHubRepo[]): Project[] => {
  return repos
    .filter(repo => !repo.archived) // Filter out archived repos by default
    .map(transformGithubRepoToProject)
    .sort((a, b) => {
      // Sort by stars first, then by last updated
      if (a.stats?.stars !== b.stats?.stars) {
        return (b.stats?.stars || 0) - (a.stats?.stars || 0)
      }
      return new Date(b.stats?.lastUpdated || 0).getTime() - new Date(a.stats?.lastUpdated || 0).getTime()
    })
}