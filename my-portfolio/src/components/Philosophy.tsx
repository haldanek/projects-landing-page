import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Philosophy = () => {
  return (
    <section id="philosophy" className="scroll-mt-16">
      <Card className="comic-card">
        <CardHeader>
          <CardTitle className="text-3xl text-comic-green">Philosophy Statement</CardTitle>
        </CardHeader>
        <CardContent className="text-lg">
          <p>
            I believe that effective technical writing is the bridge between complex ideas and user understanding. My
            goal is to create documentation that not only informs but empowers users, turning potential frustration into
            moments of clarity and accomplishment. I strive to stay at the forefront of industry trends and user needs,
            constantly adapting my approach to deliver the most value to both the product team and end-users.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}

export default Philosophy

