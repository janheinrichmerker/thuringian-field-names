import { FieldNameSnippet, GeoArea, License } from ".";

export interface FieldName extends FieldNameSnippet {
  area?: GeoArea;
  license: License;
  childrenIds: Array<string>;
  region?: string;
  utilitisation?: string;
  evidence?: string;
}
