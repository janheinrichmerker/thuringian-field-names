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
  title: Array<string>;
  modified: Date;
  modifiedby: string;
  createdby: Array<string>;
  created: Date;
  "cbuUnitTypes.actual": CbuUnitType;
  "place.type.gnd": Array<string>;
}

export enum CbuUnitType {
  Marking = "33.0", // Gemarkungen
  Card = "33.1", // Flurkarten
}

export interface WrappedMyCoreObject {
  mycoreobject: MyCoreObject;
}

export interface MyCoreObject {
  structure: Array<MyCoreStructure>;
  metadata: Array<MyCoreMetadata>;
  service: Array<MyCoreService>;
  attributes: MyCoreObjectAttributes;
}

export interface MyCoreObjectAttributes {
  ID: string;
}

export interface MyCoreStructure {
  children: Array<MyCoreChildren>;
}

export interface MyCoreChildren {
  child: Array<MyCoreChild>;
}

export interface MyCoreChild {
  attributes: MyCoreChildAttributes;
}

export interface MyCoreChildAttributes {
  "xlink:href": string;
}

export interface MyCoreMetadata {
  "def.typeOfUnit": Array<MyCoreTypeOfUnitDef>;
  "def.title": Array<MyCoreTitleDef>;
  "def.place": Array<MyCorePlaceDef>;
  "def.coordinates": Array<MyCoreCoordinatesDef>;
  "def.license": Array<MyCoreLicenseDef>;
  "def.area": Array<MyCoreAreaDef>;
  "def.utilisation": Array<MyCoreUtilisationDef>;
  "def.evidence": Array<MyCoreEvidenceDef>;
}

export interface MyCoreTypeOfUnitDef {
  typeOfUnit: Array<MyCoreTypeOfUnit>;
}

export interface MyCoreTypeOfUnit {
  attributes: MyCoreTypeOfUnitAttributes;
}

export interface MyCoreTypeOfUnitAttributes {
  categid: MyCoreTypeOfUnitCategory;
}

type MyCoreTypeOfUnitCategory = CbuUnitType;

export interface MyCoreTitleDef {
  title: Array<MyCoreTitle>;
}

export interface MyCoreTitle {
  attributes: MyCoreTypeOfUnitAttributes;
  content: string;
}

export interface MyCoreTitleAttributes {
  type: "district"; // TODO which types possible
}

export interface MyCorePlaceDef {
  place: Array<MyCorePlace>;
}

export interface MyCorePlace {
  attributes: MyCorePlaceAttributes;
  content: string;
}

export interface MyCorePlaceAttributes {
  type: "gnd"; // TODO which types possible
}

export interface MyCoreCoordinatesDef {
  coordinates: Array<MyCoreCoordinates>;
}

export interface MyCoreCoordinates {
  content: string;
  attributes: MyCoreCoordinatesAttributes;
}

export interface MyCoreCoordinatesAttributes {
  type: MyCoreCoordinatesType;
}

export enum MyCoreCoordinatesType {
  West = "west",
  East = "east",
  North = "north",
  South = "south",
}

export interface MyCoreLicenseDef {
  license: Array<MyCoreLicense>;
}

export interface MyCoreLicense {
  attributes: MyCoreLicenseAttributes;
}

export interface MyCoreLicenseAttributes {
  categid: MyCoreLicenseType;
}

export enum MyCoreLicenseType {
  CcByNcSa40 = "cc_by-nc-sa_4.0",
}

export interface MyCoreAreaDef {
  area: Array<MyCoreArea>;
}

export interface MyCoreArea {
  content: string;
}

export interface MyCoreUtilisationDef {
  utilisation: Array<MyCoreUtilisation>;
}

export interface MyCoreUtilisation {
  content: string;
}

export interface MyCoreEvidenceDef {
  evidence: Array<MyCoreEvidence>;
}

export interface MyCoreEvidence {
  content: string;
}

export interface MyCoreService {
  servdates: Array<MyCoreServiceDates>;
  servflags: Array<MyCoreServiceFlags>;
}

export interface MyCoreServiceDates {
  servdate: Array<MyCoreServiceDate>;
}

export interface MyCoreServiceDate {
  attributes: MyCoreServiceDateAttributes;
  content: string;
}

export interface MyCoreServiceDateAttributes {
  type: MyCoreServiceDateType;
}

export enum MyCoreServiceDateType {
  Creation = "createdate",
  LastModification = "modifydate",
}

export interface MyCoreServiceFlags {
  servflag: Array<MyCoreServiceFlag>;
}

export interface MyCoreServiceFlag {
  attributes: MyCoreServiceFlagAttributes;
  content: string;
}

export interface MyCoreServiceFlagAttributes {
  type: MyCoreServiceFlagType;
}

export enum MyCoreServiceFlagType {
  Creation = "createdby",
  LastModification = "modifiedby",
}
