import { Component, Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { FormattedGeoCoordinate } from ".";

export class FormattedGeoLongitude extends Component<{
  longitude: number;
}> {
  private direction() {
    if (this.props.longitude >= 0) {
      return <FormattedMessage id="fieldName.geo.direction.east" />;
    } else {
      return <FormattedMessage id="fieldName.geo.direction.west" />;
    }
  }

  render() {
    return (
      <Fragment>
        {this.direction()}{" "}
        <FormattedGeoCoordinate coordinate={this.props.longitude} />
      </Fragment>
    );
  }
}
