import React from "react";

import styles from "./user.module.scss";

class User extends React.Component {
  render = () => {
    const rnd = Math.floor(Math.random() * Math.floor(2));
    return (
      <div className={`${styles.user} ${rnd?styles["user--spotlight"] : ""}`}>
        <img src={this.props.avatar} className={styles.avatar} alt="" />
        <div className={styles.description}>
          <h2 className={styles.username}>{this.props.username}</h2>
          <p className={styles.excerpt}>{this.props.excerpt}</p>
        </div>
      </div>
    );
  }
};

export default User;