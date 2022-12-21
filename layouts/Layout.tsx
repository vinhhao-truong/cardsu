import React from "react";
import ReactProps from "../interfaces/react-props/ReactProps";
import { getClasses, getStyles } from "../utils/getProps";
import Navigation from "./Navigation";
import PageContainer from "./PageContainer";

const Layout: React.FC<ReactProps> = ({ className, style, children }) => {
  return (
    <div className={`${getClasses(className)}`} style={getStyles(style)}>
      <Navigation />
      <PageContainer>{children}</PageContainer>
    </div>
  );
};

export default Layout;
