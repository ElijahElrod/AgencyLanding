import { Text, Spacer, Grid, Card } from "@nextui-org/react"
import { Box } from "./Box.js"
import ContactButton from "./ContactButton.js";

export const Content = () => (
  <Box css={{px: "$12", mt: "$8", "@xsMax": {px: "$10"}, d: "flex", flexDirection: "column", alignItems: "center"}}>
    <Text h1>Enterprise Software</Text>
    <Text size="$lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Purus gravida quis blandit turpis. Augue neque gravida in
      fermentum et sollicitudin ac orci. Et sollicitudin ac orci phasellus egestas. Elementum tempus
      egestas sed sed risus pretium quam vulputate. Interdum velit euismod in pellentesque massa
      placerat duis ultricies.
    </Text>
    <Spacer y={1} />
    <Text size="$lg">
      Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Praesent semper feugiat nibh
      sed pulvinar. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Malesuada
      proin libero nunc consequat interdum varius sit amet. Lectus quam id leo in vitae. Sed viverra
      tellus in hac habitasse platea dictumst. Vivamus at augue eget arcu. Augue mauris augue neque
      gravida in.
    </Text>
    <Spacer y={1} />
    <Text size="$lg">
      Tincidunt vitae semper quis lectus nulla at volutpat diam. Gravida dictum fusce ut placerat.
      Erat velit scelerisque in dictum non. Tempus quam pellentesque nec nam aliquam sem et tortor
      consequat. Eu nisl nunc mi ipsum faucibus. Cras fermentum odio eu feugiat pretium nibh. Vel
      pharetra vel turpis nunc eget lorem dolor sed viverra. Sollicitudin tempor id eu nisl nunc mi
      ipsum faucibus. Sed id semper risus in hendrerit gravida rutrum. Eget nulla facilisi etiam
      dignissim. Erat imperdiet sed euismod nisi. Risus in hendrerit gravida rutrum quisque non
      tellus orci ac.
    </Text>
    <Spacer y={1} />
    <Text size="$lg">Hero Section</Text>
    <Text size="$md">
      We are a full-service software development agency that provides software solutions for businesses like you. Our backgrounds are rooted in 
      full-stack development and blockchain solutions.
      * Grab Emails here *
    </Text>
    <Spacer y={1} />
    <Text justifyConter="center" size="$4xl" h2> 3 Steps to fufilling your vision.</Text>
    <Grid.Container gap={2}>
      <Grid xs={4}>
        <Card isHoverable>
        <Card.Header>
            <Text b>Step 1: Identifying your needs</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            <Text>During our initial discussions, we want to explore your idea, and start figuring out requirements. After this, we'll start internal discussions to get a team ready that will keep you 
              updated throughout the process.
            </Text>
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={4}>
        <Card isHoverable>
        <Card.Header>
            <Text b>Step 2: UI Workshops & Development</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            <Text>After the initial consultations, we'll start to discuss the system architecture, and customize it based on your comments and our recommendations. This will kick off 
              development efforts, where we start connecting the system to the previously designed UI. All of this will be completed using industry best practices such as Unit Testing,
              Extensive Documentation, and a CI/CD pipeline for automated deployments.
            </Text>
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={4}>
        <Card isHoverable>
        <Card.Header>
            <Text b>Step 3: Maintenance & Training</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            <Text>During the final stages of the project, we'll conduct training sessions so that your employees will be easily able to navigate and do their work. 
              We'll also offer ongoing support, project maintenance, and can add new features or modify existing ones.</Text>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
    <Spacer y={3} />
    <Text size="$4xl" h2>Interested in enterprise software solutions for your business?</Text>
    <ContactButton />
    <Spacer y={3} />
    <Text size="$4xl" h2>The only software agency you'll need.</Text>
    <Text size="$md">
      CompanyNameHere is a software agency, that designs and develops enterprise software solutions for businesses like you. We specialize in full-stack development, 
      and blockchain technology, but also offer additional services like maintenance and Upskilling. We come experienced in developing scalable
      and distributed systems from years working for Fortune 50s and Growth companies
      such as J.P Morgan, Citi, & AdTheorent.
    </Text>
    <Spacer y={1} />
  </Box>
);