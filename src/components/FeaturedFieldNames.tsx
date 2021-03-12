import { FunctionComponent } from "react";
import { CardColumns } from "react-bootstrap";
import { FieldNameSnippet } from "../model";
import { FeaturedFieldName, FeaturedTeaser } from ".";

/**
 * Component for displaying multiple featured field name snippets in columns.
 */
export const FeaturedFieldNames: FunctionComponent<{
  snippets: Array<FieldNameSnippet>;
}> = ({ snippets }) => {
  return (
    <CardColumns>
      {snippets.map((snippet) => (
        <FeaturedFieldName snippet={snippet} key={snippet.id} />
      ))}
      <FeaturedTeaser key="teaser" />
    </CardColumns>
  );
};
