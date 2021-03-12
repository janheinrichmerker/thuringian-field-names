import { FunctionComponent } from "react";
import { GndOverlay } from ".";

/**
 * Component for displaying a link for a GND number reference
 * to DNB's GND number lookup.
 *
 * @see https://www.dnb.de/EN/Professionell/Standardisierung/GND/gnd_node.html
 */
export const GndLink: FunctionComponent<{
  gndNumber: string;
}> = ({ gndNumber, children }) => {
  const url = `http://d-nb.info/gnd/${gndNumber}`;
  const inner = children ?? gndNumber;
  return (
    <GndOverlay gndNumber={gndNumber}>
      <a href={url} target="_blank" rel="noreferrer">
        {inner}
      </a>
    </GndOverlay>
  );
};
