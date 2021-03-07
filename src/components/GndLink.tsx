import { Component } from "react";
import { GndOverlay } from "./GndOverlay";

export class GndLink extends Component<{
  gndNumber: string;
}> {
  render() {
    const url = `http://d-nb.info/gnd/${this.props.gndNumber}`;
    const inner = this.props.children ?? this.props.gndNumber;
    return (
      <GndOverlay gndNumber={this.props.gndNumber}>
        <a href={url} target="_blank" rel="noreferrer">
          {inner}
        </a>
      </GndOverlay>
    );
  }
}
