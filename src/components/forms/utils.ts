import { GeoArea } from "../../model";

interface FlattenedGeoArea {
  fromLatitude: number;
  fromLongitude: number;
  toLatitude: number;
  toLongitude: number;
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
    (T extends HasGeoArea ? FlattenedGeoArea : Partial<FlattenedGeoArea>);

/**
 * Convert all properties to optional strings, but keep names intact.
 */
export type AsValues<T> = Partial<Record<keyof Partial<T>, string>>;
