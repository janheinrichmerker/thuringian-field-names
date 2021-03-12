import Api from ".";
import { FieldName } from "../model";
import { parseStringPromise } from "xml2js";
import { WrappedMyCoreObject } from "./model";
import { parseWrappedMyCoreObject } from "./parsers";

/**
 * API endpoint for fetching details of a single field name.
 */
export default class FieldNamesApi extends Api {
  /**
   * Fetch a single field name by ID.
   *
   * @param id The field name's unique ID.
   *
   * @returns Field name details.
   */
  async getFieldName(id: string): Promise<FieldName> {
    // Fetch HTTP response from API server.
    const result = await this.endpoint.get(`objects/${id}`, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
      responseType: "text",
    });

    // Parse response XML to JavaScript object.
    // That should have type `WrappedMyCoreObject`.
    const wrapped: WrappedMyCoreObject = await parseStringPromise(result.data, {
      attrkey: "attributes",
      charkey: "content",
    });

    // Parse `WrappedMyCoreObject` to the internal data model for field names.
    const fieldName: FieldName = parseWrappedMyCoreObject(wrapped);
    return fieldName;
  }
}
