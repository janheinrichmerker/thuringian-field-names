import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

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
