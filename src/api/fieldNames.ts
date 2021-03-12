import Api from ".";
import { FieldNameSnippet } from "../model";
import { CbuUnitType, WrappedSearchResponse } from "./model";
import { parseWrappedSearchResponse } from "./parsers";

/**
 * API endpoint for searching for field name snippets.
 * Field names can be searched by query or type.
 */
export default class FieldNamesApi extends Api {
  /**
   * Search for field names matching the query and filters.
   *
   * @param query Search query.
   * @param types Field name types to filter.
   * @param start Skip the first `start - 1` results (for pagination).
   * @param rows Number of results to return (for pagination).
   *
   * @returns List of field names, sorted by relevance for the query.
   */
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

  /**
   * Fetch field names matching the filters.
   *
   * @param types Field name types to filter.
   * @param start Skip the first `start - 1` results (for pagination).
   * @param rows Number of results to return (for pagination).
   *
   * @returns List of field names, sorted by relevance for the query.
   */
  async getFieldNames(
    types: Iterable<CbuUnitType> = Object.values(CbuUnitType),
    start?: number,
    rows?: number
  ): Promise<Array<FieldNameSnippet>> {
    return await this.searchFieldNames(undefined, types, start, rows);
  }

  /**
   * Fetch field name markings.
   *
   * @param start Skip the first `start - 1` results (for pagination).
   * @param rows Number of results to return (for pagination).
   *
   * @returns List of field names, sorted by relevance for the query.
   */
  async getMarkings(start?: number, rows?: number) {
    return this.getFieldNames([CbuUnitType.Marking], start, rows);
  }

  /**
   * Fetch field name cards.
   *
   * @param start Skip the first `start - 1` results (for pagination).
   * @param rows Number of results to return (for pagination).
   *
   * @returns List of field names, sorted by relevance for the query.
   */
  async getCards(start?: number, rows?: number) {
    return this.getFieldNames([CbuUnitType.Card], start, rows);
  }
}
