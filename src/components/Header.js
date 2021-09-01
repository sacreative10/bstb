import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Spacer } from "@chakra-ui/layout";
import logo from '../assets/download.png'


const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());


  return (
      
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="purple"
      color="white"
      {...props}
    >
        <Flex align="center" mr={5}>
            <img src={logo} alt="school logo" style={{position: "absolute", maxHeight:"45%", maxWidth:"44px"}}/>
        </Flex>
        <Spacer />
        <Spacer />
        
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"} alignContent="center">
          St Bartholomews
        </Heading>
      </Flex>
      <Spacer />

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="right"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Text>Home</Text>
        <Text>Our School</Text>
        <Text>Bartholonews</Text>
        <Text>News</Text>
        <Text>Letters</Text>
      </Stack>
    </Flex>
  );
};

export default Header;
