// Updated Resume Component with Certificates Button
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Resume = () => {
  return (
    <section id='resume' className='scroll-mt-16'>
      <Card className='comic-card'>
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
    </section>
  );
};

export default Resume;
