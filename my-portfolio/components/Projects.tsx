import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Projects = () => {
  const projects = [
    {
      title: 'API Documentation Overhaul',
      description: 'Completely revamped the API documentation for a major SaaS platform, improving developer onboarding time by 40%.',
      link: '/projects/api-documentation-overhaul',
    },
    {
      title: 'User Guide for IoT Device',
      description: 'Created a comprehensive user guide for a new IoT device, reducing support tickets by 30%.',
      link: '/projects/iot-device-user-guide',
    },
    {
      title: 'Technical Blog Series',
      description: 'Authored a series of technical blog posts explaining complex machine learning concepts to a non-technical audience.',
      link: '/projects/technical-blog-series',
    },
  ]

  return (
    <section id="projects" className="scroll-mt-16">
      <h2 className="text-4xl font-bold mb-6 text-comic-blue">Projects / Work Samples</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Link href={project.link} key={index} className="block transition-transform hover:scale-105">
            <Card className="comic-card h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-comic-purple">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-comic-black">{project.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Projects

