import { useEffect, useMemo, useState } from "react";
import styles from "./movieitem.css";
import { IoAdd, IoChevronDown, IoPlay, IoThumbsUp } from "react-icons/io5";
const imgUlr = "https://image.tmdb.org/t/p/w500";

const MovieItem = ({
  adult,
  poster_path,
  genre_ids,
  original_language,
  overview,
  popularity,
  title,
  release_date,
  vote_average,
  vote_count,
  id,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const timeWatched = useMemo(() => {
    return Math.floor(Math.random() * 11);
  }, []);

  useEffect(() => {
    if (id === 539972) {
      console.log({ isHovering });
    }
    console.log(isHovering);
  }, [isHovering, id]);
  return (
    <div
      className={styles.container}
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      <div
        className={styles.hover.container({ isHovering })}
        style={{ zIndex: id === 939243 ? 100 : undefined }}
      >
        <img
          src={`${imgUlr}${poster_path}`}
          alt={title}
          width={100}
          height={50}
          className={styles.hover.img}
        />
        <div className={styles.hover.wrap}>
          <div className={styles.hover.icons.wrap}>
            <ul className={styles.hover.icons.ul}>
              <li>
                <button className={styles.hover.play}>
                  <IoPlay />
                </button>
              </li>
              <li>
                <button className={styles.hover.icon}>
                  <IoAdd />
                </button>
              </li>
              <li>
                <button className={styles.hover.icon}>
                  <IoThumbsUp />
                </button>
              </li>
            </ul>
            <button className={styles.hover.icon}>
              <IoChevronDown />
            </button>
          </div>

          <div className={styles.hover.times}>
            <div className={styles.hover.div}>
              <span
                className={styles.hover.span}
                style={{ width: `${timeWatched * 10}%` }}
              ></span>
            </div>
            <p className={styles.hover.time}>영상길이</p>
          </div>
        </div>
      </div>
      <img
        src={`${imgUlr}${poster_path}`}
        alt={title}
        width={200}
        height={300}
      />
    </div>
  );
};

export default MovieItem;
