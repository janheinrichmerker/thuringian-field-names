export enum Loading {
  Idle,
  Pending,
}

export enum FieldNameType {
  Marking = "marking", // Gemarkungen
  Map = "map", // Flurkarten
}

export interface Modification {
  date: Date;
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
  gndNumber: string;
  title: string;
  type: FieldNameType;
  creation: Modification;
  lastModification: Modification;
}

export interface FieldName extends FieldNameSnippet {
  area: GeoArea;
  license: License;
}

export interface User {
  name: string
  email: string
  password: string
}