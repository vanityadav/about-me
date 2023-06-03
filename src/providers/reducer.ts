import { Actions, State } from "./contextTypes";

export default function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case "SET":
      return state;

    default:
      return state;
  }
}
