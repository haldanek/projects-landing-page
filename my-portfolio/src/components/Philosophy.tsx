import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Philosophy = () => {
  return (
    <section id='philosophy' className='scroll-mt-16'>
      <Card className='comic-card'>
        <CardHeader>
          <CardTitle className='text-3xl text-comic-green'>
            Philosophy Statement
          </CardTitle>
        </CardHeader>
        <CardContent className='text-lg'>
          <p>
            As a Software Engineer and Technical Writer, I believe
            in creating user-focused solutions through clarity, collaboration,
            and continuous improvement. My approach to engineering prioritizes
            intuitive, accessible designs, while my writing ensures complex
            concepts are easy to understand. I value teamwork and embrace
            challenges as opportunities to learn and grow. By combining
            technical expertise with effective communication, I aim to bridge
            the gap between innovation and usability, delivering impactful,
            inclusive solutions that empower people and drive progress.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

export default Philosophy

