import { Fragment, FunctionComponent } from "react";
import { FormattedMessage } from "react-intl";
import { FormattedGeoCoordinate } from ".";

/**
 * Component for locale-aware displaying a longitude coordinate.
 */
export const FormattedGeoLongitude: FunctionComponent<{
  longitude: number;
}> = ({ longitude }) => {
  const direction =
    longitude >= 0 ? (
      <FormattedMessage id="fieldName.geo.direction.east" />
    ) : (
      <FormattedMessage id="fieldName.geo.direction.west" />
    );
  return (
    <Fragment>
      {direction} <FormattedGeoCoordinate coordinate={longitude} />
    </Fragment>
  );
};
