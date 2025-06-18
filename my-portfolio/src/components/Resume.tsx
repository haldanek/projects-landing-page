import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Resume = () => {
  return (
    <section
      id='resume'
      className='relative bg-cover bg-center bg-no-repeat py-16 px-6 scroll-mt-16'
      style={{ backgroundImage: "url('/images/sh-10.png')" }}
    >
      {/* Optional overlay for contrast */}
      <div className='absolute inset-0 bg-black/60 z-0'></div>

      {/* Content with z-index above overlay */}
      <div className='relative z-10 max-w-4xl mx-auto'>
        <Card className='bg-transparent backdrop-blur-sm border-white text-white shadow-lg'>
          <CardHeader>
            <CardTitle className='text-3xl text-comic-green'>Resume</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='mb-4 text-lg'>
              My resume highlights my professional experience and education pre
              and post career transition.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              {/* Download Resume */}
              <a
                href='/Haldane-Resume-25E.pdf'
                download
                className='comic-button bg-comic-red text-white text-center rounded px-4 py-2'
              >
                Download Resume (PDF)
              </a>

              {/* View Resume in New Tab */}
              <a
                href='/Haldane-Resume-25E.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='comic-button bg-comic-blue text-white text-center rounded px-4 py-2'
              >
                View Resume
              </a>

              {/* Certificates Button */}
              <Link
                href='/certificates'
                className='comic-button bg-yellow-500 text-white text-center rounded px-4 py-2'
              >
                View Certificates
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Resume;
