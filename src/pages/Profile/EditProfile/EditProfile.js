import styles from "./editProfile.module.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { v4 as uuid } from "uuid";

import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/AuthContext";
import { ProtectedRoutes } from "../../../Components/ProtectedRoutes/ProtectedRoutes";
import { DataContext } from "../../../Context/DataContext";
import ImageUpload from "../ImageUpload";

export const EditProfile = ({ isEdit, profileInfo, setEditModal }) => {
  const { user, userToken, setUser } = useContext(AuthContext);
  const { dispatchUser } = useContext(DataContext);

  const [avatarURL, setAvatarUrl] = useState("");
  const { imageURL, setImageURL } = useState(profileInfo.avatarURL);
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: {
      value: "",
      error: "",
    },
    lastName: {
      value: "",
      error: "",
    },
    profileURL: {
      value: "",
      error: "",
    },
    bio: {
      value: "",
      error: "",
    },
    avatarURL: {
      value: "",
      error: "",
    },
  });

  const errorCheck = (fieldName, value) => {
    if (fieldName === "name") {
      if (value === "") {
        setFormValues((formValues) => ({
          ...formValues,
          name: {
            ...formValues.name,
            error: "Name cannot be empty",
          },
        }));
      } else {
        setFormValues((formValues) => ({
          ...formValues,
          name: {
            ...formValues.name,
            error: "",
          },
        }));
      }
    }
    if (fieldName === "lastName") {
      if (value === "") {
        setFormValues((formValues) => ({
          ...formValues,
          lastName: {
            ...formValues.lastName,
            error: "Lastname cannot be empty",
          },
        }));
      } else {
        setFormValues((formValues) => ({
          ...formValues,
          lastName: {
            ...formValues.lastName,
            error: "",
          },
        }));
      }
    }
  };
  const getUsersAPI = async () => {
    try {
      const response = await fetch("/api/users");
      const data = await response.json();
      dispatchUser({ type: "FETCH_USERS", payLoad: data.users });

      console.log("getusers", data);
    } catch (e) {
    } finally {
      // HideLoader();
    }
  };

  const submitLoginHandler = async (e) => {
    e.preventDefault();
    let validationError = false;
    const { name, lastName, bio, profileURL } = formValues;

    // errorCheck("name", name.value);
    // errorCheck("lastName", lastName.value);

    // validationError = name.value === "" || lastName.value === "" ? true : false;

    // const errorFor = (validationError) => {
    //   if (validationError === true) {
    //     return validationError;
    //   }
    //   for (const key in formValues) {
    //     if (formValues[key].error !== "") {
    //       validationError = true;
    //       break;
    //     }
    //   }
    //   return validationError;
    // };

    if (!validationError) {
      const data = {
        userData: {
          ...profileInfo,
          // firstName: name.value,
          // lastName: lastName.value,
          bio: bio.value,
          profileURL: profileURL.value,
          avatarURL: avatarURL,
        },
      };

      const url = "/api/users/edit";
      const config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",

          authorization: userToken,
        },
        body: JSON.stringify(data),
      };

      try {
        const response = await fetch(url, config);
        const data = await response.json();

        console.log("edit", data);
        setUser(data.user);
        setEditModal(false);
      } catch (error) {
      } finally {
        getUsersAPI();
      }
    }
  };

  const setEditValues = () => {
    setAvatarUrl(profileInfo.avatarURL);
    setFormValues((formValues) => ({
      ...formValues,
      name: {
        ...formValues.name,
        value: profileInfo.firstName,
      },
      lastName: {
        ...formValues.lastName,
        value: profileInfo.lastName,
      },
      bio: {
        ...formValues.bio,
        value: profileInfo.bio,
      },
      profileURL: {
        ...formValues.profileURL,
        value: profileInfo.profileURL,
      },
      avatarURL: {
        ...formValues.avatarURL,
        value: profileInfo.avatarURL,
      },
    }));
  };

  useEffect(() => {
    isEdit && setEditValues();
  }, []);

  // props.setAddressModal(false);

  return (
    <>
      <div className={styles.editProfileParent}>
        <span className={styles.editProfileTitle}>Edit Profile</span>
        <form onSubmit={submitLoginHandler}>
          <div className={styles.formWrapper}>
            <div className={styles.userWrapper}>
              <div className={styles.userImage}>
                <img src={avatarURL} alt="userImage" />
                <ImageUpload avatarURL={avatarURL} setAvatarUrl={setAvatarUrl} />
              </div>
            </div>

            {/* <div className={styles.nameWrapper}>
              <input
                type="text"
                className={`${styles.name} ${formValues.name.error !== "" && styles.error}`}
                id="name"
                name="name"
                onChange={(e) => {
                  setFormValues((formValues) => ({
                    ...formValues,
                    name: { ...formValues.name, value: e.target.value },
                  }));
                  errorCheck("name", e.target.value);
                }}
                value={formValues.name.value}
                placeholder="Name"
              />
              {formValues.name.error !== "" && <span className={styles.warning}>{formValues.name.error}</span>}
            </div> */}
            {/* <div className={styles.nameWrapper}>
              <input
                type="text"
                className={`${styles.name} ${formValues.lastName.error !== "" && styles.error}`}
                id="lastName"
                name="lastName"
                onChange={(e) => {
                  setFormValues((formValues) => ({
                    ...formValues,
                    lastName: { ...formValues.lastName, value: e.target.value },
                  }));
                  errorCheck("lastName", e.target.value);
                }}
                value={formValues.lastName.value}
                placeholder="Last Name"
              />
              {formValues.lastName.error !== "" && <span className={styles.warning}>{formValues.lastName.error}</span>}
            </div> */}
            <div className={styles.nameWrapper}>
              <input
                type="text"
                className={`${styles.name} ${formValues.profileURL.error !== "" && styles.error}`}
                id="profileURL"
                name="profileURL"
                onChange={(e) => {
                  setFormValues((formValues) => ({
                    ...formValues,
                    profileURL: { ...formValues.profileURL, value: e.target.value },
                  }));
                  errorCheck("profileURL", e.target.value);
                }}
                value={formValues.profileURL.value}
                placeholder="Portfolio URL"
              />
              {formValues.profileURL.error !== "" && <span className={styles.warning}>{formValues.profileURL.error}</span>}
            </div>
            <div className={styles.bioWrapper}>
              <input
                type="text"
                className={`${styles.bio} ${formValues.bio.error !== "" && styles.error}`}
                id="bio"
                name="bio"
                onChange={(e) => {
                  setFormValues((formValues) => ({
                    ...formValues,
                    bio: { ...formValues.bio, value: e.target.value },
                  }));
                }}
                value={formValues.bio.value}
                placeholder="Bio"
              />
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.edit}>
              Edit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
