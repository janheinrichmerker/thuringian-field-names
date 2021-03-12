import { FunctionComponent } from "react";
import { TileLayer } from "react-leaflet";

type Variant = "color" | "monochrome";

function tilesUrl(variant?: Variant) {
  if (variant === "monochrome") {
    return "https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png";
  } else {
    return "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  }
}

/**
 * Component to include an OpenStreetMap layer
 * inside a Leaflet map container.
 */
export const OpenStreetMapLayer: FunctionComponent<{
  variant?: Variant;
}> = ({ variant }) => {
  const url = tilesUrl(variant);
  return <TileLayer attribution="&copy; OpenStreetMap" url={url} />;
};
