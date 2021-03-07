import { Component } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export class GndOverlay extends Component<{
  gndNumber: string;
  children: React.ReactElement;
}> {
  render() {
    return (
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip id={`gnd-tooltip-${this.props.gndNumber}`}>
            Number {this.props.gndNumber} in DNB's Integrated Authority File
          </Tooltip>
        }
      >
        {this.props.children}
      </OverlayTrigger>
    );
  }
}
