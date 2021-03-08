import { FunctionComponent } from "react";
import { GndOverlay } from ".";

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
