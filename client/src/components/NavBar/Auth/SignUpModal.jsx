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
import PropTypes from "prop-types";
import { registerUser } from "../../../actions/authActions";
import { clearErrors } from "../../../actions/errorActions";
import { withTranslation } from "react-i18next";

class SignUpModal extends React.Component {
  state = {
    modal: false,
    name: "",
    email: "",
    lastName: "",
    password: "",
    msg: null,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    registerUser: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    // сheck this one more time
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === "REGISTER_FAIL") {
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
    const { name, email, password, lastName } = this.state;
    // Create user object
    const newUser = {
      name,
      lastName,
      email,
      password,
    };
    // Attempt to register
    this.props.registerUser(newUser);
  };
  render() {
    const { t } = this.props;
    return (
      <div>
        {/* eslint-disable-next-line */}
        <a onClick={this.toggle} href="#">
          {t("header.signUp")}
        </a>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            {t("header.modals.signUp")}
          </ModalHeader>
          <ModalBody>
            {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="name">{t("header.modals.name")}</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  // placeholder="Name"
                  className="mb-3"
                  onChange={this.onChange}
                />
                <Label for="name">{t("header.modals.lastName")}</Label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  // placeholder="LastName"
                  className="mb-3"
                  onChange={this.onChange}
                />
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
                  {t("header.signUp")}
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
const SignUpModalTranslated = withTranslation("common")(SignUpModal);

export default connect(mapStateToProps, { registerUser, clearErrors })(
  SignUpModalTranslated
);
