import { FieldNameSnippet, GeoArea, License } from ".";

/**
 * Full field name details, including all details 
 * of a field name snippet.
 */
export interface FieldName extends FieldNameSnippet {
  area?: GeoArea;
  license: License;
  childrenIds: Array<string>;
  region?: string;
  utilisation?: string;
  evidence?: string;
}
