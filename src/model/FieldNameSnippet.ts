import { FieldNameType, Modification } from ".";

export interface FieldNameSnippet {
  id: string;
  /**
   * Identification number in DNB's "Gemeinsame Normdatei".
   */
  gndNumber?: string;
  title: string;
  type: FieldNameType;
  creation: Modification;
  lastModification: Modification;
}
