import { FieldNameSnippet, GeoArea, License } from ".";

export interface FieldName extends FieldNameSnippet {
  area: GeoArea;
  license: License;
}
