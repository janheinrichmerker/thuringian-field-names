import { FunctionComponent, ReactElement } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

/**
 * Component for displaying a tooltip for a GND number.
 *
 * @see https://www.dnb.de/EN/Professionell/Standardisierung/GND/gnd_node.html
 */
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
