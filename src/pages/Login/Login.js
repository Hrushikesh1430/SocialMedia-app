import { useState, useEffect, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { AuthContext } from "../..";

import styles from "./login.module.css";
import { regexCheck } from "../../Common/Utility";

import { toast } from "react-toastify";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import LogoX from "../../Components/LogoX/LogoX";

const Login = () => {
  const navigate = useNavigate();

  const { isloggedIn, setUserToken, setIsLoggedIn, setUser } = useContext(AuthContext);
  const location = useLocation();

  const [passwordType, setPasswordType] = useState("password");

  const [formValues, setFormValues] = useState({
    username: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
  });
  const changeVisibility = () => {
    if (passwordType === "text") {
      setPasswordType("password");
    } else {
      setPasswordType("text");
    }
  };
  const errorCheck = (fieldName, value) => {
    if (fieldName === "username") {
      if (value === "") {
        setFormValues((formValues) => ({
          ...formValues,
          username: {
            ...formValues.username,
            error: "Username cannot be empty",
          },
        }));
      } else {
        setFormValues((formValues) => ({
          ...formValues,
          username: {
            ...formValues.username,
            error: "",
          },
        }));
      }
    }
    if (fieldName === "password") {
      if (value === "") {
        setFormValues((formValues) => ({
          ...formValues,
          password: {
            ...formValues.password,
            error: "Password cannot be empty",
          },
        }));
      } else {
        setFormValues((formValues) => ({
          ...formValues,
          password: {
            ...formValues.password,
            error: "",
          },
        }));
      }
    }
  };

  const submitLoginHandler = async (e) => {
    e.preventDefault();
    let validationError = false;
    const { username, password } = formValues;

    errorCheck("username", username.value);
    errorCheck("password", password.value);

    validationError = username.value === "" || password.value === "" ? true : false;

    const errorFor = (validationError) => {
      for (const key in formValues) {
        if (formValues[key].error !== "") {
          validationError = true;
          break;
        }
      }
      return validationError;
    };
    if (!errorFor(validationError)) {
      const data = {
        username: username.value,
        password: password.value,
      };

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
        const { errors, encodedToken, foundUser } = data;
        console.log(errors);

        if (!errors) {
          localStorage.setItem("userToken", encodedToken);
          localStorage.setItem("loggedUser", JSON.stringify(foundUser));
          setUserToken(encodedToken);
          setIsLoggedIn(true);
          setUser(foundUser);

          toast.success("Successfully logged In", {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
          navigate(location?.state?.from?.pathname);
        } else {
          setFormValues((formValues) => ({
            ...formValues,
            password: {
              ...formValues.password,
              error: "Credentials not valid. Please try again",
            },
          }));
          toast.error(`These credentials do not match our records. Please try again`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
      } catch (error) {
      } finally {
      }
    }
  };

  // Redirect to userdetails if logged in
  if (isloggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <div className={styles.loginParent}>
        <LogoX />
        <div className={styles.loginRight}>
          <span className={styles.loginTopText}>Happening Now</span>
          <div className={styles.login}>
            <span className={styles.join}>Login to witness the modern era.</span>

            <form onSubmit={submitLoginHandler}>
              <div className={styles.formWrapper}>
                <div className={styles.usernameWrapper}>
                  <input
                    type="username"
                    className={`${styles.username} ${formValues.username.error !== "" && styles.error}`}
                    id="signupusername"
                    name="username"
                    onChange={(e) => {
                      setFormValues((formValues) => ({
                        ...formValues,
                        username: { ...formValues.username, value: e.target.value },
                      }));
                      errorCheck("username", e.target.value);
                    }}
                    placeholder="Phone,email or Username"
                  />
                  {formValues.username.error !== "" && <span className={styles.warning}>{formValues.username.error}</span>}
                </div>

                <div className={styles.passwordWrapper}>
                  <input
                    type={passwordType}
                    className={`${styles.password} ${formValues.password.error !== "" && styles.error}`}
                    id="signupassword"
                    name="password"
                    onChange={(e) => {
                      setFormValues((formValues) => ({
                        ...formValues,
                        password: { ...formValues.password, value: e.target.value },
                      }));
                      errorCheck("password", e.target.value);
                    }}
                    placeholder="Password"
                  />
                  <RemoveRedEyeOutlinedIcon className={styles.eye} onClick={() => changeVisibility()} />
                </div>
                {formValues.password.error !== "" && <span className={styles.warning}>{formValues.password.error}</span>}
              </div>

              <button type="submit" className={styles.signIn}>
                Sign in
              </button>
              <div className={styles.orTextWrapper}>
                <div className={styles.line}></div>
                <span className={styles.orText}>or</span>
                <div className={styles.line}></div>
              </div>
            </form>
          </div>
          <button className={styles.create} onClick={() => navigate("/signup")}>
            Create Account
          </button>
          <span className={styles.tnc}>
            By signing up, you agree to the <span className={styles.blue}>Terms of Service</span> and
            <span className={styles.blue}> Privacy Policy</span> including <span className={styles.blue}>Cookie Use.</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
