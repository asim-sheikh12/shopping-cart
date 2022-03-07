import { createStore } from "redux";
import root_reducer from "../Redux/Root_Reducer";
const store = createStore(
  root_reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
