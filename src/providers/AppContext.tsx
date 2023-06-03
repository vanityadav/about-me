"use client";

import reducer from "./reducer";
import initialState from "./initialState";
import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";
import { Actions, State } from "./contextTypes";

const StateContext = createContext<State>(initialState);
const DispatchContext = createContext<Dispatch<Actions>>(({}: Actions) => {});

type Props = { children: ReactNode };

export default function AppContext({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export const useAppState = () => useContext(StateContext);
export const useDispatch = () => useContext(DispatchContext);
