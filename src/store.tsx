export class State {
  constructor(public count: number) {}
}
export interface CountAction {
  type: String;
  payload: Number;
}

const initialState: State = {
  count: 0
};

export function countReducer(state: State = initialState, action: CountAction): State {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "count":
      return { ...state, ...action.payload };
  }
  return state;
}
