import Api from ".";
import { FieldNameInput } from "../model";

/**
 * Fake API for submitting field names.
 */
export default class SubmitApi extends Api {
  async submit(input: FieldNameInput): Promise<void> {
    // Here we would submit to backend and check if requirements are met.
    return;
  }
}
