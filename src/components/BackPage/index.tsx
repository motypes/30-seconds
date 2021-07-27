import * as React from "react";
import PageRow from "../BackPage/Row";
import Layout from "../Layout";
import { Box } from "@chakra-ui/react";


const BackPage = () => {
  const color = "#b32626";
  const rows = [...Array(4)];
  return (
    <Box width="210mm" margin="0 auto">
      <Layout>
        {rows.map((_row, index)=> (
          <PageRow key={index} color={color} />
        ))}
      </Layout>
    </Box>
  );
};

export default BackPage;
