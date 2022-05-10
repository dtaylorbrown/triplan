import styles from "./Nav.module.css";

const Nav = ({ children }) => {
  return(
    <nav className={styles['main-navigation']}>{ children }</nav>
  )
}

export default Nav;
