import { Fragment } from "react";
import "./App.css";

//components

import ListTodo from "./components/listTodo";
import InputTodo from "./components/inputTodo";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodo />
      </div>
    </Fragment>
  );
}

export default App;
