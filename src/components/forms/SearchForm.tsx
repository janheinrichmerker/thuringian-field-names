import { FunctionComponent, MouseEventHandler } from "react";
import { Form, InputGroup, Spinner } from "react-bootstrap";
import { FormikErrors, useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface Props {
  search: (query: string) => void;
  loading?: boolean;
  query?: string;
}

interface Values {
  query: string;
}

const SearchFormIcon: FunctionComponent<{
  loading?: boolean;
  submitForm: MouseEventHandler<SVGSVGElement>;
}> = ({ loading, submitForm }) => {
  if (loading) {
    return (
      <Spinner as="span" animation="border" role="status" size="sm">
        <span className="sr-only">Searching...</span>
      </Spinner>
    );
  } else {
    return <FontAwesomeIcon icon={faSearch} onClick={submitForm} />;
  }
};

export const SearchForm: FunctionComponent<Props> = ({
  search: handleSearch,
  loading,
  query,
}) => {
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    submitForm,
  } = useFormik<Values>({
    initialValues: {
      query: query ?? "",
    },
    validate: (values) => {
      let errors: FormikErrors<typeof values> = {};
      if (!values.query) {
        errors.query = "Required";
      }
      return errors;
    },
    onSubmit: (values) => {
      handleSearch(values.query);
    },
  });
  return (
    <Form inline noValidate onSubmit={handleSubmit}>
      <InputGroup className="mr-sm-2">
        <Form.Control
          type="text"
          name="query"
          placeholder="Search..."
          value={values.query || ""}
          onChange={handleChange}
          isInvalid={!!errors.query}
        />
        {/* TODO Show tooltip with error message. */}
        <InputGroup.Append>
          <InputGroup.Text>
            <SearchFormIcon loading={loading} submitForm={submitForm} />
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};
