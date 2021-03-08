import { Component } from "react";
import { Link } from "react-router-dom";

export class FieldNameHighlight extends Component<{
  query?: string;
  children: string;
}> {
  render() {
    const query = this.props.query ?? this.props.children;
    const path = `/search/${query.replaceAll("-", "")}`;
    return (
      <Link to={path}>
        <em>{this.props.children}</em>
      </Link>
    );
  }
}
