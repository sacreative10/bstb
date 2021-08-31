import React from "react"
import { Box, Flex } from '@chakra-ui/react'

export type WrapperVariant = "small"|"regular"
export type Height = "leave"|"extend"

interface WrapperProps {
  variant?: WrapperVariant;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Flex>
    <Box
      mt={8}
      mx="auto"
      maxW={variant === "regular" ? "1000px" : "400px"}
      height={32}
      w="100%"
    >
      {children}
    </Box>
    </Flex>
  );
};