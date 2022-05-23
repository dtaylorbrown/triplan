import React, { ReactNode, Fragment, useContext } from "react";
import { ThemeContext } from "./context/theme-context";
import Header from "./Header/Header";

import styles from "./Layout.module.css";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {

  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Fragment>
      <Header />
      <main className={styles.layout}>{props.children}</main>
      {/* TODO - replace with actual toggle */}
      <footer>
        <button onClick={() => { toggleTheme() }}>theme switch</button>
      </footer>
    </Fragment>
  )
}

export default Layout;
