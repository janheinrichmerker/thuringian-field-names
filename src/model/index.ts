export enum Loading {
  Idle,
  Pending,
}

export enum FieldNameType {
  Marking, // Gemarkungen
  Map, // Flurkarten
}

export interface Modification {
  timestamp: Date;
  author: string;
}

export interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

export interface GeoArea {
  from: GeoCoordinates;
  to: GeoCoordinates;
}

export enum License {
  CcByNcSa4,
  Unknown,
}

export interface FieldNameSnippet {
  id: string;
  /**
   * Identification number in DNB's "Gemeinsame Normdatei".
   */
  gndNumber: number;
  title: string;
  type: FieldNameType;
  creation: Modification;
  lastModification: Modification;
}

export interface FieldName extends FieldNameSnippet {
  area: GeoArea;
  license: License;
}
