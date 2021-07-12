import {
  COMICS_REQUEST_FAILURE,
  COMICS_REQUEST_PENDING,
  COMICS_REQUEST_SUCCESS,
} from "./type";

const comicReducer = (
  state = { comic: [], isLoading: false, error: false },
  action
) => {
  switch (action.type) {
    case COMICS_REQUEST_PENDING:
      return { ...state, isLoading: true };
    case COMICS_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comic: [...state.comic, action.comic],
      };
    case COMICS_REQUEST_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default comicReducer;
