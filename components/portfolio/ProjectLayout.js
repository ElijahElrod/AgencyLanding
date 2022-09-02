import { Box } from "../Box.js";

export const ProjectLayout = ({ children }) => (
  <Box
    css={{
      minWidth: "100%",
      maxW: "100%",
      overflow: " invisible scroll",

    }}
  >
    {children}
  </Box>
);