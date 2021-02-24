import { api } from ".";
import { CbuUnitType, WrappedSearchResponse } from "./model";

export async function getFieldNames(
  types: Iterable<CbuUnitType> = Object.values(CbuUnitType),
  start?: number,
  rows?: number
) {
  const query = `cbuUnitTypes.actual:(${Array.from(types).join(" ")})`;
  const result = await api.get<WrappedSearchResponse>("search", {
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
  return result.data.response.docs;
}

export async function getMarkings(start?: number, rows?: number) {
  return getFieldNames([CbuUnitType.Marking], start, rows);
}

export async function getMaps(start?: number, rows?: number) {
  return getFieldNames([CbuUnitType.Map], start, rows);
}

export async function getFieldName(id: string) {
  const result = await api.get(`objects/${id}`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
  return result.data;
}
