import React from "react";
import ReactDOM from "react-dom";
import TodoList from './TodoList'
import Store from './Store'


import "./styles.css";

const App = () => {
  
  return (
  <div className="App">
  <TodoList store={Store} />
  </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
