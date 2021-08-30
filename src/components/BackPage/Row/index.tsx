import { Box } from "@chakra-ui/react";
import * as React from "react";
import { CardsWithColors } from "../../types";
import PageCard from "../Card";

interface Props {
  row: CardsWithColors;
}

export default function PageRow({ row }: Props) {
  return (
    <Box margin="10px" display="flex" flexDirection="row" justifyContent="center">
      {row.map(({ card, color }) => {
        return (
          <Box key={card.join(",")}>
            <PageCard color={color} />
          </Box>
        );
      })}
    </Box>
  );
}
