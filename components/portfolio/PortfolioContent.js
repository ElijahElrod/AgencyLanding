import { Text, Spacer, Grid, Card, Image, Col, Container } from "@nextui-org/react"
import { Box } from "../Box.js"
import ContactButton from "../ContactButton.js";
import { useRouter } from "next/router.js";

export default function PortfolioContent() {
    const router = useRouter();

    return (
        <Box css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" }, d: "flex", flexDirection: "column", alignItems: "center" }}>
            <Text h1>Our Projects</Text>
            <Container >
                <Text size="$4xl" h2>Web3.0 / Blockchain Projects</Text>
                <Grid.Container gap={2}>
                    <Grid xs={12} sm={12} md={4}>
                        <Card isHoverable isPressable>
                            <Card.Header>
                                <Text b>WalletMaestro (Software-As-A-Service)</Text>
                            </Card.Header>
                            <Card.Divider />
                            <Card.Body>
                                <Image
                                    width={320}
                                    height={180}
                                    src="https://img.freepik.com/free-vector/group-therapy-illustration_74855-5516.jpg?w=1380&t=st=1662036449~exp=1662037049~hmac=c4660d6cda9776dc89634e638a6164a0b92313f8dedffd606a3460cd4ed79548"
                                    alt="Default Image"
                                    objectFit="cover"
                                />

                            </Card.Body>
                        </Card>
                    </Grid>
                    <Grid xs={12} sm={12} md={4}>
                        <Card isHoverable isPressable onPress={() => {
                           router.push('/portfolio/mintbear')
                        }}>
                            <Card.Header>
                                <Text b>MintBear.xyz (Software-As-A-Service)</Text>
                            </Card.Header>
                            <Card.Divider />
                            <Card.Body>


                                <Image
                                    width={320}
                                    height={180}
                                    src="https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=900&t=st=1662036475~exp=1662037075~hmac=3b513c136f69276758b31f3c8a4ca964948e8c9f3bf0b3f2195e268623b8b233"
                                    alt="Default Image"
                                    objectFit="cover"
                                />

                            </Card.Body>
                        </Card>
                    </Grid>
                    <Grid xs={12} sm={12} md={4}>
                        <Card isHoverable isPressable>
                            <Card.Header>
                                <Text b>Step 3: Maintenance & Training</Text>
                            </Card.Header>
                            <Card.Divider />
                            <Card.Body>

                                <Image
                                    width={320}
                                    height={180}
                                    src="https://img.freepik.com/free-vector/business-man-working-hard-stock-financial-trade-market-diagram-vector-illustration-flat-design_1150-39773.jpg?w=900&t=st=1662036490~exp=1662037090~hmac=f4684e81752568ea8ab4f93353e895484d13b8cef278e810ab3412440247a3e3"
                                    alt="Default Image"
                                    objectFit="cover"
                                />

                            </Card.Body>
                        </Card>
                    </Grid>
                </Grid.Container>
            </Container>

            <Spacer y={3} />
            <Container >
                <Text size="$4xl" h2>Web & Mobile</Text>
                <Grid.Container gap={2}>
                    <Grid xs={12} sm={12} md={4}>
                        <Card isHoverable isPressable>
                            <Card.Header>
                                <Text b>Althos (Mobile)</Text>
                            </Card.Header>
                            <Card.Divider />
                            <Card.Body>


                                <Image
                                    width={320}
                                    height={180}
                                    src="https://img.freepik.com/free-vector/group-therapy-illustration_74855-5516.jpg?w=1380&t=st=1662036449~exp=1662037049~hmac=c4660d6cda9776dc89634e638a6164a0b92313f8dedffd606a3460cd4ed79548"
                                    alt="Default Image"
                                    objectFit="cover"
                                />

                            </Card.Body>
                        </Card>
                    </Grid>
                    <Grid xs={12} sm={12} md={4}>
                        <Card isHoverable isPressable>
                            <Card.Header>
                                <Text b>Channelist.io (Software-As-A-Service)</Text>
                            </Card.Header>
                            <Card.Divider />
                            <Card.Body>

                                <Image
                                    width={320}
                                    height={180}
                                    src="https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=900&t=st=1662036475~exp=1662037075~hmac=3b513c136f69276758b31f3c8a4ca964948e8c9f3bf0b3f2195e268623b8b233"
                                    alt="Default Image"
                                    objectFit="cover"
                                />


                            </Card.Body>
                        </Card>
                    </Grid>
                    <Grid xs={12} sm={6} md={4}>
                        <Card isHoverable isPressable>
                            <Card.Header>
                                <Text b>LuckyCasinos (Affiliate Site)</Text>
                            </Card.Header>
                            <Card.Divider />
                            <Card.Body>

                                <Image
                                    width={320}
                                    height={180}
                                    src="https://img.freepik.com/free-vector/business-man-working-hard-stock-financial-trade-market-diagram-vector-illustration-flat-design_1150-39773.jpg?w=900&t=st=1662036490~exp=1662037090~hmac=f4684e81752568ea8ab4f93353e895484d13b8cef278e810ab3412440247a3e3"
                                    alt="Default Image"
                                    objectFit="cover"
                                />

                            </Card.Body>
                        </Card>
                    </Grid>
                </Grid.Container>
            </Container>

            <Spacer y={3} />

            <Text size="$4xl" h2>Interested In Solutions For Your Business?</Text>
            <ContactButton />
            <Spacer y={1} />
        </Box>
    );
}

