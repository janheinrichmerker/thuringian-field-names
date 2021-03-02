import { Component } from "react";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { FormikProps, FormikErrors, withFormik } from "formik";

interface Props {
  handleLogin: (nameOrEmail: string, password: string) => void;
  error?: string;
  loading: boolean;
}

interface Values {
  nameOrEmail: string;
  password: string;
}

type CombinedProps = Props & FormikProps<Values>;

class SignInForm extends Component<CombinedProps> {
  renderError() {
    if (this.props.error) {
      return <Alert variant="danger">{this.props.error}</Alert>;
    }
  }

  renderLoading() {
    if (this.props.loading) {
      return (
        <Spinner as="span" animation="border" role="status" size="sm">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }
  }

  render() {
    const { handleSubmit, handleChange, values, touched, errors } = this.props;
    return (
      <Form noValidate onSubmit={handleSubmit}>
        {this.renderError()}
        <Form.Group>
          <Form.Label>Email or username</Form.Label>
          <Form.Control
            type="email"
            name="nameOrEmail"
            placeholder="john.doe@example.com"
            value={values.nameOrEmail}
            onChange={handleChange}
            isValid={touched.nameOrEmail && !errors.nameOrEmail}
            isInvalid={!!errors.nameOrEmail}
          />
          <Form.Text className="text-muted">
            You can log in using either your email address or your user name.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            {errors.nameOrEmail}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            isValid={touched.password && !errors.password}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign in
          {this.renderLoading()}
        </Button>
      </Form>
    );
  }
}

const connector = withFormik<Props, Values>({
  handleSubmit: (values, { props }) => {
    props.handleLogin(values.nameOrEmail, values.password);
  },
  validate: (values: Values) => {
    let errors: FormikErrors<Values> = {};
    if (!values.nameOrEmail) {
      errors.nameOrEmail = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }

    return errors;
  },
});

export const SignIn = connector(SignInForm);
