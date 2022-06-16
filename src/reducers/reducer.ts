import { combineReducers } from "@reduxjs/toolkit";

import mapStateReducer from "./mapStateReducer";

const reducer = combineReducers({
  mapState: mapStateReducer,
});

export default reducer;
