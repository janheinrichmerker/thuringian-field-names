import Api from ".";
import { FieldNameSnippet } from "../model";
import { CbuUnitType, WrappedSearchResponse } from "./model";
import { parseWrappedSearchResponse } from "./parsers";

export default class FieldNamesApi extends Api {
  async searchFieldNames(
    query?: string,
    types: Iterable<CbuUnitType> = Object.values(CbuUnitType),
    start?: number,
    rows?: number
  ): Promise<Array<FieldNameSnippet>> {
    const typeQuery = "objectType:cbu";
    const typesQuery = types
      ? `cbuUnitTypes.actual:(${Array.from(types).join(" ")})`
      : "";
    const filterQuery = [typeQuery, typesQuery].join(" AND ");
    const result = await this.endpoint.get<WrappedSearchResponse>("search", {
      params: {
        q: query ?? "*",
        fq: filterQuery,
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

  async getFieldNames(
    types: Iterable<CbuUnitType> = Object.values(CbuUnitType),
    start?: number,
    rows?: number
  ): Promise<Array<FieldNameSnippet>> {
    return await this.searchFieldNames(undefined, types, start, rows);
  }

  async getMarkings(start?: number, rows?: number) {
    return this.getFieldNames([CbuUnitType.Marking], start, rows);
  }

  async getCards(start?: number, rows?: number) {
    return this.getFieldNames([CbuUnitType.Card], start, rows);
  }
}
