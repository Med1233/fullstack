import { Inter } from 'next/font/google';

import './globals.css';
import styles from './layout.module.css';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element => (
  <html lang="en">
    <body className={`${inter.className} ${styles.body}`}>
      <nav className={styles.navbar}>navber</nav>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>footer</footer>
    </body>
  </html>
);

export default Layout;
