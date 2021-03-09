import { FunctionComponent } from "react";
import { Button, Jumbotron } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FormattedMessage } from "react-intl";

export const ProjectBanner: FunctionComponent = () => {
  return (
    <Jumbotron>
      <h1>
        <FormattedMessage id="project.title" />
      </h1>
      <p>
        <FormattedMessage id="project.shortDescription" />
      </p>
      <p>
        <LinkContainer to="/project">
          <Button variant="primary">Learn more</Button>
        </LinkContainer>
      </p>
    </Jumbotron>
  );
};
