import { FieldNameSnippet, FieldNameType } from "../model";
import {
  CbuUnitType,
  SearchDocument,
  SearchResponse,
  WrappedSearchResponse,
} from "./model";

export function parseWrappedSearchResponse(
  raw: WrappedSearchResponse
): Array<FieldNameSnippet> {
  return parseSearchResponse(raw.response);
}

function parseSearchResponse(raw: SearchResponse): Array<FieldNameSnippet> {
  return raw.docs.map(parseSearchDocument);
}

function parseCbuUnitType(raw: CbuUnitType): FieldNameType {
  switch (raw) {
    case CbuUnitType.Map:
      return FieldNameType.Map;
    case CbuUnitType.Marking:
      return FieldNameType.Marking;
  }
}

function parseSearchDocument(raw: SearchDocument): FieldNameSnippet {
  return {
    id: raw["id"],
    gndNumber: raw["place.type.gnd"][0],
    title: raw["title"][0],
    type: parseCbuUnitType(raw["cbuUnitTypes.actual"]),
    creation: {
      date: raw["created"],
      author: raw["createdby"][0],
    },
    lastModification: {
      date: raw["modified"],
      author: raw["modifiedby"],
    },
  };
}
