import * as React from "react";
import PageRow from "./Row";
import data from "./data";
import * as R from "ramda";
import { CardsWithColors } from "../types";
import Layout from "../Layout";
import { Box } from "@chakra-ui/react";

export const colors = {
  red: "#861b1b",
  green: "#005e29",
  blue: "#290753"
};


const addColors = (): CardsWithColors => {
  const chunks = R.splitEvery(3, data);
  const colorValues = Object.values(colors);
  const cardsWithColors = chunks.map(chunk => {
    return chunk.map((card, index) => {
      return { card, color: colorValues[index]}
    })
  })
  return R.flatten(cardsWithColors);
}

export const getPages = (): CardsWithColors[] => {
  const cardsWithColors = addColors();
  return R.splitEvery(8, cardsWithColors);
}

const createKey = (rows: CardsWithColors): string => rows.map(({ card }) => card[0]).join("");

const FrontPage = () => {
  const pages = getPages();
  return (
    <Box width="210mm" margin="0 auto">
      {pages.map((page: CardsWithColors) => {
        const rows = R.splitEvery(2, page);
        return (
          <Layout key={createKey(page)}>
            {rows.map((row: CardsWithColors) => (
              <PageRow key={createKey(row)} row={row} />
            ))}
          </Layout>
        );
      })}
    </Box>
  );
};

export default FrontPage;
