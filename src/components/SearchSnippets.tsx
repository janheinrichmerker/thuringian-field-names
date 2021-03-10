import { FunctionComponent } from "react";
import { CardColumns } from "react-bootstrap";
import { FieldNameSnippet } from "../model";
import { SearchSnippet } from "../components";

export const SearchSnippets: FunctionComponent<{
  snippets: Array<FieldNameSnippet>;
}> = ({ snippets }) => {
  return (
    <CardColumns style={{ columnCount: 1 }}>
      {snippets.map((snippet) => (
        <SearchSnippet key={snippet.id} snippet={snippet} />
      ))}
    </CardColumns>
  );
};
