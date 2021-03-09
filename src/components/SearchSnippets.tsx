import { Fragment, FunctionComponent } from "react";
import { Row, Col } from "react-bootstrap";
import { FieldNameSnippet } from "../model";
import { SearchSnippet } from "../components";

export const SearchSnippets: FunctionComponent<{
  snippets: Array<FieldNameSnippet>;
}> = ({ snippets }) => {
  return (
    <Fragment>
      {snippets.map((snippet) => (
        <Row>
          <Col>
            <SearchSnippet snippet={snippet} />
          </Col>
        </Row>
      ))}
    </Fragment>
  );
};
