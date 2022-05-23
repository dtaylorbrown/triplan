import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';

import Nav from "../layout/Navigation/Nav";
import styles from "./Header.module.css";
import { ThemeContext } from '../context/theme-context';

const Header: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession();

  // TODO - components for links for theme...

  let left = (
    <div className={styles.left}>
      <Link href="/">
        <a data-active={isActive('/')} style={{ color: theme.foreground }}>
          Home
        </a>
      </Link>
    </div>
  );

  let right = null;

  if (status === 'loading') {
    left = (
      <div className={styles.left}>
        <Link href="/" data-active={isActive('/')}>
          <a data-active={isActive('/')} style={{ color: theme.foreground }}>
            Home
          </a>
        </Link>
      </div>
    );
    right = (
      <div className={styles.right}>
        <p style={{ color: theme.foreground }}>Validating session ...</p>
      </div>
    );
  }

  if (!session) {
    right = (
      <div className={styles.right}>
        <Link href="/api/auth/signin">
          <a data-active={isActive('/signup')} style={{ color: theme.foreground }}>Log in</a>
        </Link>
      </div>
    );
  }

  if (session) {
    left = (
      <div className={styles.left}>
        <Link href="/">
          <a data-active={isActive('/')} style={{ color: theme.foreground }}>
            Home
          </a>
        </Link>
        <Link href="/trips">
          <a data-active={isActive('/trips')} style={{ color: theme.foreground }}>Trips</a>
        </Link>
        <Link href="/wish-list">
          <a data-active={isActive('/wish-list')} style={{ color: theme.foreground }}>Wishlist</a>
        </Link>
      </div>
    );
    right = (
      <div className={styles.right}>
        <p>{session.user.name}</p>
        <button onClick={() => signOut()} style={{ color: theme.foreground }}>Log out</button>
      </div>
    );
  }

  return (
    <Nav themeStyles={{ backgroundColor: theme.background, color: theme.foreground, borderBottom: `2px solid ${theme.foreground}` }}>
      {left}
      {right}
    </Nav>
  );
};

export default Header;
