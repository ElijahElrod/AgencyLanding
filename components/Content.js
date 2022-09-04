import { Text, Spacer, Grid, Card, Image, Col, Container } from "@nextui-org/react"
import { Box } from "./Box.js"
import ContactButton from "./ContactButton.js";

export const Content = () => (
  <Box css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" }, d: "flex", flexDirection: "column", alignItems: "center" }}>
    <Text h1>Custom Software Development</Text>
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
    <Text size="$4xl" h2>Hero Section</Text>
    <Text size="$lg" weight={"semibold"}>
      We are a full-service software development agency that provides software solutions for businesses like you. Our backgrounds are rooted in
      full-stack development and blockchain solutions. We understand that development projects can be expensive, and so we offer two different plans for project funding:
      <br></br>
      <br></br>
      Option 1: Project is funded by 100% cash
      <br></br>
      Option 2: Project is funding by a small deposit upfront, and provides 20% Profit Share for development services (i.e. We take 20% MRR on a recurring basis).
      <br></br>
      * Grab Emails here *
    </Text>
    <Spacer y={1} />
    <Container >
      <Text size="$4xl" h2> 3 Steps to fufilling your vision.</Text>
      <Grid.Container gap={2}>
        <Grid  xs={12} sm={6} md={4}>
          <Card isHoverable>
            <Card.Header>
              <Text b>Step 1: Identifying your needs</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
              <Col>
                <Text weight="semibold">During our initial discussions, we want to explore your idea, and start figuring out requirements. After this, we'll start internal discussions to get a responsible 
                team ready that will keep you updated throughout the process and to communicate as decisions come up.
                </Text>
                <Image
                  width={320}
                  height={180}
                  src="https://img.freepik.com/free-vector/group-therapy-illustration_74855-5516.jpg?w=1380&t=st=1662036449~exp=1662037049~hmac=c4660d6cda9776dc89634e638a6164a0b92313f8dedffd606a3460cd4ed79548"
                  alt="Default Image"
                  objectFit="cover"
                />
              </Col>
            </Card.Body>
          </Card>
        </Grid>
        <Grid  xs={12} sm={6} md={4}>
          <Card isHoverable>
            <Card.Header>
              <Text b>Step 2: UI Workshops & Development</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
              <Col>
                <Text weight="semibold">After the initial consultations, we'll start to discuss the system architecture, and customize it based on your comments and our recommendations. This will kick off
                  development efforts, where we start connecting the system to the previously designed UI. 
                </Text>
                <Image
                  width={320}
                  height={180}
                  src="https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=900&t=st=1662036475~exp=1662037075~hmac=3b513c136f69276758b31f3c8a4ca964948e8c9f3bf0b3f2195e268623b8b233"
                  alt="Default Image"
                  objectFit="cover"
                />
              </Col>

            </Card.Body>
          </Card>
        </Grid>
        <Grid  xs={12} sm={6} md={4}>
          <Card isHoverable>
            <Card.Header>
              <Text b>Step 3: Maintenance & Training</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
              <Col justify="space-between">
                <Text weight="semibold">During the final stages of the project, we'll conduct training sessions so that your employees will be easily able to navigate and do their work.
                  We'll also offer ongoing support, project maintenance, and can add new features or modify existing ones.</Text>
                <Image
                  width={320}
                  height={180}
                  src="https://img.freepik.com/free-vector/business-man-working-hard-stock-financial-trade-market-diagram-vector-illustration-flat-design_1150-39773.jpg?w=900&t=st=1662036490~exp=1662037090~hmac=f4684e81752568ea8ab4f93353e895484d13b8cef278e810ab3412440247a3e3"
                  alt="Default Image"
                  objectFit="cover"
                />
              </Col>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Container>

    <Spacer y={3} />
    <Text size="$4xl" h2>Interested in enterprise software solutions for your business?</Text>
    <ContactButton />
    <Spacer y={2} />
    <Text size="$4xl" h2>The only software agency you'll need.</Text>
    <Text size="$xl" weight={"semibold"}>
      Shösansei Software is a full-service agency designed to create innovative solutions for your business. We design and develop enterprise software solutions side-by-side with you so you can focus on growing your business.
      We specialize in full-stack development, and blockchain technology, but also offer additional services like maintenance and training for your employees. 
      <br></br>
      <br></br>
      We come experienced in developing scalable and distributed systems from years working for Fortune 50s and Growth companies like J.P Morgan, Citi, & AdTheorent.
    </Text>
    <Spacer y={1} />
  </Box>
);