import { FunctionComponent } from "react";
import { MapContainer, LayersControl } from "react-leaflet";
import { LatLngBounds } from "leaflet";
import { GeoArea } from "../../model";
import { LoadingAlert } from "../alerts";
import "./Map.scss";
import { OpenStreetMapLayer } from "./OpenStreetMapLayer";
import { Area } from "./Area";

function toLatLngBounds(area: GeoArea) {
  return new LatLngBounds([
    [area.from.latitude, area.from.longitude],
    [area.to.latitude, area.to.longitude],
  ]);
}

function isPoint(bounds: LatLngBounds) {
  return (
    bounds.getNorth() === bounds.getSouth() &&
    bounds.getEast() === bounds.getWest()
  );
}

/**
 * Component to display a Leaflet map for a given area with an optional label.
 */
export const AreaMap: FunctionComponent<{ area: GeoArea; label?: string }> = ({
  area,
  label,
}) => {
  const rectangle = toLatLngBounds(area);
  const bounds = isPoint(rectangle)
    ? rectangle.getCenter().toBounds(500)
    : rectangle;

  return (
    <MapContainer
      zoom={16}
      bounds={bounds}
      placeholder={LoadingAlert}
      scrollWheelZoom={false}
    >
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <OpenStreetMapLayer />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="OpenStreetMap (black & white)">
          <OpenStreetMapLayer variant="monochrome" />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay checked name="Location">
          <Area area={rectangle} label={label} />
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
};
