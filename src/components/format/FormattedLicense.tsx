import { Component } from "react";
import { FormattedMessage } from "react-intl";
import { License } from "../../model";

export class FormattedLicense extends Component<{
  license: License;
}> {
  render() {
    const license = this.props.license;
    if (license === License.CcByNcSa40) {
      return (
        <a
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
          rel="noreferrer"
        >
          <FormattedMessage id="fieldName.license.ccByNcSa40" />
        </a>
      );
    } else {
      return <FormattedMessage id="fieldName.license.unknown" />;
    }
  }
}
