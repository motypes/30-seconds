import * as React from "react";
import { Box, Image, Text, HStack, Icon } from "@chakra-ui/react";
import { FiFacebook, FiInstagram, FiPhone, FiTwitch, FiTwitter } from "react-icons/fi";

interface Props {
  color: string;
}

export default function PageCard({ color }: Props) {
  return (
    <Box
      color="white"
      backgroundColor={color}
      width="100mm"
      height="70mm"
      margin="0px"
      border="1px grey solid"
      display="flex"
      padding="5mm"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Image src="/skiza-logo.png" alt="" width="auto" height="100%" />
      <HStack spacing="0.5rem">
        <HStack spacing="0.2rem">
          <Icon as={FiPhone} />
          <Text fontSize="0.75rem">0771678574</Text>
        </HStack>
        <HStack spacing="0.2rem">
          <Icon as={FiTwitter} />
          <Text fontSize="0.75rem">@skiza_game</Text>
        </HStack>
        <HStack spacing="0.2rem">
          <Icon as={FiInstagram} />
          <Text fontSize="0.75rem">@skiza_game</Text>
        </HStack>
        <HStack spacing="0.2rem">
          <Icon as={FiFacebook} />
          <Text fontSize="0.75rem">Skiza Game</Text>
        </HStack>
      </HStack>
    </Box>
  );
}
