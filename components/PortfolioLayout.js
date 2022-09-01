import { PortfolioContent } from './PortfolioContent';
import { Box } from "./Box.js";
import { Card, Textarea, Spacer, Row, Button, Input, Text} from '@nextui-org/react';

export const PortfolioLayout = ({ children }) => (
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
    <PortfolioContent />
  </Box>
);