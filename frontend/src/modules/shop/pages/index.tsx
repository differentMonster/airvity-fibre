import React from 'react';

// Styles
import styles from '../../../scss/pages/shop.module.scss';

export default function Shop() {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <h1>Shop Page</h1>
        <div className="container p-3">
          <button className="btn btn-primary m-3">KindaCode.com</button>
          <button className="btn btn-warning m-3">Hello</button>
        </div>
      </div>
    </React.Fragment>
  );
}
