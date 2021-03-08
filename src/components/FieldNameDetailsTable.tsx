import { Component, Fragment } from "react";
import { Table } from "react-bootstrap";
import { FormattedDate } from "react-intl";
import { FieldName } from "../model";
import { FormattedFieldNameType, GndLink } from ".";
import { FormattedLicense } from "./FormattedLicense";
import { FormattedGeoCoordinates } from "./FormattedGeoCoordinates";

export class FieldNameDetailsTable extends Component<{
  fieldName: FieldName;
}> {
  render() {
    return (
      <Fragment>
        <Table>
          <tbody>
            <tr>
              <th>Type</th>
              <td>
                <FormattedFieldNameType type={this.props.fieldName.type} />
              </td>
            </tr>
            <tr>
              <th>GND number</th>
              <td>
                <GndLink gndNumber={this.props.fieldName.gndNumber} />
              </td>
            </tr>
            <tr>
              <th>Location</th>
              <td>
                From{" "}
                <FormattedGeoCoordinates
                  coordinates={this.props.fieldName.area.from}
                />{" "}
                to{" "}
                <FormattedGeoCoordinates
                  coordinates={this.props.fieldName.area.to}
                />
              </td>
            </tr>
            <tr>
              <th>Last updated</th>
              <td>
                <FormattedDate
                  value={this.props.fieldName.lastModification.date}
                />{" "}
                by {this.props.fieldName.lastModification.author}
              </td>
            </tr>
            <tr>
              <th>Created</th>
              <td>
                <FormattedDate value={this.props.fieldName.creation.date} /> by{" "}
                {this.props.fieldName.creation.author}
              </td>
            </tr>
            <tr>
              <th>ID</th>
              <td>{this.props.fieldName.id}</td>
            </tr>
            <tr>
              <th>License</th>
              <td>
                <FormattedLicense license={this.props.fieldName.license} />
              </td>
            </tr>
          </tbody>
        </Table>
      </Fragment>
    );
  }
}
