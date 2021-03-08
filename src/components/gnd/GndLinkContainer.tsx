import {
  AnchorHTMLAttributes,
  cloneElement,
  FunctionComponent,
  ReactElement,
} from "react";
import { GndOverlay } from ".";

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
