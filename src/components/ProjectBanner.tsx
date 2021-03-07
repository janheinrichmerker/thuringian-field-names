import { Component } from "react";
import { Button, Jumbotron } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { LinkContainer } from "react-router-bootstrap";

export class ProjectBanner extends Component {
  render() {
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
  }
}
