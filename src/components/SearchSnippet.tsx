import { FunctionComponent } from "react";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FormattedDate } from "react-intl";
import { FieldNameSnippet } from "../model";
import {
  FormattedFieldNameType,
  GndLink,
  GndLinkContainer,
} from "../components";

export const SearchSnippet: FunctionComponent<{
  snippet: FieldNameSnippet;
}> = ({ snippet }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{snippet.title}</Card.Title>
        <Card.Subtitle className="mb-2">
          <FormattedFieldNameType type={snippet.type} />
        </Card.Subtitle>
        <Card.Text className="text-muted">
          GND number: <GndLink gndNumber={snippet.gndNumber} />
          <br />
          Created <FormattedDate value={snippet.creation.date} /> by{" "}
          {snippet.creation.author}, last updated{" "}
          <FormattedDate value={snippet.lastModification.date} /> by{" "}
          {snippet.lastModification.author}
          <br />
        </Card.Text>
        <LinkContainer to={`/details/${snippet.id}`}>
          <Card.Link>View details</Card.Link>
        </LinkContainer>
        <GndLinkContainer gndNumber={snippet.gndNumber}>
          <Card.Link>View in GND</Card.Link>
        </GndLinkContainer>
      </Card.Body>
    </Card>
  );
};
