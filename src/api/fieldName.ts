import Api from ".";
import { FieldName } from "../model";
import { parseStringPromise } from "xml2js";
import { WrappedMyCoreObject } from "./model";
import { parseWrappedMyCoreObject } from "./parsers";

export default class FieldNamesApi extends Api {
  async getFieldName(id: string): Promise<FieldName> {
    const result = await this.endpoint.get(`objects/${id}`, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
      responseType: "text",
    });

    const wrapped: WrappedMyCoreObject = await parseStringPromise(result.data, {
      attrkey: "attributes",
      charkey: "content",
    });

    const fieldName = parseWrappedMyCoreObject(wrapped);
    return fieldName;
  }
}
