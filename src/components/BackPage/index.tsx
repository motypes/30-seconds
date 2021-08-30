import * as React from "react";
import PageRow from "./Row";
import Layout from "../Layout";
import { Box } from "@chakra-ui/react";
import { getPages } from "../FrontPage";
import * as R from "ramda";
import { CardsWithColors } from "../types";

const BackPage = () => {
  const singlePage = getPages()[0];

  const rows = R.splitEvery(2, singlePage);

  return (
    <Box width="210mm" margin="0 auto">
      <Layout>
        {rows.map((row: CardsWithColors, index) => (
          <PageRow key={index} row={row}  />
        ))}
      </Layout>
    </Box>
  );
};

export default BackPage;
