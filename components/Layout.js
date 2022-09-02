import { Box } from "./Box.js";
import { AcmeLogo } from "./AcmeLogo.js";
import { SunIcon } from "../assets/icons/SunIcon.js";
import { MoonIcon } from "../assets/icons/MoonIcon.js";
import { Navbar, Switch, Link, Text, useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes'


export default function Layout({ children }) {

  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  const collapseItems = [
    "Company",
    "Legal",
    "Team",
    "Help & Feedback",
  ];

  return (
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
      <Navbar shouldHideOnScroll isBordered={isDark} variant="static">
        <Navbar.Brand>
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            Shösansei
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Navbar.Link href="/portfolio">Projects</Navbar.Link>
          <Navbar.Link href="/about">Company</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Content>
        <Navbar.Toggle aria-label="toggle navigation" showIn={"xs"} />
        <Navbar.Content>

          <Navbar.Item>
            <Switch
              checked={isDark}
              size="lg"
              onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
              color="secondary"
              iconOn={<SunIcon filled />}
              iconOff={<MoonIcon filled />}
            />
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse showIn={"sm"}>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={item}>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
      {children}
    </Box>
  );


}