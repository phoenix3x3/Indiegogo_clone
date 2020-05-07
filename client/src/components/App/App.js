import React, { useEffect } from "react";
import { Provider } from "react-redux";
import NavBar from "../NavBar/NavBar";
import store from "../../store";
import { loadUser } from "../../actions/authActions";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  });
  return (
    <Provider store={store}>
      <header>
        <NavBar />
      </header>
    </Provider>
  );
}

export default App;
