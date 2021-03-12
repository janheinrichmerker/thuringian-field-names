import {
  AnchorHTMLAttributes,
  cloneElement,
  FunctionComponent,
  ReactElement,
} from "react";
import { GndOverlay } from ".";

/**
 * Component for modifying an existing anchor element's destionation
 * to point to the DNB's GND number lookup.
 *
 * @see https://www.dnb.de/EN/Professionell/Standardisierung/GND/gnd_node.html
 */
export const GndLinkContainer: FunctionComponent<{
  gndNumber: string;
  children: ReactElement<AnchorHTMLAttributes<HTMLAnchorElement>>;
}> = ({ gndNumber, children }) => {
  const child = children;
  const url = `http://d-nb.info/gnd/${gndNumber}`;
  return (
    <GndOverlay gndNumber={gndNumber}>
      {cloneElement(child, {
        href: url,
        target: "_blank",
      })}
    </GndOverlay>
  );
};
