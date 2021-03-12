/**
 * Internal user representation.
 */
export interface User {
  name: string;
  email: string;
  // TODO The password should never be stored as plain text.
  password: string;
}
