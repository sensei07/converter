import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.notfound__inner}>
          <h1>
            Нічого не знайдено
          </h1>
          <p className={styles.description}>Нажаль, дана сторінка відстуня.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundBlock;
