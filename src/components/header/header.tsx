import { FC, useState } from "react";
import styles from "./header.module.css";

export interface IHeader {
    favourite: boolean;
    onClick: ()=>void;
    onClickFavourite: ()=>void;
}

const Header: FC<IHeader> = ({favourite, onClick, onClickFavourite}) => {


  return (
    <section className={styles.header}>
      <nav className={styles.nav}>
        <button className={styles.button} onClick={onClick} disabled={favourite}>
          Все котики
        </button>
        <button
          className={styles.button}
          onClick={onClickFavourite}
          disabled={!favourite}
        >
          Любимые котики
        </button>
      </nav>
    </section>
  );
};

export default Header;
