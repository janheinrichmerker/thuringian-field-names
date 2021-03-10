import { FunctionComponent } from "react";
import { FormattedMessage } from "react-intl";
import { License } from "../../model";
import { getLicenseMessageDescriptor } from "../../utils";

export const FormattedLicense: FunctionComponent<{
  license: License;
}> = ({ license }) => {
  const descriptor = getLicenseMessageDescriptor(license);
  if (descriptor.url) {
    return (
      <a href={descriptor.url} target="_blank" rel="noreferrer">
        <FormattedMessage id={descriptor.id} />
      </a>
    );
  } else {
    return <FormattedMessage id={descriptor.id} />;
  }
};
