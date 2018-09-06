import React from "react";
import { Link } from "gatsby";

import styles from "./layout.module.scss";
console.log(styles);

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default ({ children }) => (
  <div className={styles.layout}>
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        <h3 className={styles.logo}>MySweetSite</h3>
      </Link>
      <ul className={styles.nav}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children}
  </div>
);