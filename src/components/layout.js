import React from "react";
import '../styles/layout.css'
import Header from "./Header"
import { ChakraProvider } from "@chakra-ui/react";


export default function Layout({ children }) {
  return (
    <>
     <ChakraProvider>
            <Header />
    
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
        {children}
      </div>
      </ChakraProvider>
      </>
  )
}
