import { createContext, useReducer, useState } from "react";
import { PostReducer, InitialState } from "../Reducers/FilterReducer";
import { InitialUserState, UserReducer } from "../Reducers/UserReducer";
import { BookReducer, InitialBookState } from "../Reducers/BookMarkReducer";

import { toast } from "react-toastify";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PostReducer, InitialState);
  const [userState, dispatchUser] = useReducer(UserReducer, InitialUserState);
  const [bookState, dispatchBook] = useReducer(BookReducer, InitialBookState);

  const [loader, setLoader] = useState(true);

  const [AppDevice, setAppDevice] = useState(0);

  const customToast = (text, type) => {
    switch (type) {
      case "SUCCESS": {
        toast.success(text, {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
        break;
      }
      case "ERROR": {
        toast.error(text, {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
        break;
      }
      case "WARNING": {
        toast.warning(text, {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
        break;
      }

      default:
        return null;
    }
  };

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        userState,
        dispatchUser,
        bookState,
        dispatchBook,
        AppDevice,
        setAppDevice,
        loader,
        setLoader,
        customToast,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
