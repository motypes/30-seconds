import * as React from "react";
import type { Card } from "../types";
import { List, ListItem } from "@chakra-ui/react";

interface Props {
  card: Card;
  backgroundColor?: string;
}

const CardContainer = ({
  backgroundColor,
  children
}: {
  backgroundColor?: string;
  children: React.ReactNode;
}) => (
  <List
    color="black"
    width="230px"
    height="320px"
    padding="0px"
    margin="0px"
    borderRight="10px white solid"
    listStyleType="none"
    display="flex"
    justifyContent="space-around"
    flexDirection="column"
    backgroundColor={backgroundColor || "red"}
  >
    {children}
  </List>
);

export default function PageCard({ card, backgroundColor }: Props) {
  return (
    <CardContainer backgroundColor={backgroundColor}>
      {card.map((word: string) => (
        <ListItem fontSize="15px" fontWeight="bold" key={word} textAlign="center">
          {word}
        </ListItem>
      ))}
    </CardContainer>
  );
}
