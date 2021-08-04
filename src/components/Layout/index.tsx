import { background, Box } from "@chakra-ui/react";
import * as React from "react";
import FootNote from "../FootNote";

export interface Props {
  children: React.ReactChild[] | React.ReactChild;
  footNote: string;
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
    marginRight="5px"
    marginLeft="5px"
  >
    {children}
  </Box>
);

export default function Layout(props: Props) {
  return (
    <PageContainer>
      <Box padding="10mm">
        {props.children}
        <FootNote text={props.footNote} />
      </Box>
    </PageContainer>
  );
}
