import { Fragment, FunctionComponent } from "react";
import { FormattedNumber } from "react-intl";

export const FormattedGeoCoordinate: FunctionComponent<{
  coordinate: number;
}> = ({ coordinate }) => {
  const decimal = Math.abs(coordinate);
  const degrees = Math.floor(decimal);
  const minutes = Math.floor((decimal - degrees) * 60);
  const seconds = Math.floor(((decimal - degrees) * 60 - minutes) * 60);
  return (
    <Fragment>
      {degrees}° {minutes}' <FormattedNumber value={seconds} />"
    </Fragment>
  );
};
