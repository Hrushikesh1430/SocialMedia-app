import styles from "./editProfile.module.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { v4 as uuid } from "uuid";

import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/AuthContext";
import { ProtectedRoutes } from "../../../Components/ProtectedRoutes/ProtectedRoutes";

export const EditProfile = ({ isEdit, profileInfo, setEditModal }) => {
  const { user, userToken, setUser } = useContext(AuthContext);
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

  const submitLoginHandler = async (e) => {
    e.preventDefault();
    let validationError = false;
    const { name, lastName, bio } = formValues;

    errorCheck("name", name.value);
    errorCheck("lastName", name.value);

    validationError = name.value === "" || lastName.value === "" ? true : false;

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
      const data = { userData: { ...profileInfo, firstName: name.value, lastName: lastName.value, bio: bio.value } };
      console.log(data);
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

        console.log(data);
        setUser(data.user);
        setEditModal(false);
      } catch (error) {
      } finally {
      }
    }
  };

  const setEditValues = () => {
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
            <div className={styles.nameWrapper}>
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
            </div>
            <div className={styles.nameWrapper}>
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
