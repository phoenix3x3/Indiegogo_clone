import React, { useEffect } from "react";
import { Provider } from "react-redux";
import NavBar from "../NavBar/NavBar";
import Main from "../Main/Main.jsx";
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
      <main>
        <Main />
      </main>
    </Provider>
  );
}

export default App;
