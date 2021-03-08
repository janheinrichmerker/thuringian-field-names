import { Fragment, FunctionComponent } from "react";
import { GeoCoordinates } from "../../model";
import { FormattedGeoLatitude, FormattedGeoLongitude } from ".";

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
