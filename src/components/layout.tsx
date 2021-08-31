import * as React from "react";
import { Height, Wrapper, WrapperVariant } from "./Wrapper";

interface LayoutProps {
  variant?: WrapperVariant;
}


export const Layout: React.FC<LayoutProps> = ({ children, variant}) => {
  return (
    <>
      <Wrapper variant={variant} >{children}</Wrapper>
    </>
  );
};