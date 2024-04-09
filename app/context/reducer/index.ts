import { ACTIONTYPE, EditValueENUM, InitialState } from "../types";

const initialState: InitialState = {
  select: new Map(),
};

function reducer(state: InitialState, action: ACTIONTYPE): InitialState {
  switch (action.type) {
    case EditValueENUM.ON_CHANGE: {
      const currMapCorrect = new Map(state.select);
      currMapCorrect.set(
        action.identifier,
        !currMapCorrect.get(action.identifier),
      );
      return {
        select: currMapCorrect,
      };
    }
    default:
      throw new Error();
  }
}

export { initialState, reducer };
