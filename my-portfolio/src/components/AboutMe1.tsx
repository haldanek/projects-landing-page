/* eslint-disable @next/next/no-img-element */
import { Card, CardHeader } from '@/components/ui/card'



const AboutMe = () => {
  return (
    <section id="logo" className="scroll-mt-16">
      <Card className="comic-card">
        <CardHeader>
        </CardHeader>
       
         <div>
          <img src="/images/kplogo.png" alt="Logo" />
         </div>
       
      </Card>
    </section>
  )
}

export default AboutMe

