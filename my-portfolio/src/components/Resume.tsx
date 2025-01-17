import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Resume = () => {
  return (
    <section id="resume" className="scroll-mt-16">
      <Card className="comic-card">
        <CardHeader>
          <CardTitle className="text-3xl text-comic-green">Resume</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-lg">
            My resume highlights my professional experience, education, and key achievements in technical writing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="comic-button">Download Resume (PDF)</Button>
            <Link href="/resume" passHref>
              <Button className="comic-button bg-comic-blue">View Resume</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default Resume

