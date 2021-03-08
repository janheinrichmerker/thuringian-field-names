import { FunctionComponent, ReactElement } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export const GndOverlay: FunctionComponent<{
  gndNumber: string;
  children: ReactElement;
}> = ({ gndNumber, children }) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={
        <Tooltip id={`gnd-tooltip-${gndNumber}`}>
          Number {gndNumber} in DNB's Integrated Authority File
        </Tooltip>
      }
    >
      {children}
    </OverlayTrigger>
  );
};
