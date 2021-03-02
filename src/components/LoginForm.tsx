import { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { FormikProps, withFormik } from "formik";

interface Props {
  handleLogin: (nameOrEmail: string, password: string) => void;
}

interface Values {
  nameOrEmail: string;
  password: string;
}

type CombinedProps = Props & FormikProps<Values>;

class LoginForm extends Component<CombinedProps> {
  render() {
    const { handleSubmit, handleChange, values, touched, errors } = this.props;
    return (
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email or username</Form.Label>
          <Form.Text className="text-muted">
            You can log in using either your email address or your user name.
          </Form.Text>
          <Form.Control
            type="email"
            name="nameOrEmail"
            placeholder="john.doe@example.com"
            value={values.nameOrEmail}
            onChange={handleChange}
            isValid={touched.nameOrEmail && !errors.nameOrEmail}
          />
          <Form.Control.Feedback type="valid">
            Looks good!
          </Form.Control.Feedback>
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
          />
          <Form.Control.Feedback type="valid">
            Looks good!
          </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign in
        </Button>
      </Form>
    );
  }
}

export default withFormik<Props, Values>({
  handleSubmit: (values, formik) => {
    formik.props.handleLogin(values.nameOrEmail, values.password);
  },
})(LoginForm);
