import { background, Box } from "@chakra-ui/react";
import * as React from "react";
import FootNote from "../FootNote";

export interface Props {
  children: React.ReactChild[] | React.ReactChild;
}

const PageContainer = ({ children }: { children: React.ReactNode }) => (
  <Box
    display="flex"
    flexDirection="column"
    height="295mm"
    boxShadow="0 0 3px 3px #ccc"
    overflow="hidden"
    position="relative"
    marginBottom="10px"
  >
    {children}
  </Box>
);

export default function Layout(props: Props) {
  return (
    <PageContainer>
      <Box padding="0.25mm">
        {props.children}
      </Box>
    </PageContainer>
  );
}
