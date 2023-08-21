import { useContext } from "react";
import MainContainer from "../../Components/MainContainer/MainContainer";
import PostList from "../../Components/PostList/PostList";

import styles from "./bookmarks.module.css";
import { DataContext } from "../../Context/DataContext";
import LogoX from "../../Components/LogoX/LogoX";

const BookMarks = () => {
  const { bookState } = useContext(DataContext);
  const BookMarkWrapper = () => {
    return (
      <div className={styles.bookMarkWrapper}>
        <div className={styles.pageTitle}>Bookmarks</div>
        {bookState.bookmarks.length > 0 ? (
          <PostList type="bookmarks" />
        ) : (
          <>
            <div className={styles.notFound}>
              <span>You have not bookmarked any post yet.</span>
              <LogoX className={styles.bookmarkLogo} />
            </div>
          </>
        )}
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
