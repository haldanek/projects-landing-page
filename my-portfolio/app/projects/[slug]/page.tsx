import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const projects = [
  {
    slug: 'technical-writing',
    title: 'Technical Writing',
    description: 'TBA',
    content: 'TBA',
  },
  {
    slug: 'ux-ui-design',
    title: 'UX/UI Design',
    description: 'TBA',
    content: 'TBA',
  },
  {
    slug: 'web-dev',
    title: 'Full-Stack Web Development',
    description: 'TBA',
    content: 'TBA',
  },
  {
    slug: 'tba',
    title: 'TBA',
    description: 'TBA',
    content: 'TBA',
  },
  {
    slug: 'tba',
    title: 'TBA',
    description: 'TBA',
    content: 'TBA',
  },
  {
    slug: 'tba',
    title: 'TBA',
    description: 'TBA',
    content: 'TBA',
  },
];

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

