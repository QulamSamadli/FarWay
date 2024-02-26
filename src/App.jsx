import React from "react";
import "./index.css";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import PackingList from "./Components/PackingList";

const App = () => {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
    </div>
  );
};

export default App;
