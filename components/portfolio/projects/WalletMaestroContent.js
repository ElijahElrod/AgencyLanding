import { Card, Col, Row, Text, Tooltip, Image, Spacer } from "@nextui-org/react";

export default function WalletMaestroContent() {
    return (
        <Card variant={"shadow"}>
            <Card.Header>
                <Text h2>MintBear Project
                </Text></Card.Header>
            <Card.Divider />
            <Card.Body>
                <Row>
                    <Col span={5}>
                        <Text h3>What We did</Text>
                        <Text>Point 1 </Text>
                        <Text>Point 2 </Text>
                        <Text>Point 3 </Text>
                        <Text>Point 4 </Text>
                    </Col>
                    <Col span={7}>
                        <Card css={{ maxW: '80%' }}>
                            <Card.Header>
                                <Text h3>Details</Text></Card.Header>
                            <Card.Divider />
                            <Card.Body>
                                <Text h3>Challenges</Text>
                                <Text>Content1</Text>
                                <Text h3>Results</Text>
                                <Text>Content1</Text>
                            </Card.Body>
                        </Card></Col>
                </Row>
                <Col>
                    <Text h2>Tech Stack</Text>
                    <Row>
                        <Tooltip content={"React"}>
                            <Image
                                src="https://raw.githubusercontent.com/reactjs/reactjs.org/main/src/icons/logo.svg"
                                alt="Default Image"
                                width={50}
                                height={50}
                            />
                        </Tooltip>
                        <Spacer x={0.5} />
                        <Tooltip content={"NextJS"}>
                            <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                                alt="Default Image"
                                width={50}
                                height={50}
                            />
                        </Tooltip>
                        <Spacer x={0.5} />
                        <Tooltip content={"Solidity"}>
                            <Image
                                src="https://docs.soliditylang.org/en/develop/_images/logo.svg"
                                alt="Default Image"
                                width={50}
                                height={50}
                            />
                        </Tooltip>
                        <Spacer x={0.5} />
                        <Tooltip content={"Hardhat"}>
                            <Image
                                src="https://seeklogo.com/images/H/hardhat-logo-888739EBB4-seeklogo.com.png"
                                alt="Default Image"
                                width={50}
                                height={50}
                            />
                        </Tooltip>
                        <Spacer x={0.5} />
                        <Tooltip content={"AWS"}>
                            <Image
                                src="https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg"
                                alt="Default Image"
                                width={50}
                                height={50}
                            />
                        </Tooltip>


                    </Row>
                </Col>
            </Card.Body>
        </Card>
    );
}