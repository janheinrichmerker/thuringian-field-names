import { Component, Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { FormattedGeoCoordinate } from ".";

export class FormattedGeoLatitude extends Component<{
  latitude: number;
}> {
  private direction() {
    if (this.props.latitude >= 0) {
      return <FormattedMessage id="fieldName.geo.direction.north" />;
    } else {
      return <FormattedMessage id="fieldName.geo.direction.south" />;
    }
  }

  render() {
    return (
      <Fragment>
        {this.direction()}{" "}
        <FormattedGeoCoordinate coordinate={this.props.latitude} />
      </Fragment>
    );
  }
}
