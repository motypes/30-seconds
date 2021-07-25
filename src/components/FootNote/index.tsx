import * as React from "react";
import { Box } from "@chakra-ui/react";

export interface Props {
  text: string;
}

const FootNoteContainer = ({ children }: { children: React.ReactNode }) => (
  <Box
    display="block"
    width="100%"
    height="auto"
    position="absolute"
    paddingBottom="3mm"
    bottom="0"
    fontSize="9px"
  >
    {children}
  </Box>
);

const getDate = () => {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export default function FootNote(props: Props) {
  return (
    <FootNoteContainer>
      <Box color="red">{props.text} |</Box>
      <span>Version {getDate()}</span>
    </FootNoteContainer>
  );
}
