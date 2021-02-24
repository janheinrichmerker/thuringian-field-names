export interface WrappedSearchResponse {
  response: SearchResponse;
}

export interface SearchResponse {
  numFound: number;
  start: number;
  docs: Array<SearchDocument>;
}

export interface SearchDocument {
  id: string;
  modified: Date;
  created: Date;
  cbuUnitTypes_actual: CbuUnitType;
}

export enum CbuUnitType {
  Marking = "33.0", // Gemarkungen
  Map = "33.1", // Flurkarten
}
