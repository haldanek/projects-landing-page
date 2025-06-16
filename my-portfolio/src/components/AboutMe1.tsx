/* eslint-disable @next/next/no-img-element */
import { Card, CardHeader } from '@/components/ui/card';

const AboutMe = () => {
  return (
    <section id='logo' className='scroll-mt-16'>
      <Card className='comic-card'>
        <CardHeader></CardHeader>

        <div className='w-full h-[300px]'>
          <img
            src='/images/kplogo.png'
            alt='Logo'
            className='w-full h-full object-cover'
          />
        </div>
      </Card>
    </section>
  );
};

export default AboutMe;
