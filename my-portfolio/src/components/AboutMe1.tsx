/* eslint-disable @next/next/no-img-element */
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const AboutMe = () => {
  return (
    <section id='logo' className='scroll-mt-0 p-0 m-0'>
      <Card className='comic-card  rounded-xl overflow-hidden p-0 m-0 boarder shadow'>
        <CardHeader className='p-0 m-0' />

        <CardContent className='p-0 m-0'>
          <div className='w-full h-[900px]'>
            <img
              src='/images/kplogo.png'
              alt='Logo'
              className='w-full h-full object-cover block'
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default AboutMe;
