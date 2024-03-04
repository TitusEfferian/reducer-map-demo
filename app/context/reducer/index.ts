import { ACTIONTYPE, EditValueENUM, InitialState } from '../types';

const initialState: InitialState = {
    select: new Map(),
};

function reducer(state: InitialState, action: ACTIONTYPE): InitialState {
    switch (action.type) {
        case EditValueENUM.ON_CHANGE: {
            // const currMap = state.select;
            // let currValueOfIdentifier = currMap.get(action.identifier)
            // currMap.set(action.identifier, !currValueOfIdentifier)
            // because of strict mode, this will be render twice
            // but the first render is becoming `false` which is expected based on the logic
            // but the second render suddenly becomes back to true
            // what happened?
            // if we disable the strict mode then it result will be as expected
            // console.log(currMap)

            // // Logging the original Map reference
            // console.log("Original state.select reference:", state.select);

            // // Directly modifying the state's Map (wrong approach)
            // const currMapWrong = state.select;
            // currMapWrong.set(action.identifier, true);
            // console.log("After modification (wrong approach) reference:", state.select);

            // // Correct approach: Creating a new Map based on the current state's Map
            // const currMapCorrect = new Map(state.select);
            // currMapCorrect.set(action.identifier, false);
            // console.log("New Map (correct approach) reference:", currMapCorrect);

            // // Comparing references
            // console.log("References are the same (wrong approach)?", state.select === currMapWrong);
            // console.log("References are the same (correct approach)?", state.select === currMapCorrect);
            const currMap = new Map(state.select);
            currMap.set(action.identifier, !currMap.get(action.identifier));
            return {
                select: currMap
            };
        }
        default:
            throw new Error();
    }
}

export { initialState, reducer };
