export interface Project {
  id: string
  title: string
  description: string
  image: string
  stack: string[]
  category: 'fullstack' | 'mobile' | 'web' | 'api'| 'ai'|string
  github?: string | null
  demo?: string | null
  tags: string[]
  featured?: boolean
    stats?: {
    stars?: number
    forks?: number
    lastUpdated?: string
  }
}