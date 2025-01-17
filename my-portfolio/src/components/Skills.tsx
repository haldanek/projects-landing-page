import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Skills = () => {
  const skills = [
    'Technical Writing',
    'API Documentation',
    'User Guides',
    'Process Documentation',
    'Markdown',
    'HTML/CSS',
    'Git',
    'JIRA',
    'Agile Methodologies',
    'Information Architecture',
    'Content Strategy',
    'Editing & Proofreading',
  ]

  return (
    <section id="skills" className="scroll-mt-16">
      <Card className="comic-card">
        <CardHeader>
          <CardTitle className="text-3xl text-comic-purple">Skills & Abilities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} className="comic-badge">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default Skills

