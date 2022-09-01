import { Content } from "./Content.js"
import { Box } from "./Box.js";
import { Card, Textarea, Spacer, Row, Button, Input, Text} from '@nextui-org/react';

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%",
      position: "relative",
      overflow: "invisible scroll",
      d: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}
  >
    {children}
    <Content />
    <Card isHoverable variant="bordered" css={{ mw: "400px", d: "flex", flexDirection: "column", alignItems: "center" }}>
          <Card.Header>
            <Text b>Contact Us</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body>

            <Input label="Company Name" borderWeight="bold" />
            <Spacer y={1} />
            <Input label="Email" />
            <Spacer y={1} />
            <Textarea
              label="Tell Us Your Amazing Ideas."
            />
          </Card.Body>
          <Card.Footer>
            <Row justify="center">

              <Button size="sm" color="secondary">Submit</Button>
            </Row>
          </Card.Footer>
        </Card>
  </Box>
);