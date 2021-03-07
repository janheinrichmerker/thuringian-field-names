import { Component } from "react";
import { CardColumns } from "react-bootstrap";
import { FieldNameSnippet } from "../model";
import { FeaturedFieldName } from "./FeaturedFieldName";
import { FeaturedTeaser } from "./FeaturedTeaser";

export class FeaturedFieldNames extends Component<{
  snippets: Array<FieldNameSnippet>;
}> {
  render() {
    return (
      <CardColumns>
        {this.props.snippets.map((snippet) => (
          <FeaturedFieldName snippet={snippet} />
        ))}
        <FeaturedTeaser />
      </CardColumns>
    );
  }
}
