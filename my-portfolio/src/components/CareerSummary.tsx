import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CareerSummary = () => {
  return (
    <section
      id='career'
      className='relative bg-cover bg-center bg-no-repeat py-16 px-6 text-white scroll-mt-16'
      style={{ backgroundImage: "url('/images/sh-9.png')" }}
    >
      {/* Optional dark overlay for better text readability */}
      <div className='absolute inset-0 bg-black/60 z-0'></div>

      {/* Foreground content */}
      <div className='relative z-10 max-w-5xl mx-auto'>
        <Card className='bg-transparent backdrop-blur-sm shadow-lg text-white border-white border'>
          <CardHeader>
            <CardTitle className='text-3xl text-comic-red'>
              Career Summary
            </CardTitle>
          </CardHeader>
          <CardContent className='text-lg space-y-4'>
            <p>
              Former experienced instructional leader with a passion for
              fostering inclusive and innovative environments, now transitioning
              to a career in software engineering and technical writing. Skilled
              in leveraging data-driven, analytical approaches, coupled with
              strong critical thinking and effective communication skills, to
              drive impactful results. Seeking to apply a blend of instructional
              design expertise and technical acumen to build accessible,
              user-focused software products. Driven by a commitment to
              usability, I aim to leverage my design skills in developing
              solutions that are both functional and intuitive, enhancing user
              experience through thoughtful, well-designed software.
            </p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>
                8 week internship as a Technical Writer: revamped onboarding
                documentation and created a template to document database
                components
              </li>
              <li>
                Completed over 800 hours of education and application in a Java
                Full-stack bootcamp
              </li>
              <li>
                Experienced in working with cross-functional and cross-curricula
                teams in diverse environments
              </li>
              <li>
                Over 12 years of experience in instructional leadership,
                exceeding grade-level expectations, increasing standardized
                assessment scores and improving literacy skills
              </li>
              <li>
                Proven track record of improving student engagement and
                expanding support through differentiation
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CareerSummary;
