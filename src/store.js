import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import userInforeducer from "./Redux/authenticationReducer";

const store = createStore(userInforeducer, composeWithDevTools());

export default store;
