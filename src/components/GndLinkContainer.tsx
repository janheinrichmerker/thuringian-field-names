import {
  AnchorHTMLAttributes,
  cloneElement,
  Component,
  ReactElement,
} from "react";
import { GndOverlay } from "./GndOverlay";

export class GndLinkContainer extends Component<{
  gndNumber: string;
  children: ReactElement<AnchorHTMLAttributes<HTMLAnchorElement>>;
}> {
  render() {
    const child = this.props.children;
    const url = `http://d-nb.info/gnd/${this.props.gndNumber}`;
    return (
      <GndOverlay gndNumber={this.props.gndNumber}>
        {cloneElement(child, {
          href: url,
          target: "_blank",
        })}
      </GndOverlay>
    );
  }
}
