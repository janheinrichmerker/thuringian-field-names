import { Component, Fragment } from "react";
import { FormattedNumber } from "react-intl";

export class FormattedGeoCoordinate extends Component<{
  coordinate: number;
}> {
  render() {
    const coordinate = Math.abs(this.props.coordinate);
    const degrees = Math.floor(coordinate);
    const minutes = Math.floor((coordinate - degrees) * 60);
    const seconds = Math.floor(((coordinate - degrees) * 60 - minutes) * 60);
    return (
      <Fragment>
        {degrees}° {minutes}' <FormattedNumber value={seconds} />"
      </Fragment>
    );
  }
}
