import { ADD_USER_INFO } from "./authenticationType";

export const addUserInfo = (userInfo) => {
  return {
    type: ADD_USER_INFO,
    payload: userInfo,
  };
};
