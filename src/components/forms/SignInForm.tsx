import { FunctionComponent } from "react";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { FormikErrors, useFormik } from "formik";

interface Props {
  login: (nameOrEmail: string, password: string) => void;
  error?: string;
  loading: boolean;
}

interface Values {
  nameOrEmail: string;
  password: string;
}

// Helper component to display alert on input errors.
const SignInFormError: FunctionComponent<{ error?: string }> = ({ error }) => {
  if (!error) return null;
  return <Alert variant="danger">{error}</Alert>;
};

// Helper component to display loading spinner while processing inputs.
const SignInFormLoading: FunctionComponent<{ loading: boolean }> = ({
  loading,
}) => {
  if (!loading) return null;
  return (
    <Spinner as="span" animation="border" role="status" size="sm">
      <span className="sr-only">Signing in...</span>
    </Spinner>
  );
};

/**
 * Sign in form component.
 *
 * Submitting will trigger the given callback function.
 */
export const SignInForm: FunctionComponent<Props> = ({
  login: handleLogin,
  error,
  loading,
}) => {
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      nameOrEmail: "",
      password: "",
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
    onSubmit: (values) => {
      handleLogin(values.nameOrEmail, values.password);
    },
  });
  return (
    <Form noValidate onSubmit={handleSubmit}>
      <SignInFormError error={error} />
      <Form.Group>
        <Form.Label>Email or username</Form.Label>
        <Form.Control
          type="text"
          name="nameOrEmail"
          placeholder="john.doe@example.com"
          value={values.nameOrEmail || ""}
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
        Sign in
        <SignInFormLoading loading={loading} />
      </Button>
    </Form>
  );
};
