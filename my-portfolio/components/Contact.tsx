import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Linkedin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-16">
      <Card className="comic-card">
        <CardHeader>
          <CardTitle className="text-3xl text-comic-blue">Let's Connect!</CardTitle>
          <CardDescription className="text-comic-black">Send me an email or connect on LinkedIn</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input className="comic-input" placeholder="Your Name" />
            <Input className="comic-input" type="email" placeholder="Your Email" />
            <Textarea className="comic-input" placeholder="Your Message" />
            <Button type="submit" className="comic-button">Send Message</Button>
          </form>
          <div className="mt-4">
            <Button variant="outline" className="comic-button flex items-center bg-comic-blue">
              <Linkedin className="mr-2 h-4 w-4" />
              Connect on LinkedIn
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default Contact

