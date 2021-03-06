import { Component } from "react";
import { Form, InputGroup, Spinner } from "react-bootstrap";
import { FormikProps, FormikErrors, withFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface SearchProps {
  handleSearch: (query: string) => void;
  loading?: boolean;
  query?: string;
}

interface SearchValues {
  query: string;
}

class ConnectedSearch extends Component<
  SearchProps & FormikProps<SearchValues>
> {
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
    const { handleSubmit, handleChange, values, errors } = this.props;
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
            <InputGroup.Text>{this.renderIcon()}</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    );
  }
}

const connector = withFormik<SearchProps, SearchValues>({
  handleSubmit: (values, { props }) => {
    props.handleSearch(values.query);
  },
  validate: (values: SearchValues) => {
    let errors: FormikErrors<SearchValues> = {};
    if (!values.query) {
      errors.query = "Required";
    }
    return errors;
  },
  mapPropsToValues: (props) => ({
    query: props.query ?? "",
  }),
});

export const Search = connector(ConnectedSearch);
