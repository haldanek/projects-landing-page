import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Philosophy = () => {
  return (
    <section
      id='philosophy'
      className='relative bg-cover bg-center bg-no-repeat py-16 px-6 text-white scroll-mt-16'
      style={{ backgroundImage: "url('/images/sh-8.png')" }}
    >
      {/* Optional overlay to improve text readability */}
      <div className='absolute inset-0 bg-black/60 z-0'></div>

      {/* Content */}
      <div className='relative z-10 max-w-4xl mx-auto'>
        <Card className='bg-transparent backdrop-blur-sm shadow-lg text-white border-white border'>
          <CardHeader>
            <CardTitle className='text-3xl text-comic-green'>
              Philosophy Statement
            </CardTitle>
          </CardHeader>
          <CardContent className='text-lg'>
            <p className='indent-8'>
              As a Software Engineer and Technical Writer, I believe in creating
              user-focused solutions through clarity, collaboration, and
              continuous improvement. My approach to engineering prioritizes
              intuitive, accessible designs, while my writing ensures complex
              concepts are easy to understand. I value teamwork and embrace
              challenges as opportunities to learn and grow. By combining
              technical expertise with effective communication, I aim to bridge
              the gap between innovation and usability, delivering impactful,
              inclusive solutions that empower people and drive progress.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Philosophy;
