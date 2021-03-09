import { FunctionComponent } from "react";
import { Map, IMapProps } from "google-maps-react";
import { useGoogle } from "../../hooks";
import { GOOGLE_API_KEY } from "../../secrets";
import { LoadingAlert } from "..";

export const GoogleMap: FunctionComponent<Omit<IMapProps, "google">> = ({
  children,
  ...props
}) => {
  const google = useGoogle(GOOGLE_API_KEY);
  if (!google) return <LoadingAlert />;
  return (
    <Map google={google} {...props}>
      {children}
    </Map>
  );
};
