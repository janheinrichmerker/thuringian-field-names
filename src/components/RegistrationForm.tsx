import { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { FormikProps, withFormik } from "formik";

interface Props {
  handleRegistration: (name: string, email: string, password: string) => void;
}

interface Values {
  name: string;
  email: string;
  password: string;
}

type CombinedProps = Props & FormikProps<Values>;

class RegistrationForm extends Component<CombinedProps> {
  render() {
    const { handleSubmit, handleChange, values, touched, errors } = this.props;
    return (
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="John Doe"
            value={values.name}
            onChange={handleChange}
            isValid={touched.name && !errors.name}
          />
          <Form.Control.Feedback type="valid">
            Looks good!
          </Form.Control.Feedback>
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
          />
          <Form.Control.Feedback type="valid">
            Looks good!
          </Form.Control.Feedback>
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
          />
          <Form.Control.Feedback type="valid">
            Looks good!
          </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign up
        </Button>
      </Form>
    );
  }
}

export default withFormik<Props, Values>({
  handleSubmit: (values, formik) => {
    formik.props.handleRegistration(values.name, values.email, values.password);
  },
})(RegistrationForm);
