/**
 * Modification authorship with timestamp.
 */
export interface Modification {
  date: Date; // TODO use serializable value here.
  author: string;
}
