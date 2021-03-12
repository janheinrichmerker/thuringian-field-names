import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

/**
 * Component for highlighting a field name in text.
 * 
 * The field name links to a search of either 
 * the field name itself or a custom query.
 */
export const FieldNameHighlight: FunctionComponent<{
  query?: string;
  children: string;
}> = ({ query, children }) => {
  const queryOrChild = query ?? children;
  const path = `/search/${queryOrChild.replaceAll("-", "")}`;
  return (
    <Link to={path}>
      <em>{children}</em>
    </Link>
  );
};
