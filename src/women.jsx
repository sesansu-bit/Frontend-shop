import styles from "./women.module.css";
import Eachmen from "./eachmen.jsx";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Women = () => {
  const items = useSelector((store) => store.womenitem);

  const ITEMS_PER_PAGE = 8;
  const [page, setPage] = useState(0);

  const startIndex = page * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const visibleItems = items.slice(startIndex, endIndex);

  const handleNext = () => {
    if (endIndex < items.length) {
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  return (
    <>
      <div className={styles["womencontainer"]}>
        {visibleItems.map((item) => (
          <Eachmen key={item.id} item={item} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className={styles["paginationControls"]}>
        <button 
          onClick={handlePrev} 
          disabled={page === 0}
          className={styles["btn"]}
        >
          Previous
        </button>

        <span className={styles["pageNumber"]}>
          Page {page + 1} / {Math.ceil(items.length / ITEMS_PER_PAGE)}
        </span>

        <button 
          onClick={handleNext} 
          disabled={endIndex >= items.length}
          className={styles["btn"]}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Women;
