import { IntlShape, MessageDescriptor } from "react-intl";
import { FieldNameType, License } from "../model";

export interface FieldNameTypeMessageDescriptor extends MessageDescriptor {
  id: string | number;
}

/**
 * Get a message descriptor for displaying a field name type.
 */
export function getFieldNameTypeMessageDescriptor(
  type: FieldNameType
): FieldNameTypeMessageDescriptor {
  if (type === FieldNameType.Card) {
    return { id: "fieldName.type.card" };
  } else if (type === FieldNameType.Marking) {
    return { id: "fieldName.type.marking" };
  } else {
    return { id: "fieldName.type.unknown" };
  }
}

/**
 * Get an internationalized string describing a field name type.
 */
export function formatFieldNameType(intl: IntlShape, type: FieldNameType) {
  return intl.formatMessage(getFieldNameTypeMessageDescriptor(type));
}

export interface LicenseMessageDescriptor extends MessageDescriptor {
  id: string | number;
  url?: string;
}


/**
 * Get a message descriptor for displaying a license.
 */
export function getLicenseMessageDescriptor(
  license: License
): LicenseMessageDescriptor {
  if (license === License.CcByNcSa40) {
    return {
      id: "fieldName.license.ccByNcSa40",
      url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    };
  } else {
    return { id: "fieldName.license.unknown" };
  }
}

/**
 * Get an internationalized string describing a license.
 */
export function formatLicense(intl: IntlShape, license: License) {
  return intl.formatMessage(getLicenseMessageDescriptor(license));
}
