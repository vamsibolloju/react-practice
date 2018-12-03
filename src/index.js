import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { Provider } from "react-redux";
import store from "./store";
import { Todos } from "./components";
store.dispatch({ type: "ADD_TODO", data: { name: "vamsi" } });
console.log(store.getState());
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1> Hi </h1>
        <Todos />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
