import { FunctionComponent } from "react";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { FormikProps, FormikErrors, useFormik } from "formik";

interface SignUpProps {
  handleRegistration: (name: string, email: string, password: string) => void;
  error?: string;
  loading: boolean;
}

interface SignUpValues {
  name: string;
  email: string;
  password: string;
}

const SignUpFormError: FunctionComponent<{ error?: string }> = ({ error }) => {
  if (!error) return null;
  return <Alert variant="danger">{error}</Alert>;
};

const SignUpFormLoading: FunctionComponent<{ loading: boolean }> = ({
  loading,
}) => {
  if (!loading) return null;
  return (
    <Spinner as="span" animation="border" role="status" size="sm">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export const SignUpForm: FunctionComponent<SignUpProps> = ({
  handleRegistration,
  error,
  loading,
}) => {
  const {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
  } = useFormik<SignUpValues>({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors: FormikErrors<typeof values> = {};
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
    onSubmit: (values) => {
      handleRegistration(values.name, values.email, values.password);
    },
  });
  return (
    <Form noValidate onSubmit={handleSubmit}>
      <SignUpFormError error={error} />
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="John Doe"
          value={values.name || ""}
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
          value={values.email || ""}
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
          value={values.password || ""}
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
        <SignUpFormLoading loading={loading} />
      </Button>
    </Form>
  );
};
