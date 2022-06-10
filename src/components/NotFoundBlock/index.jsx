import React from 'react';

import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕🤑😘</span>
        <br/>
        Ничего не найдено
      </h1>
      <p className={styles.descr}>К сожалению данной страницы нету на нашем сайте.</p>
    </div>
  )
}

export default NotFoundBlock;
