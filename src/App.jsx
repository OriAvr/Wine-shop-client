import { Container } from "@material-ui/core";
import React from "react";
import "./App.css";
import RegistrationComponent from "./components/RegistrationComponent";

// import { Button } from "@material-ui/core";
// import { ButtonGroup } from "@material-ui/core";
// import SaveIcon from "@material-ui/icons/Save";
// import DeleteIcon from "@material-ui/icons/Delete";
// import { Checkbox } from "@material-ui/core";
// import { TextField } from "@material-ui/core";

function App() {
  return (
    <Container className="container">
      <div>
        <RegistrationComponent></RegistrationComponent>
      </div>
    </Container>
  );
}

export default App;
