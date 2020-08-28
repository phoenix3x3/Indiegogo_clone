import React, { useEffect, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "../../store";
import { loadUser } from "../../actions/authActions";
import NavBar from "../NavBar/NavBar";
import Main from "../Main/Main.jsx";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  });

  return (
    <Suspense fallback={<Spinner />}>
      <Provider store={store}>
        <Router>
          <header>
            <NavBar />
          </header>
          <main>
            <Main />
          </main>
          <footer></footer>
        </Router>
      </Provider>
    </Suspense>
  );
};

export default App;
