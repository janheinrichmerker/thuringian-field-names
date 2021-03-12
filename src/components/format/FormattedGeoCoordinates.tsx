import { Fragment, FunctionComponent } from "react";
import { GeoCoordinates } from "../../model";
import { FormattedGeoLatitude, FormattedGeoLongitude } from ".";

/**
 * Component for locale-aware displaying geographical coordinates 
 * as latitude and longitude.
 */
export const FormattedGeoCoordinates: FunctionComponent<{
  coordinates: GeoCoordinates;
}> = ({ coordinates }) => {
  return (
    <Fragment>
      <FormattedGeoLatitude latitude={coordinates.latitude} />,{" "}
      <FormattedGeoLongitude longitude={coordinates.longitude} />
    </Fragment>
  );
};
