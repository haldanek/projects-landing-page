import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const projects = [
  {
    slug: 'api-documentation-overhaul',
    title: 'API Documentation Overhaul',
    description: 'Completely revamped the API documentation for a major SaaS platform, improving developer onboarding time by 40%.',
    content: 'This project involved a complete overhaul of the existing API documentation...',
  },
  {
    slug: 'iot-device-user-guide',
    title: 'User Guide for IoT Device',
    description: 'Created a comprehensive user guide for a new IoT device, reducing support tickets by 30%.',
    content: 'The IoT device user guide was created to help users easily set up and use their new smart home device...',
  },
  {
    slug: 'technical-blog-series',
    title: 'Technical Blog Series',
    description: 'Authored a series of technical blog posts explaining complex machine learning concepts to a non-technical audience.',
    content: 'This blog series aimed to demystify machine learning concepts for a general audience...',
  },
]

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 text-comic-red">{project.title}</h1>
      <p className="text-xl mb-6 text-comic-black">{project.description}</p>
      <div className="comic-card p-6 mb-8">
        <p className="text-lg text-comic-black">{project.content}</p>
      </div>
      <Link href="/#projects">
        <Button className="comic-button">Back to Projects</Button>
      </Link>
    </div>
  )
}

