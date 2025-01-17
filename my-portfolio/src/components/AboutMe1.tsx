import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const AboutMe = () => {
  return (
    <section id="logo" className="scroll-mt-16">
      <Card className="comic-card">
        <CardHeader>
        </CardHeader>
        <CardContent className="text-lg">
         <div>
          <img src="/images/kplogo.png" alt="Logo" />
         </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default AboutMe

