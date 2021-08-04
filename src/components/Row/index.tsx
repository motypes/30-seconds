import { Box } from "@chakra-ui/react";
import * as React from "react";
import { Row } from "../types";
import PageCard from "../Card";

interface Props {
  row: Row;
  color: string;
}

export default function PageRow({ row, color }: Props) {
  console.log("row", row);
  return (
    <Box margin="10px" display="flex" flexDirection="row" /*boxShadow="0 0 3px 3px #ccc"*/>
      {row.map((card: string[], index: number) => {
        return (
          <Box key={card.join(",")}>
            <PageCard card={card} backgroundColor={color} />
          </Box>
        );
      })}
    </Box>
  );
}
