import { FunctionComponent, MouseEventHandler } from "react";
import { Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

/**
 * Component to display a search icon button or a loading indicator,
 * depending on the search state.
 */
export const SearchFormIcon: FunctionComponent<{
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
