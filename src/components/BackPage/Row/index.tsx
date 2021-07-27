import { Box } from "@chakra-ui/react";
import * as React from "react";
import { Row } from "../../types";
import PageCard from "../Card";

interface Props {
  color: string;
}

export default function PageRow({  color }: Props) {
  const columns = [...Array(2)];
  return (
    <Box margin="10px" display="flex" flexDirection="row" justifyContent="center">
      {columns.map((_value, index) => {
        return (
          <Box key={index}>
            <PageCard color={color} />
          </Box>
        );
      })}
    </Box>
  );
}
