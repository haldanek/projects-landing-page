import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const CareerSummary = () => {
  return (
    <section id="career" className="scroll-mt-16">
      <Card className="comic-card">
        <CardHeader>
          <CardTitle className="text-3xl text-comic-red">Career Summary</CardTitle>
        </CardHeader>
        <CardContent className="text-lg">
          <ul className="list-disc pl-6 space-y-2">
            <li>Over 5 years of experience in technical writing across various industries</li>
            <li>Specialized in API documentation, user guides, and process documentation</li>
            <li>Proven track record of improving user engagement and reducing support tickets through clear documentation</li>
            <li>Experienced in working with cross-functional teams in Agile environments</li>
            <li>Passionate about staying updated with the latest trends in technical communication and user experience</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}

export default CareerSummary

