import Api from ".";
import { FieldNameSnippet } from "../model";
import { CbuUnitType, WrappedSearchResponse } from "./model";
import { parseWrappedSearchResponse } from "./parsers";

export default class FieldNamesApi extends Api {
  async getFieldNames(
    types: Iterable<CbuUnitType> = Object.values(CbuUnitType),
    start?: number,
    rows?: number
  ): Promise<Array<FieldNameSnippet>> {
    const query = `cbuUnitTypes.actual:(${Array.from(types).join(" ")})`;
    const result = await this.endpoint.get<WrappedSearchResponse>("search", {
      params: {
        q: query,
        wt: "json",
        start,
        rows,
      },
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    return parseWrappedSearchResponse(result.data);
  }

  async getMarkings(start?: number, rows?: number) {
    return this.getFieldNames([CbuUnitType.Marking], start, rows);
  }

  async getMaps(start?: number, rows?: number) {
    return this.getFieldNames([CbuUnitType.Map], start, rows);
  }

  async getFieldName(id: string) {
    const result = await this.endpoint.get(`objects/${id}`, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    });
    return result.data;
  }
}
