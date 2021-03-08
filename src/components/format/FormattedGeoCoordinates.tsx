import { Component, Fragment } from "react";
import { GeoCoordinates } from "../../model";
import { FormattedGeoLatitude, FormattedGeoLongitude } from ".";

export class FormattedGeoCoordinates extends Component<{
  coordinates: GeoCoordinates;
}> {
  render() {
    return (
      <Fragment>
        <FormattedGeoLatitude latitude={this.props.coordinates.latitude} />,{" "}
        <FormattedGeoLongitude longitude={this.props.coordinates.longitude} />
      </Fragment>
    );
  }
}
