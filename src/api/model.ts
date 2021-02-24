export interface WrappedSearchResponse {
  "response": SearchResponse;
}

export interface SearchResponse {
  "numFound": number;
  "start": number;
  "docs": Array<SearchDocument>;
}

export interface SearchDocument {
  "id": string;
  "title": Array<string>;
  "modified": Date;
  "modifiedby": string;
  "createdby": Array<string>;
  "created": Date;
  "cbuUnitTypes.actual": CbuUnitType;
  "place.type.gnd": Array<string>
}

export enum CbuUnitType {
  Marking = "33.0", // Gemarkungen
  Map = "33.1", // Flurkarten
}
