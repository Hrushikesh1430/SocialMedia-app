import { useContext, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import Post from "../Post/Post";

const PostList = () => {
  const { state } = useContext(DataContext);
  const [dropDownId, setDropDownId] = useState(null);

  return (
    <div>
      {state.filteredPosts.map((item) => (
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
