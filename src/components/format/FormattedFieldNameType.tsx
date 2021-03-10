import { FunctionComponent } from "react";
import { FormattedMessage } from "react-intl";
import { FieldNameType } from "../../model";
import { getFieldNameTypeMessageDescriptor } from "../../utils";

export const FormattedFieldNameType: FunctionComponent<{
  type: FieldNameType;
}> = ({ type }) => {
  const descriptor = getFieldNameTypeMessageDescriptor(type);
  return <FormattedMessage id={descriptor.id} />;
};
