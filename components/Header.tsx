import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';

import Nav from "../components/layout/Navigation/Nav";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession();

  let left = (
    <div className={styles.left}>
      <Link href="/">
        <a data-active={isActive('/')}>
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
          <a data-active={isActive('/')}>
            Home
          </a>
        </Link>
      </div>
    );
    right = (
      <div className={styles.right}>
        <p>Validating session ...</p>
      </div>
    );
  }

  if (!session) {
    right = (
      <div className={styles.right}>
        <Link href="/api/auth/signin">
          <a data-active={isActive('/signup')}>Log in</a>
        </Link>
      </div>
    );
  }

  if (session) {
    left = (
      <div className={styles.left}>
        <Link href="/">
          <a data-active={isActive('/')}>
            Home
          </a>
        </Link>
        <Link href="/trips">
          <a data-active={isActive('/trips')}>Trips</a>
        </Link>
        <Link href="/wish-list">
          <a data-active={isActive('/wish-list')}>Wishlist</a>
        </Link>
      </div>
    );
    right = (
      <div className={styles.right}>
        <p>{session.user.name}</p>
        <button onClick={() => signOut()}>Log out</button>
      </div>
    );
  }

  return (
    <Nav>
      {left}
      {right}
    </Nav>
  );
};

export default Header;
