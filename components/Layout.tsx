import React, { ReactNode, Fragment } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <Fragment>
    <Header />
    <main>{props.children}</main>
  </Fragment>
);

export default Layout;
