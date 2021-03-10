import { Fragment, FunctionComponent } from "react";
import { Table } from "react-bootstrap";
import { FormattedDate } from "react-intl";
import { FieldName } from "../model";
import {
  FormattedFieldNameType,
  GndLink,
  FormattedLicense,
  FormattedGeoCoordinates,
} from ".";
import { Link } from "react-router-dom";

export const FieldNameDetailsTable: FunctionComponent<{
  fieldName: FieldName;
}> = ({ fieldName }) => {
  return (
    <Fragment>
      <Table>
        <tbody>
          <tr>
            <th>Type</th>
            <td>
              <FormattedFieldNameType type={fieldName.type} />
            </td>
          </tr>
          <tr>
            <th>GND number</th>
            <td>
              <GndLink gndNumber={fieldName.gndNumber} />
            </td>
          </tr>
          {fieldName.area ? (
            <tr>
              <th>Location</th>
              <td>
                From{" "}
                <FormattedGeoCoordinates coordinates={fieldName.area.from} /> to{" "}
                <FormattedGeoCoordinates coordinates={fieldName.area.to} />
              </td>
            </tr>
          ) : undefined}
          <tr>
            <th>Last updated</th>
            <td>
              <FormattedDate
                value={fieldName.lastModification.date}
                dateStyle="long"
                timeStyle="short"
              />{" "}
              by {fieldName.lastModification.author}
            </td>
          </tr>
          <tr>
            <th>Created</th>
            <td>
              <FormattedDate
                value={fieldName.creation.date}
                dateStyle="long"
                timeStyle="short"
              />{" "}
              by {fieldName.creation.author}
            </td>
          </tr>
          <tr>
            <th>ID</th>
            <td>{fieldName.id}</td>
          </tr>
          <tr>
            <th>License</th>
            <td>
              <FormattedLicense license={fieldName.license} />
            </td>
          </tr>
          {fieldName.childrenIds.length > 0 ? (
            <tr>
              <th>Children</th>
              <td>
                {fieldName.childrenIds.map((id, index) => {
                  const link = <Link to={`/details/${id}`}>{index + 1}</Link>;
                  if (index > 0) {
                    return <Fragment>, {link}</Fragment>;
                  } else {
                    return link;
                  }
                })}
              </td>
            </tr>
          ) : undefined}
        </tbody>
      </Table>
    </Fragment>
  );
};
