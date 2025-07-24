import type { Project } from '@/types/project'

export const privateProjects: Project[] = [
  {
    id: 'pp-001',
    title: 'GuardianCare Pro',
    description:
      'A support care platform for healthcare workers with shift scheduling, incident reporting, and a secure role-based user management system.',
    image: '/images/gcp-1.png',
    stack: ['React Native', 'NestJS', 'PostgreSQL', 'Prisma', 'TypeScript'],
    category: 'fullstack',
    github: null,
    demo: 'https://linktoapp.com',
    tags: ['Healthcare', 'Role-Based Access', 'Incident Management', 'Admin Panel','Shift Scheduling', 'Chat'],
    featured: true,
  },
  {
    id: 'pp-002',
    title: 'Cashworx',
    description:
      'A multi-role fintech and tax processing platform with role-based admin/operator dashboards, IRS/state models, and push notification system.',
    image: '/images/cashworx.png',
    stack: ['Laravel', 'MariaDB', 'OneSignal', 'Next.js', 'Tailwind', 'Flutter','BloC'],
    category: 'fullstack',
    github: null,
    demo: null,
    tags: ['Fintech', 'Tax Processing', 'Role-Based Access', 'Notifications'],
    featured: true,
  },
  {
    id: 'pp-003',
    title: 'Jollivry',
    description:
      'A mobile-first food ordering and delivery platform for eateries, built to scale with long-term vision, featuring custom onboarding and vendor auth flows.',
    image: '/images/foodly.png',
    stack: ['React Native', 'NestJS', 'MongoDB', 'Google Maps API', 'TypeScript'],
    category: 'mobile',
    github: null,
    demo: null,
    tags: ['Food Ordering', 'Delivery', 'Vendor Onboarding', 'Location-Based Services'],
    featured: true,
  },
  {
    id: 'pp-004',
    title: 'Snap2Shop AI',
    description:
      'An experimental AI-driven shopping assistant that scrapes Nigerian e-commerce sites and recommends products via image-based search.',
    image: '/images/snap2shop.png',
    stack: ['Next.js', 'Python', 'TensorFlow', 'TypeScript', 'PostgreSQL'],
    category: 'ai',
    github: null,
    demo: null,
    tags: ['AI', 'E-commerce', 'Product Recommendation', 'Web Scraping'],
    featured: false,
  },
  
]
