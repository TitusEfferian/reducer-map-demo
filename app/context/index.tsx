"use client";
import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";
import { reducer } from "./reducer";
import { ACTIONTYPE, InitialState } from "./types";

const EditDispatch = createContext<Dispatch<ACTIONTYPE>>(() => {});
const EditValue = createContext<InitialState>({
  select: new Map(),
});

interface AppProps {
  children: ReactNode;
}

const select = new Map();
for (let a = 0; a < 10; a++) {
  for (let b = 0; b < 10; b++) {
    select.set(`col-${b}-username-${a}`, false);
  }
}

const EditProvider = ({ children }: AppProps) => {
  const [state, dispatch] = useReducer(reducer, {
    select: select,
  });
  return (
    <EditDispatch.Provider value={dispatch}>
      <EditValue.Provider value={state}>{children}</EditValue.Provider>
    </EditDispatch.Provider>
  );
};

const useEdit = () => useContext(EditValue);
const useEditDispatch = () => useContext(EditDispatch);

export default EditProvider;

export { useEdit, useEditDispatch };
