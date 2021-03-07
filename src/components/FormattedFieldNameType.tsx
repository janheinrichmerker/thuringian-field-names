import { Component } from "react";
import { injectIntl, WrappedComponentProps } from "react-intl";
import { FieldNameType } from "../model";

class ConnectedFormattedFieldNameType extends Component<
  WrappedComponentProps & {
    type: FieldNameType;
  }
> {
  render() {
    const type = this.props.type;
    const formatMessage = this.props.intl.formatMessage;

    if (type === FieldNameType.Map) {
      return formatMessage({ id: "fieldName.type.map" });
    } else if (type === FieldNameType.Marking) {
      return formatMessage({ id: "fieldName.type.marking" });
    } else {
      return formatMessage({ id: "fieldName.type.unknown" });
    }
  }
}

export const FormattedFieldNameType = injectIntl(
  ConnectedFormattedFieldNameType
);
