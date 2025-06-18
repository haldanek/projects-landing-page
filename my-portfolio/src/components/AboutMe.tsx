import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutMe = () => {
  return (
    <section
      id='about'
      className='relative bg-cover bg-center bg-no-repeat py-16 px-6 text-white'
      style={{ backgroundImage: "url('/images/sh-7.png')" }}
    >
      {/* Optional overlay for readability */}
      <div className='absolute inset-0 bg-black/60 z-0'></div>

      <div className='relative z-10 max-w-4xl mx-auto'>
        <Card className='bg-transparent backdrop-blur-sm shadow-lg text-white border-white border'>
          <CardHeader>
            <CardTitle className='text-3xl text-comic-red'>About Me</CardTitle>
          </CardHeader>
          <CardContent className='text-lg space-y-4'>
            <p className='indent-8'>
              Hello! I am Kimberlee Haldane, an ambitious and detail-oriented
              entry-level Software Engineer and Technical Writer, eager to bring
              my unique blend of skills to a team that values innovation and
              communication. Transitioning from a successful career in
              Education, I have cultivated a passion for problem-solving, and
              delivering clear, impactful lessons that helped bridge student
              learning gaps.
            </p>
            <p className='indent-8'>
              In my previous role, I demonstrated my ability to simplify complex
              processes, while collaborating with cross-functional teams to
              ensure seamless implementation of objectives and standards. Now,
              as a developer, I bring the same dedication to delivering
              high-quality, technical solutions and fostering team success.
            </p>
            <p className='indent-8'>
              Whether I’m solving bugs, contributing to a new feature, or
              writing user guides, I thrive on challenges that require both
              creativity and technical expertise. I’m excited to grow as part of
              a dynamic team where I can contribute my skills, learn from
              experienced colleagues, and continue building a meaningful career
              in technology.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutMe;
