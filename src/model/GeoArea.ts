import { GeoCoordinates } from ".";

/**
 * Geographic area, described by two corner points.
 */
export interface GeoArea {
  from: GeoCoordinates;
  to: GeoCoordinates;
}
