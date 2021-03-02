import { Component } from "react";
import { Form, InputGroup, Spinner } from "react-bootstrap";
import { FormikProps, FormikErrors, withFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface Props {
  handleSearch: (query: string) => void;
  loading?: boolean;
}

interface Values {
  query: string;
}

type CombinedProps = Props & FormikProps<Values>;

class SearchForm extends Component<CombinedProps> {
  renderIcon() {
    if (this.props.loading) {
      return (
        <Spinner as="span" animation="border" role="status" size="sm"></Spinner>
      );
    } else {
      return (
        <FontAwesomeIcon icon={faSearch} onClick={this.props.submitForm} />
      );
    }
  }

  render() {
    const { handleSubmit, handleChange, values, touched, errors } = this.props;
    return (
      <Form inline noValidate onSubmit={handleSubmit}>
        <InputGroup className="mr-sm-2">
          <Form.Control
            type="text"
            name="query"
            placeholder="Search..."
            value={values.query}
            onChange={handleChange}
            isValid={touched.query && !errors.query}
            isInvalid={!!errors.query}
          />
          {/* TODO Show tooltip with error message. */}
          <InputGroup.Append>
            <InputGroup.Text>{this.renderIcon()}</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    );
  }
}

const connector = withFormik<Props, Values>({
  handleSubmit: (values, { props }) => {
    props.handleSearch(values.query);
  },
  validate: (values: Values) => {
    let errors: FormikErrors<Values> = {};
    if (!values.query) {
      errors.query = "Required";
    }
    return errors;
  },
});

export const Search = connector(SearchForm);
