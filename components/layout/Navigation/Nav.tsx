import styles from "./Nav.module.css";

const Nav = ({ themeStyles, children }) => {
  return(
    <nav style={themeStyles} className={styles['main-navigation']}>
      <div className={styles.container}>
        { children }
      </div>
    </nav>
  )
}

export default Nav;
