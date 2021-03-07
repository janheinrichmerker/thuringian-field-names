import { Component } from "react";
import { Card } from "react-bootstrap";
import { FormattedDate } from "react-intl";
import { FieldNameSnippet } from "../model";
import { FormattedFieldNameType } from "../components/FormattedFieldNameType";
import { GndLink } from "../components/GndLink";
import { GndLinkContainer } from "../components/GndLinkContainer";
import { LinkContainer } from "react-router-bootstrap";

export class SearchSnippet extends Component<{
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
            Created <FormattedDate
              value={this.props.snippet.creation.date}
            />{" "}
            by {this.props.snippet.creation.author}, last updated{" "}
            <FormattedDate value={this.props.snippet.lastModification.date} />{" "}
            by {this.props.snippet.lastModification.author}
            <br />
          </Card.Text>
          <LinkContainer to={`/details/${this.props.snippet.id}`}>
            <Card.Link>View details</Card.Link>
          </LinkContainer>
          <GndLinkContainer gndNumber={this.props.snippet.gndNumber}>
            <Card.Link>View in GND</Card.Link>
          </GndLinkContainer>
        </Card.Body>
      </Card>
    );
  }
}
