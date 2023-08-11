import MainContainer from "../../Components/MainContainer/MainContainer";

import styles from "./bookmarks.module.css";

const BookMarks = () => {
  const BookMarkWrapper = () => {
    return (
      <div className={styles.bookMarkWrapper}>
        <div className={styles.pageTitle}>Bookmarks</div>
      </div>
    );
  };
  return (
    <>
      <MainContainer component={<BookMarkWrapper />} />
    </>
  );
};

export default BookMarks;
