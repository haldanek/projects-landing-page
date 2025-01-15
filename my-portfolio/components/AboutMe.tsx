import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const AboutMe = () => {
  return (
    <section id="about" className="scroll-mt-16">
      <Card className="comic-card">
        <CardHeader>
          <CardTitle className="text-3xl text-comic-red">About Me</CardTitle>
        </CardHeader>
        <CardContent className="text-lg">
          <p>
            Hello! I'm Jane Doe, a passionate technical writer with over 5 years of experience in simplifying complex
            technical concepts for diverse audiences. My expertise lies in creating clear, concise, and user-friendly
            documentation for software products, APIs, and technical processes.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}

export default AboutMe

