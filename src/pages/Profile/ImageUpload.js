import React, { useRef, useState } from "react";
import { Image } from "cloudinary-react";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import styles from "./profile.module.css";

const ImageUpload = ({ avatarURL, setAvatarUrl }) => {
  // const [image, setImage] = useState(null);
  // const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  // const [preview, setPreview] = useState(null);

  const uploadImage = async (event) => {
    setLoading(true);
    const data = new FormData();
    data.append("file", event.target.files[0]);
    data.append("upload_preset", "avatar");
    data.append("cloud_name", "dwfusbo07");
    data.append("folder", "Cloudinary-React");

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/dwfusbo07/image/upload`, {
        method: "POST",
        body: data,
      });
      const res = await response.json();
      console.log(res);
      setAvatarUrl(res.url);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  const handleImageChange = (event) => {
    // const file = event.target.files[0];
    // setImage(file);
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = () => {
    //   setPreview(reader.result);
    // };
  };

  return (
    <div>
      <input id="hidden-input" type="file" className={styles.hidden} onChange={uploadImage} accept="image/*" ref={inputRef} />
      <div className={styles.camera}>
        <CameraAltOutlinedIcon className={styles.cameraIcon} onClick={() => inputRef.current.click()} />
      </div>

      {/* <div className="flex justify-center items-center mt-5 mx-3 max-w-xs">
            {preview && <img src={preview} alt="preview" className="w-full" />}
          </div> */}

      {/* <button
            onClick={uploadImage}
            className="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none disabled:cursor-not-allowed"
            disabled={!image}
          >
            Upload now
          </button> */}
      {/* <button
            onClick={handleResetClick}
            className="rounded-sm px-3 py-1 bg-red-700 hover:bg-red-500 text-white focus:shadow-outline focus:outline-none"
          >
            Reset
          </button> */}

      {loading && (
        <div>
          <span>Processing...</span>
        </div>
      )}
      {/* {avatarURL && (
          <div className={styles.userImage}>
            {
              <img
                src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp"
                alt="userImage"
              />
            }
            <img src={avatarURL} alt="userImage" />
          </div>
        )} */}
    </div>
  );
};

export default ImageUpload;
