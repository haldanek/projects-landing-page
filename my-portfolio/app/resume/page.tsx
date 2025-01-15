import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-comic-red">Jane Doe - Resume</h1>
      
      <div className="comic-card p-6 mb-8 space-y-6">
        <section>
          <h2 className="text-3xl font-bold mb-4 text-comic-blue">Professional Summary</h2>
          <p className="text-lg">
            Experienced technical writer with over 5 years of expertise in creating clear, concise, and user-friendly documentation for software products, APIs, and technical processes. Skilled in simplifying complex concepts for diverse audiences and improving user engagement through effective communication.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-comic-blue">Work Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-comic-purple">Senior Technical Writer - TechCorp Inc.</h3>
              <p className="text-comic-black">January 2020 - Present</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Lead documentation efforts for enterprise-level software products</li>
                <li>Collaborate with development teams to ensure accurate and up-to-date documentation</li>
                <li>Implement and maintain style guides for consistency across all documentation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-comic-purple">Technical Writer - StartUp Solutions</h3>
              <p className="text-comic-black">June 2017 - December 2019</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Created user guides and API documentation for mobile applications</li>
                <li>Developed video tutorials and interactive guides for complex features</li>
                <li>Reduced support tickets by 30% through improved documentation</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-comic-blue">Education</h2>
          <div>
            <h3 className="text-2xl font-bold text-comic-purple">Bachelor of Arts in English - State University</h3>
            <p className="text-comic-black">Graduated: May 2017</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-comic-blue">Skills</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Technical Writing</li>
            <li>API Documentation</li>
            <li>User Guides</li>
            <li>Process Documentation</li>
            <li>Markdown</li>
            <li>HTML/CSS</li>
            <li>Git</li>
            <li>JIRA</li>
            <li>Agile Methodologies</li>
          </ul>
        </section>
      </div>

      <Link href="/#resume">
        <Button className="comic-button">Back to Portfolio</Button>
      </Link>
    </div>
  )
}

