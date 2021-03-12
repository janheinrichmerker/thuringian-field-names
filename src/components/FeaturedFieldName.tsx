import { Fragment, FunctionComponent } from "react";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FormattedDate } from "react-intl";
import { FieldNameSnippet } from "../model";
import { FormattedFieldNameType, GndLink } from ".";

/**
 * Component for displaying a single featured field name snippet.
 */
export const FeaturedFieldName: FunctionComponent<{
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
          Last updated <FormattedDate value={snippet.lastModification.date} />
        </Card.Text>
        <LinkContainer to={`/details/${snippet.id}`}>
          <Card.Link>Details</Card.Link>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};
