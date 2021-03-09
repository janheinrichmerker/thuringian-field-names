import { FunctionComponent } from "react";
import {
  MapContainer,
  Marker,
  Rectangle,
  Popup,
  Tooltip,
  LayersControl,
} from "react-leaflet";
import { LatLngTuple, LatLngBounds } from "leaflet";
import { GeoArea, GeoCoordinates } from "../../model";
import { LoadingAlert } from "../alerts";
import "./Map.scss";
import { OpenStreetMapLayer } from "./OpenStreetMapLayer";

function centerPoint(area: GeoArea): GeoCoordinates {
  return {
    latitude: (area.from.latitude + area.to.latitude) / 2,
    longitude: (area.from.longitude + area.to.longitude) / 2,
  };
}

function toLatLng(coordinates: GeoCoordinates): LatLngTuple {
  return [coordinates.latitude, coordinates.longitude];
}

function toLatLngBounds(area: GeoArea): LatLngBounds {
  return new LatLngBounds(toLatLng(area.from), toLatLng(area.to));
}

export const AreaMap: FunctionComponent<{ area: GeoArea }> = ({ area }) => {
  const rectangle = toLatLngBounds(area);
  const center = toLatLng(centerPoint(area));

  return (
    <div>
      <MapContainer
        // zoom={15}
        center={center}
        bounds={rectangle}
        placeholder={LoadingAlert}
        scrollWheelZoom={false}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="OpenStreetMap">
            <OpenStreetMapLayer />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="OpenStreetMap (black &amp; white)">
            <OpenStreetMapLayer variant="monochrome" />
          </LayersControl.BaseLayer>
          <Marker position={center}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          <LayersControl.Overlay checked name="Bereich">
            <Rectangle bounds={rectangle}>
              <Tooltip permanent>permanent Tooltip for Rectangle</Tooltip>
            </Rectangle>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
};
