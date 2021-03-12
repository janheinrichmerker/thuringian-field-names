import { FunctionComponent } from "react";
import { Marker, Rectangle, Tooltip, useMap } from "react-leaflet";
import { LatLngBounds, LatLngBoundsExpression } from "leaflet";

function toLatLngBounds(expression: LatLngBoundsExpression) {
  if (expression instanceof LatLngBounds) {
    return expression;
  } else {
    return new LatLngBounds(expression);
  }
}

function getWidth(bounds: LatLngBounds) {
  return Math.abs(bounds.getEast() - bounds.getWest());
}

function getHeight(bounds: LatLngBounds) {
  return Math.abs(bounds.getNorth() - bounds.getSouth());
}

function getDimensions(bounds: LatLngBounds) {
  return [getWidth(bounds), getHeight(bounds)];
}

/**
 * Component to display an area with an optional label tooltip
 * inside a Leaflet map container.
 *
 * Based on the initial map bounds and the area size,
 * the area is either shown as rectangle or as marker.
 */
export const Area: FunctionComponent<{
  area: LatLngBoundsExpression;
  label?: string;
}> = ({ area, label }) => {
  const map = useMap();
  const bounds = map.getBounds();
  const areaBounds = toLatLngBounds(area);
  const [boundsWidth, boundsHeight] = getDimensions(bounds);
  const [areaWidth, areaHeight] = getDimensions(areaBounds);

  const tooltip = <Tooltip direction="top">{label}</Tooltip>;

  if (areaWidth < 0.1 * boundsWidth && areaHeight < 0.1 * boundsHeight) {
    const center = areaBounds.getCenter();
    return <Marker position={center}>{tooltip}</Marker>;
  } else {
    return <Rectangle bounds={areaBounds}>{tooltip}</Rectangle>;
  }
};
