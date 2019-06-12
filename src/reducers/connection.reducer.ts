
import { connectionTypes } from "../actions/connection.actions";
import { IConnection } from ".";


const initialState: IConnection = {
  address: ''
}

export const connectionReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case connectionTypes.SET_ADDRESS:
      return {
        ...state,
        address: action.payload.address
      }
    default:

  }
  return state;
}