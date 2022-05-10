import styles from "./Nav.module.css";

const Nav = ({ children }) => {
  return(
    <nav className={styles['main-navigation']}>
      <div className={styles.container}>
        { children }
      </div>
    </nav>
  )
}

export default Nav;
