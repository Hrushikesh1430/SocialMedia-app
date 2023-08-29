import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";

import styles from "./postInput.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { DataContext } from "../../Context/DataContext";
import dayjs from "dayjs";
import { CustomLoader } from "../CustomLoader/CustomLoader";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const PostInput = ({ isEdit, postInfo, setModal }) => {
  const { state, dispatch, customToast, loader } = useContext(DataContext);
  const [showEmojis, setShowEmojis] = useState(false);
  const { userToken, user } = useContext(AuthContext);

  const emojiPickerRef = useRef(null);

  useEffect(() => {
    if (isEdit) {
      onChangeText(postInfo.content);
    }
  }, []);

  const [postContent, setPostContent] = useState({
    text: {
      value: "",
    },
  });

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setPostContent((postContent) => ({ ...postContent, text: { ...postContent.text, value: postContent.text.value + emoji } }));
  };

  const onChangeText = (value) => {
    setPostContent((postContent) => ({ ...postContent, text: { ...postContent.text, value: value } }));
  };

  const postTweet = async (e, id = null) => {
    e.preventDefault();
    const post = {
      content: postContent.text.value,
      mainName: `${user.firstName} ${user.lastName}`,
      createdAt: isEdit ? postInfo.createdAt : `${dayjs().toJSON()}`,
    };
    const url = isEdit ? `/api/posts/edit/${id}` : `/api/posts`;
    const config = {
      method: "POST",
      headers: {
        authorization: userToken,
      },
      body: JSON.stringify({ postData: post }),
    };
    try {
      const response = await fetch(url, config);
      const data = await response.json();

      dispatch({ type: "CREATE_POST", payLoad: data.posts });
      isEdit ? customToast("Post Edited", "SUCCESS") : customToast("Post successfully created", "SUCCESS");
    } catch (e) {
    } finally {
      setModal(false);
      // setWishButtonDisabled(false);
    }
  };

  return (
    <>
      <textarea placeholder="What is happening?" value={postContent.text.value} onChange={(e) => onChangeText(e.target.value)}></textarea>
      <div className={styles.uploadOptions}>
        <div className={styles.photoContainer}>
          {/* <AddPhotoAlternateOutlinedIcon className={styles.addPhoto} /> */}
          <EmojiEmotionsOutlinedIcon className={styles.emoji} onClick={() => setShowEmojis((showEmojis) => !showEmojis)} />
          {showEmojis && (
            <div className={styles.pickerContainer} ref={emojiPickerRef}>
              <Picker data={data} onEmojiSelect={addEmoji} />
            </div>
          )}
        </div>
        <div className={styles.postButton}>
          <button
            className={`${styles.post} ${postContent.text.value === "" && styles.disable}`}
            onClick={(e) => (isEdit ? postTweet(e, postInfo.id) : postTweet(e))}
          >
            {isEdit ? "Edit" : "Post"}
          </button>
        </div>
      </div>
    </>
  );
};

export default PostInput;
