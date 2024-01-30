import { FC, useState } from "react";
import Photo from "../../images/default-image.png";
import styles from "./image.module.css";

export interface IImage {
    url: string;
    id:string;
    onClickAdd?: (id:string) => void;
    onClickDelete?: (id:string) => void;
}

const Image: FC<IImage> = ({url, id, onClickAdd, onClickDelete}) => {
    const [like, setLike] = useState<boolean>(false);

    const styleAll = (like) ? `${styles.like } ${styles.like_active}` : styles.like;

    const handleElementLike = () => {
        setLike(!like);
        (like) ? onClickDelete!(id) 
        : onClickAdd!(id);
    }

  return (
    <div className={styles.container}>
      <img src={url || Photo}
        alt="Изображение кота"
        className={styles.image}
        />
        <button className={styleAll} onClick={handleElementLike} type="button"></button>
    </div>
  );
};

export default Image;