'use client';

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: 'TECHNICAL WRITING',
      description:
        'User Stories, Instruction Product Manuals, User Guides, Proposals, ScienceWriting, Medical Writing, White Papers, API Writing, Roadmapping, Competitive Analysis, Product Requirements Document, Market Requirements Document, OKRs, Prototyping, User Journey Map, Meeting Notes, Other Documentation ',
      link: '/projects/technical-writing',
      image: '/images/sh-1.png',
    },
    {
      title: 'UX/UI DESIGN',
      description:
        'Project Planning & Research, Designing for the User, Visual Design, Testing, & Feedback',
      link: '/projects/ux-ui-design',
      image: '/images/sh-2.png',
    },
    {
      title: 'Full-Stack Web Development',
      description:
        'Front-End Web Development, Back-End Web Development, Database Management, API Development, Testing, Deployment, HTML, CSS, Bootstrap, JavaScript, DOM, JQuery, PHP, MySQL, Node.js, Express.js, MongoDB, React, Next.js, Tailwind, Material UI, Figma, Adobe Illustrator, Adobe Photoshop, Adobe Premiere, PostgreSQL, & Related Projects',
      link: '/projects/web-dev',
      image: '/images/sh-5.png',
    },
    {
      title: 'TBA',
      description:
        'TBA',
      link: '/projects/tba',
      image: '/images/sh-6.png',
    },
    {
      title: 'TBA',
      description:
        'TBA',
      link: '/projects/tba',
      image: '/images/sh-4.png',
    },
    {
      title: 'TBA',
      description:
        'TBA',
      link: '/projects/tba',
      image: '/images/sh-3.png',
    },
  ];

  return (
    <section id='projects' className='scroll-mt-16'>
      <h2 className='text-4xl font-bold mb-6 text-comic-blue'>
        Projects / Work Samples
      </h2>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project, index) => (
          <Link key={index} href={project.link} passHref>
            <Card
              className='h-full cursor-pointer hover:shadow-lg transition-shadow duration-300 text-white'
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className='bg-black/60 h-full w-full p-4 rounded-lg'>
                <CardHeader>
                  <CardTitle className='text-2xl text-white'>
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-white'>
                    {project.description}
                  </CardDescription>
                </CardContent>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
