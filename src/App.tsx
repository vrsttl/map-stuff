import React from "react";
import { useDispatch } from "react-redux";

import { getMapInfoStart } from "actions/actions";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <span onClick={() => dispatch(getMapInfoStart())}>Learn React</span>
      </header>
    </div>
  );
}

export default App;
