import { useContext, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import Post from "../Post/Post";
import { CustomLoader } from "../CustomLoader/CustomLoader";
import styles from "./postlist.module.css";

const PostList = ({ type, posts }) => {
  const { state, bookState, loader } = useContext(DataContext);
  const [dropDownId, setDropDownId] = useState(null);

  // const postList = type === "bookmarks" ? posts : type === "liked" ? posts : type === "self" ? posts : state.filteredPosts;

  return (
    <div className={styles.postListParent}>
      {loader ? (
        <CustomLoader width={30} height={30} loading={loader} className={styles.loaderStyle} />
      ) : (
        posts.map((item) => (
          <Post
            content={item.content}
            username={item.username}
            mainName={item.mainName}
            id={item._id}
            likes={item.likes}
            setDropDownId={setDropDownId}
            createdAt={item.createdAt}
            dropDownId={dropDownId}
          />
        ))
      )}
    </div>
  );
};

export default PostList;
