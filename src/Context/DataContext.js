import { createContext, useReducer, useState } from "react";
import { PostReducer, InitialState } from "../Reducers/FilterReducer";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PostReducer, InitialState);
  const [loader, setLoader] = useState(true);

  const [AppDevice, setAppDevice] = useState(0);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
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
