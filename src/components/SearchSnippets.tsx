import { Component, Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import { FieldNameSnippet } from "../model";
import { SearchSnippet } from "../components/SearchSnippet";

export class SearchSnippets extends Component<{
  snippets: Array<FieldNameSnippet>;
}> {
  render() {
    return (
      <Fragment>
        {this.props.snippets.map((snippet) => (
          <Row>
            <Col>
              <SearchSnippet snippet={snippet} />
            </Col>
          </Row>
        ))}
      </Fragment>
    );
  }
}
