import * as React from "react";
import type { Card } from "../types";
import { List, ListItem } from "@chakra-ui/react";
import Image from 'next/image';


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
    color="#861b1b"
    fontFamily="Rancho"
    width="100mm" 
    height="70mm" 
    padding="0px"
    margin="0px"
    borderRight="10px grey solid" 
    borderLeft="5px grey solid"
    borderBottom="3px grey solid"
    borderTop="3px grey solid"
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
        <ListItem fontSize="20px" fontWeight="bold" key={word} textAlign="center">
          {word} 
        </ListItem>
      ))}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rancho&display=swap"
            rel="stylesheet"
          />
         <Image src="/SkizaCard.png"
         height={304}
         width={1219}
         />
       
    </CardContainer>
  );
}
