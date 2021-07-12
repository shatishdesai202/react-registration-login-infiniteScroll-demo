import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import userInforeducer from "./Redux/authentication/reducer";

const store = createStore(userInforeducer, composeWithDevTools());

export default store;
