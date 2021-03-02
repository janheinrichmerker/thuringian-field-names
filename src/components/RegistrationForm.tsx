import { Component } from "react";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { FormikProps, FormikErrors, withFormik } from "formik";

interface Props {
  handleRegistration: (name: string, email: string, password: string) => void;
  error?: string;
  loading: boolean;
}

interface Values {
  name: string;
  email: string;
  password: string;
}

type CombinedProps = Props & FormikProps<Values>;

class _RegistrationForm extends Component<CombinedProps> {
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
        {this.props.status}
        {this.renderError()}
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="John Doe"
            value={values.name}
            onChange={handleChange}
            isValid={touched.name && !errors.name}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="john.doe@example.com"
            value={values.email}
            onChange={handleChange}
            isValid={touched.email && !errors.email}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
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
          Sign up
          {this.renderLoading()}
        </Button>
      </Form>
    );
  }
}

const connector = withFormik<Props, Values>({
  handleSubmit: (values, { props }) => {
    props.handleRegistration(values.name, values.email, values.password);
  },
  validate: (values: Values) => {
    let errors: FormikErrors<Values> = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }

    return errors;
  },
  mapPropsToValues: () => {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
});

export const RegistrationForm = connector(_RegistrationForm);
