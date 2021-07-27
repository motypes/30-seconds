import { Box } from "@chakra-ui/react";
import * as React from "react";
import { Row } from "../../types";
import PageCard from "../Card";

interface Props {
  row: Row;
  color: string;
}

export default function PageRow({ row, color }: Props) {
  return (
    <Box margin="10px" display="flex" flexDirection="row" justifyContent="center">
      {row.map((card: string[]) => {
        return (
          <Box key={card.join(",")}>
            <PageCard card={card} color={color} />
          </Box>
        );
      })}
    </Box>
  );
}
