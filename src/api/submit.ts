import Api from ".";
import { FieldNameInput } from "../model";

/**
 * Fake API for submitting field names.
 */
export default class SubmitApi extends Api {
  async submit(_input: FieldNameInput): Promise<true> {
    // Here we would submit to backend and check if requirements are met.
    return true; // TODO Fake delay.
  }
}
