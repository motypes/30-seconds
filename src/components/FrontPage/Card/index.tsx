import * as React from "react";
import type { Card } from "../../types";
import { List, ListItem, Box, Image } from "@chakra-ui/react";

interface Props {
  card: Card;
  color: string;
}

export default function PageCard({ card, color }: Props) {
  return (
    <Box
      color="black"
      width="100mm"
      height="70mm"
      margin="0px"
      border="1px gray solid"
      display="flex"
      padding="1mm 0"
      justifyContent="space-around"
      flexDirection="column"
    >
      <List
        listStyleType="none"
        justifyContent="center"
        lineHeight="1.2"
        padding="1mm 0"
        fontSize="1.6rem"
        fontWeight="500"
        color={color}
      >
        {card.map((word: string) => (
          <ListItem  key={word} textAlign="center">
            {word}
          </ListItem>
        ))}
      </List>
      <Image src="/card-african-print.png" alt="" width="auto" height="40%" />
    </Box>
  );
}
