import { createContext, useReducer, useState } from "react";
import { PostReducer, InitialState } from "../Reducers/FilterReducer";
import { InitialUserState, UserReducer } from "../Reducers/UserReducer";
import { BookReducer, InitialBookState } from "../Reducers/BookMarkReducer";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PostReducer, InitialState);
  const [userState, dispatchUser] = useReducer(UserReducer, InitialUserState);
  const [bookState, dispatchBook] = useReducer(BookReducer, InitialBookState);

  const [loader, setLoader] = useState(true);

  const [AppDevice, setAppDevice] = useState(0);

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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
