import { COMICS_REQUEST_PENDING, COMICS_REQUEST_SUCCESS } from "./type";

export const loadComic = () => {
  return {
    type: COMICS_REQUEST_PENDING,
  };
};

export const setComic = (comics) => {
  return {
    type: COMICS_REQUEST_SUCCESS,
    comics,
  };
};

export const failComic = (error) => {
  return {
    type: COMICS_REQUEST_SUCCESS,
    error,
  };
};
