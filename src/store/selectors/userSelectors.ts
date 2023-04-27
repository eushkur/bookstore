import { RootState } from "../store";

export const getUserInfo = (state: RootState) => state.persistedReducer.user;
