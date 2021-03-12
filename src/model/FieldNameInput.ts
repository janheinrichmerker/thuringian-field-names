import { GeoArea, License } from ".";
import { FieldNameType } from "./FieldNameType";

/**
 * Properties of a field name that are needed
 * for creating a new field name.
 */
export interface FieldNameInput {
  /**
   * Identification number in DNB's Gemeinsame Normdatei.
   */
  gndNumber?: string;
  title: string;
  type: FieldNameType;
  area?: GeoArea;
  license: License;
}
