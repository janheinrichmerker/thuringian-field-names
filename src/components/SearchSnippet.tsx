import { Fragment, FunctionComponent } from "react";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FormattedDate } from "react-intl";
import { FieldNameSnippet } from "../model";
import {
  FormattedFieldNameType,
  GndLink,
  GndLinkContainer,
} from "../components";

/**
 * Component for displaying a single field name search snippet.
 */
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
          {snippet.gndNumber ? (
            <Fragment>
              GND number: <GndLink gndNumber={snippet.gndNumber} />
              <br />
            </Fragment>
          ) : undefined}
          Created <FormattedDate value={snippet.creation.date} /> by{" "}
          {snippet.creation.author}, last updated{" "}
          <FormattedDate value={snippet.lastModification.date} /> by{" "}
          {snippet.lastModification.author}
          <br />
        </Card.Text>
        <LinkContainer to={`/details/${snippet.id}`}>
          <Card.Link>View details</Card.Link>
        </LinkContainer>
        {snippet.gndNumber ? (
          <GndLinkContainer gndNumber={snippet.gndNumber}>
            <Card.Link>View in GND</Card.Link>
          </GndLinkContainer>
        ) : undefined}
      </Card.Body>
    </Card>
  );
};
