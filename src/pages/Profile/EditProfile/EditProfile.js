import styles from "./editProfile.module.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { v4 as uuid } from "uuid";

import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/AuthContext";

export const EditProfile = (props) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: {
      value: "",
      error: "",
    },
    bio: {
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
  };

  const submitLoginHandler = async (e) => {
    e.preventDefault();
    let validationError = false;
    const { name, bio } = formValues;

    errorCheck("name", name.value);

    validationError = name.value === "" ? true : false;

    const errorFor = (validationError) => {
      if (validationError === true) {
        return validationError;
      }
      for (const key in formValues) {
        if (formValues[key].error !== "") {
          validationError = true;
          break;
        }
      }
      return validationError;
    };

    if (!errorFor(validationError)) {
      const data = {};
      const url = "/api/auth/login";
      const config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      try {
        const response = await fetch(url, config);
        const data = await response.json();
      } catch (error) {
      } finally {
      }
    }
  };

  useEffect(() => {}, []);

  // props.setAddressModal(false);

  return (
    <>
      <div className={styles.editProfileParent}>
        <span className={styles.editProfileTitle}>Edit Profile</span>
        <form onSubmit={submitLoginHandler}>
          <div className={styles.formWrapper}>
            <div className={styles.nameWrapper}>
              <input
                type="name"
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
                placeholder="Name"
              />
              {formValues.name.error !== "" && <span className={styles.warning}>{formValues.name.error}</span>}
            </div>
            <div className={styles.bioWrapper}>
              <input
                type="bio"
                className={`${styles.bio} ${formValues.bio.error !== "" && styles.error}`}
                id="bio"
                name="bio"
                onChange={(e) => {
                  setFormValues((formValues) => ({
                    ...formValues,
                    bio: { ...formValues.bio, value: e.target.value },
                  }));
                }}
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
