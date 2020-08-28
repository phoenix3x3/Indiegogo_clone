// import React, { useState, useEffect } from "react";
// import {
//   Button,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Alert,
// } from "reactstrap";
// import { connect } from "react-redux";
// import { useSelector, useDispatch } from "react-redux";
// import PropTypes from "prop-types";
// import { loginUser } from "../../../actions/authActions";
// import { clearErrors } from "../../../actions/errorActions";

// // ДОДЕЛАТЬ В ФУНКЦИОНАЛЬНУЮ КОМПОНЕНТУ
// const LogInModal = () => {
//   const [msg, setMsg] = useState(null);
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const error = useSelector((state) => state.error);
//   const [modal, isOpen] = useState(false);
//   const dispatchClearErrors = useDispatch((state) => clearErrors);
//   const dispatchLogIn = useDispatch((state) => loginUser);
//   useEffect((prevProps) => {
//     // сheck this one more time

//     if (error !== prevProps.error) {
//       // Check for register error
//       if (error.id === "LOGIN_FAIL") {
//         setMsg({ msg: error.msg.msg });
//       } else {
//         setMsg({ msg: null });
//       }
//     }
//     // If Authenticated close modal
//     if (modal) {
//       if (isAuthenticated) {
//         toggle();
//       }
//     }
//   });

//   const toggle = () => {
//     // Clear Errors
//     dispatchLogIn();
//     isOpen(!modal);
//   };

//   // const onChange = (e) => {
//   //   useState({ [e.target.name]: e.target.value });
//   // };

//   // const onSubmit = (e) => {
//   //   e.preventDefault();
//   //   const { email, password } = state;
//   //   // Create user object
//   //   const user = {
//   //     email,
//   //     password,
//   //   };
//   //   // Attempt to register
//   //   this.props.loginUser(user);
//   // };
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const user = {
//       email,
//       password,
//     };
//     loginUser(user);
//   };
//   return (
//     <div>
//       {/* eslint-disable-next-line */}
//       <a onClick={toggle} href="#">
//         Войти
//       </a>
//       <Modal isOpen={modal} toggle={toggle}>
//         <ModalHeader toggle={toggle}>LogIn</ModalHeader>
//         <ModalBody>
//           {msg ? <Alert color="danger">{msg}</Alert> : null}
//           <Form onSubmit={handleSubmit}>
//             <FormGroup>
//               <Label for="email">Email</Label>
//               <Input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Email"
//                 className="mb-3"
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               <Label for="password">Password</Label>
//               <Input
//                 type="password"
//                 name="password"
//                 id="password"
//                 placeholder="Password"
//                 className="mb-3"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <Button color="dark" style={{ marginTop: "2rem" }} block>
//                 LogIn
//               </Button>
//             </FormGroup>
//           </Form>
//         </ModalBody>
//       </Modal>
//     </div>
//   );
// };

// export default LogInModal;

import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { loginUser } from "../../../actions/authActions";
import { clearErrors } from "../../../actions/errorActions";
class LogInModal extends React.Component {
  state = {
    modal: false,
    email: "",
    password: "",
    msg: null,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    // сheck this one more time
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
    // If Authenticated close modal
    if (this.state.modal) {
      if (isAuthenticated) {
        this.toggle();
      }
    }
  }

  toggle = () => {
    // Clear Errors
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    // Create user object
    const user = {
      email,
      password,
    };
    // Attempt to register
    this.props.loginUser(user);
  };
  render() {
    const { t } = this.props;
    return (
      <div>
        {/* eslint-disable-next-line */}
        <a onClick={this.toggle} href="#">
          {t("header.logIn")}
          {/* Войти */}
        </a>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{t("header.logIn")}</ModalHeader>
          <ModalBody>
            {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="email">{t("header.modals.email")}</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  // placeholder="Email"
                  className="mb-3"
                  onChange={this.onChange}
                />

                <Label for="password">{t("header.modals.password")}</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  // placeholder="Password"
                  className="mb-3"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  {t("header.logIn")}
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated, // reducers - index.js - authReducer
  error: state.error,
});
const LogInModalTranslated = withTranslation("common")(LogInModal);
export default connect(mapStateToProps, { loginUser, clearErrors })(
  LogInModalTranslated
);
