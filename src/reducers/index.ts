import { combineReducers } from "redux";
import { connectionReducer } from "./connection.reducer";

export interface IConnection{
    address: string
}

export interface IState {
    connection: IConnection
  }

export const state = combineReducers<IState>({
    connection: connectionReducer
  })