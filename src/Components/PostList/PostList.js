import { useContext, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import Post from "../Post/Post";

const PostList = ({ type, posts }) => {
  const { state, bookState } = useContext(DataContext);
  const [dropDownId, setDropDownId] = useState(null);

  const postList = type === "bookmarks" ? bookState.bookmarks : type === "liked" ? posts : type === "self" ? posts : state.filteredPosts;

  return (
    <div>
      {postList.map((item) => (
        <Post
          content={item.content}
          username={item.username}
          mainName={item.mainName}
          id={item._id}
          likes={item.likes}
          setDropDownId={setDropDownId}
          dropDownId={dropDownId}
        />
      ))}
    </div>
  );
};

export default PostList;
