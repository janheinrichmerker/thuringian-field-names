import { api } from ".";
import { CbuUnitType, WrappedSearchResponse } from "./model";

export async function search(types: Set<CbuUnitType>) {
  const query = `cbuUnitTypes.actual:(${Array.from(types).join(" ")})`;
  const result = await api.get<WrappedSearchResponse>("search", {
    params: {
      q: query,
      wt: "json",
    },
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
  return result.data;
}

export async function getMarkings() {
  return search(new Set([CbuUnitType.Marking]));
}

export async function getMaps() {
  return search(new Set([CbuUnitType.Map]));
}

export async function getFieldName(id: string) {
  const result = await api.get(`objects/${id}`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
  return result.data;
}
