import React from "react";
import styles from "./Home.module.scss";

import Converter from "../../components/Сonverter";

const Home = () => {
  return (
    <section className={styles.home}>
      <div className="container">
        <div className={styles.home__inner}>
          <h1 className={styles.home__title}>Конвертер валют</h1>
          <Converter />
        </div>
      </div>
    </section>
  );
};

export default Home;
