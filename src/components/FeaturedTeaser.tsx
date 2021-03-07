import { Component } from "react";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export class FeaturedTeaser extends Component {
  render() {
    return (
      <Card key="teaser">
        <Card.Body>
          <Card.Title>Want to see more?</Card.Title>
          <Card.Text>Search for field names in your village.</Card.Text>
          <LinkContainer to="/search">
            <Card.Link>Find more</Card.Link>
          </LinkContainer>
        </Card.Body>
      </Card>
    );
  }
}
