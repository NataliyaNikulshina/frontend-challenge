import { FC, useState, useEffect } from "react";
import styles from "./table.module.css";
import Unpacker from "../unpacker/unpacker";
import Image from "../image/image";
import { getAllImages } from "../../api/api";


export interface ITableAll {
  favourite: boolean;
}

export interface IdataImages {
  height: number;
  id: string;
  url: string;
  width: number;
}

const TableAll: FC<ITableAll> = ({favourite}) => {
  const [dataImages, setDataImages] = useState<IdataImages[]>([]);
  const [dataFavImages, setDataFavImages] = useState<IdataImages[]>([]);

  useEffect(() => {
    getAllImages()
    .then((data) => {
        if (dataImages !== data) {
             console.log(data);
           setDataImages(data);
        }
      })
      .catch((err) => console.log("ошибка" + err));
  }, [])


  const onClick = (e: any) => {
    alert("еще");
  };

  const handleAddLikeImage = (id:string) => {
    const fav = dataImages.filter((el) => el.id===id)
    const all = [...dataFavImages, ...fav];
    setDataFavImages(all);
  }

  const handleDeleteLikeImage = (id:string) => {
    setDataFavImages(dataFavImages.filter((el) => el.id!==id));
  }

  return (
    <section className={styles.container}>
      {favourite===true 
      ? (<><div className={styles.table}>
      <ul className={styles.list}>
        {dataImages
          ? dataImages.map((el) => (
              <Unpacker key={el.id}>
                <Image url={el.url} id={el.id} onClickAdd={handleAddLikeImage} onClickDelete={handleDeleteLikeImage} />
              </Unpacker>
            ))
          : "У вас нет котиков"}
      </ul>
    </div>
    <button className={styles.button} onClick={onClick}>
      ... загружаем еще котиков ...
    </button></>)
      : (<div className={styles.table}>
        <ul className={styles.list}>
          {dataFavImages
            ? dataFavImages.map((el) => (
                <Unpacker key={el.id}>
                  <Image url={el.url} id={el.id} onClickAdd={handleAddLikeImage} onClickDelete={handleDeleteLikeImage} />
                </Unpacker>
              ))
            : "У вас нет любимых котиков"}
        </ul>
      </div>)
      }
      
    </section>
  );
};

export default TableAll;
