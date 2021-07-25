import * as React from "react";
import PageRow from "../Row";
import data from "./data";
import * as R from "ramda";
import { Pages, Row as RowT } from "../types";
import Layout from "../Layout";
import { Box } from "@chakra-ui/react";

const pages: Pages = R.splitEvery(9, data);

const createKey = (rows: RowT): string => rows.map(card => card[0]).join("");

const HomePage = () => {
  return (
    <Box width="210mm" margin="0 auto">
      {pages.map((page: RowT, index) => {
        const color = index % 2 === 0 ? "#ff1a1a" : "#CCCC00";
        const rows = R.splitEvery(3, page);
        return (
          <Layout key={createKey(page)} footNote={`30-seconds page-${index}`}>
            {rows.map(row => (
              <PageRow key={createKey(row)} color={color} row={row} />
            ))}
          </Layout>
        );
      })}
    </Box>
  );
};

export default HomePage;
