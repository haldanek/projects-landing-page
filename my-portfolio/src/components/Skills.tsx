import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillDescriptions: { [key: string]: string } = {
  'Technical Research':
    'Investigating technical concepts to inform documentation and development.',
  'User Documentation Production':
    'Creating guides and manuals tailored for end users.',
  'User Guides':
    'Step-by-step instructions to help users understand product features.',
  'Process Documentation':
    'Recording and explaining workflows for consistent operations.',
  Markdown: 'Lightweight markup language used for formatting documentation.',
  'HTML/CSS': 'Languages for structuring and styling web content.',
  'Git/GitHub':
    'Version control system and collaboration platform for developers.',
  'Template Design': 'Creating reusable layouts for documents or applications.',
  'Audience Adaptation':
    'Customizing content based on the knowledge level of the reader.',
  'Agile Methodologies':
    'Iterative development processes that promote flexibility and collaboration.',
  'Editing and Proofreading':
    'Reviewing documents for clarity, grammar, and accuracy.',
  'Content Development':
    'Planning and writing content for digital or print media.',
  'Multimedia Content Creation':
    'Combining visuals, text, and audio for interactive content.',
  'Document Formatting':
    'Organizing text, images, and styles to improve readability.',
  'Version Control': 'Tracking changes to source code and documents.',
  'User Interface (UI) Design':
    'Designing the visual elements users interact with.',
  'User Experience (UX) Design':
    'Improving how users experience a product or system.',
  'Product Features Highlight': 'Showcasing key features that benefit users.',
};

const Skills = () => {
  const skills = Object.keys(skillDescriptions);

  return (
    <section
      id='skills'
      className='relative bg-cover bg-center bg-no-repeat py-16 px-6 scroll-mt-16'
      style={{ backgroundImage: "url('/images/sh-11.png')" }}
    >
      {/* Optional dark overlay for contrast */}
      <div className='absolute inset-0 bg-black/50 z-0' />

      <div className='relative z-10 max-w-6xl mx-auto'>
        <Card className='bg-transparent backdrop-blur-sm border-white text-white shadow-lg'>
          <CardHeader>
            <CardTitle className='text-3xl text-comic-purple'>
              Skills (Super Powers)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex flex-wrap gap-4'>
              {skills.map((skill, index) => (
                <div key={index} className='relative group'>
                  <div className='comic-button bg-red-600 text-white hover:bg-yellow-400 hover:text-black transition-colors duration-200 rounded px-4 py-2 cursor-default text-sm font-semibold shadow-md'>
                    {skill}
                  </div>
                  <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max max-w-xs p-2 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none'>
                    {skillDescriptions[skill]}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
