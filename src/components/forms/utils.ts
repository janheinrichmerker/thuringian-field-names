import { GeoArea, GeoCoordinates } from "../../model";

/**
 * An areas northern, eastern, southern, and western boundaries.
 *
 * We derive properties types from coordinate types.
 */
interface GeoAreaBounds {
  north: GeoCoordinates["latitude"];
  east: GeoCoordinates["longitude"];
  south: GeoCoordinates["latitude"];
  west: GeoCoordinates["longitude"];
}

/**
 * Type that has an area property.
 */
type HasGeoArea = { area: GeoArea };

/**
 * Replace area property with flattened properties,
 * which is useful for usage in automatic form validation.
 */
export type WithFlattenedGeoArea<T extends Partial<HasGeoArea>> =
  // Omit original property.
  Omit<T, "area"> &
    // Add flattened properties.
    (T extends HasGeoArea ? GeoAreaBounds : Partial<GeoAreaBounds>);

/**
 * Convert all properties to optional strings, but keep names intact.
 */
export type AsValues<T> = Partial<Record<keyof Partial<T>, string>>;
