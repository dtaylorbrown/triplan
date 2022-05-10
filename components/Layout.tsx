import React, { ReactNode, Fragment } from "react";
import Header from "./Header";

import styles from "./Layout.module.css";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <Fragment>
    <Header />
    <main className={styles.layout}>{props.children}</main>
  </Fragment>
);

export default Layout;
