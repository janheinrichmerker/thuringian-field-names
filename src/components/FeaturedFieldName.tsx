import { Component } from "react";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FormattedDate } from "react-intl";
import { FieldNameSnippet } from "../model";
import { FormattedFieldNameType, GndLink } from ".";

export class FeaturedFieldName extends Component<{
  snippet: FieldNameSnippet;
}> {
  render() {
    return (
      <Card key={this.props.snippet.id}>
        <Card.Body>
          <Card.Title>{this.props.snippet.title}</Card.Title>
          <Card.Subtitle className="mb-2">
            <FormattedFieldNameType type={this.props.snippet.type} />
          </Card.Subtitle>
          <Card.Text className="text-muted">
            GND number: <GndLink gndNumber={this.props.snippet.gndNumber} />
            <br />
            Last updated{" "}
            <FormattedDate value={this.props.snippet.lastModification.date} />
          </Card.Text>
          <LinkContainer to={`/details/${this.props.snippet.id}`}>
            <Card.Link>Details</Card.Link>
          </LinkContainer>
        </Card.Body>
      </Card>
    );
  }
}
