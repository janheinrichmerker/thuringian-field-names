import { Component } from "react";
import { FormattedMessage } from "react-intl";
import { FieldNameType } from "../model";

export class FormattedFieldNameType extends Component<{
  type: FieldNameType;
}> {
  render() {
    const type = this.props.type;
    if (type === FieldNameType.Map) {
      return <FormattedMessage id="fieldName.type.map" />;
    } else if (type === FieldNameType.Marking) {
      return <FormattedMessage id="fieldName.type.marking" />;
    } else {
      return <FormattedMessage id="fieldName.type.unknown" />;
    }
  }
}
