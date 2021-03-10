import { FunctionComponent } from "react";
import { Form, Button, Alert, Spinner, Col, FormGroup } from "react-bootstrap";
import { useIntl } from "react-intl";
import { FormikErrors, useFormik } from "formik";
import { FieldNameInput, FieldNameType, License } from "../../model";
import { formatFieldNameType, formatLicense } from "../../utils";
import { AsValues, WithFlattenedGeoArea } from "./utils";
import { FormattedLicense } from "../format";

interface Props {
  submit: (values: FieldNameInput) => void;
  error?: string;
  loading: boolean;
}

type Values = AsValues<WithFlattenedGeoArea<FieldNameInput>>;

const SubmitFormError: FunctionComponent<{ error?: string }> = ({ error }) => {
  if (!error) return null;
  return <Alert variant="danger">{error}</Alert>;
};

const SubmitFormLoading: FunctionComponent<{ loading: boolean }> = ({
  loading,
}) => {
  if (!loading) return null;
  return (
    <Spinner as="span" animation="border" role="status" size="sm">
      <span className="sr-only">Submitting...</span>
    </Spinner>
  );
};

function isGndNumber(value: string) {
  try {
    parseInt(value.replaceAll("-", ""));
    return true;
  } catch {
    return false;
  }
}

function isLatitude(value: string) {
  try {
    const latitude = parseInt(value);
    return latitude >= -90 && latitude <= 90;
  } catch {
    return false;
  }
}

function isLongitude(value: string) {
  try {
    const longitude = parseInt(value);
    return longitude >= -90 && longitude <= 90;
  } catch {
    return false;
  }
}

function validate(values: Values) {
  let errors: FormikErrors<Values> = {};
  const title = values.title;
  if (!title) {
    errors.title = "Required";
  } else if (title.length < 10) {
    errors.title = "Must be at least 10 characters.";
  }
  if (!values.type || values.type === "required") {
    errors.type = "Required";
  }
  if (values.gndNumber && !isGndNumber(values.gndNumber)) {
    errors.gndNumber = "Must only contain numbers and dashes.";
  }
  if (!values.license || values.license === "required") {
    errors.license = "Required";
  }
  if (values.north && !isLatitude(values.north)) {
    errors.north = "Must be from -90 to 90.";
  }
  if (values.south && !isLatitude(values.south)) {
    errors.south = "Must be from -90 to 90.";
  }
  if (values.east && !isLongitude(values.east)) {
    errors.east = "Must be from -180 to 180.";
  }
  if (values.west && !isLongitude(values.west)) {
    errors.west = "Must be from -180 to 180.";
  }
  return errors;
}

function convert(values: Values): FieldNameInput {
  return {
    title: values.title!,
    type: values.type! as FieldNameType,
    license: values.license! as License,
    gndNumber: values.gndNumber!,
    area: {
      from: {
        latitude: parseFloat(values.north!),
        longitude: parseFloat(values.east!),
      },
      to: {
        latitude: parseFloat(values.south!),
        longitude: parseFloat(values.west!),
      },
    },
  };
}

export const SubmitForm: FunctionComponent<Props> = ({
  submit,
  error,
  loading,
}) => {
  const intl = useIntl();

  const {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
  } = useFormik<Values>({
    initialValues: {},
    validate,
    onSubmit: (values) => {
      submit(convert(values));
    },
  });
  return (
    <Form noValidate onSubmit={handleSubmit}>
      <SubmitFormError error={error} />
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
          isValid={touched.title && !errors.title}
          isInvalid={!!errors.title}
        />
        <Form.Text className="text-muted">
          Please stick to the original local spelling.
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {errors.title}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Type</Form.Label>
        <Form.Control
          type="text"
          name="type"
          value={values.type}
          onChange={handleChange}
          isValid={touched.type && !errors.type}
          isInvalid={!!errors.type}
          as="select"
        >
          <option value="">Choose...</option>
          {[FieldNameType.Marking, FieldNameType.Map].map((type) => {
            // FIXME
            return (
              <option key={type} value={type} selected={type === values.type}>
                {formatFieldNameType(intl, type)}
              </option>
            );
          })}
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.type}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>GND number</Form.Label>
        <Form.Control
          type="text"
          name="gndNumber"
          value={values.gndNumber}
          onChange={handleChange}
          isValid={touched.gndNumber && !errors.gndNumber}
          isInvalid={!!errors.gndNumber}
        />
        <Form.Text className="text-muted">
          If the place is already linked in DNB's Integrated Authority File,
          please specify the GND number here. Otherwise leave it empty.
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {errors.gndNumber}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>License</Form.Label>
        <Form.Control
          type="text"
          name="license"
          value={values.license}
          onChange={handleChange}
          isValid={touched.license && !errors.license}
          isInvalid={!!errors.license}
          as="select"
        >
          <option value="">Choose...</option>
          {[License.CcByNcSa40, License.Unknown].map((license) => {
            // FIXME
            return (
              <option
                key={license}
                value={license}
                selected={license === values.license}
              >
                {formatLicense(intl, license)}
              </option>
            );
          })}
        </Form.Control>
        <Form.Text className="text-muted">
          Under which license do you want to publish your record? We recommend
          the free <FormattedLicense license={License.CcByNcSa40} /> license.
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {errors.license}
        </Form.Control.Feedback>
      </Form.Group>
      <FormGroup>
        {/* TODO Let users select between defining an area and a single point. */}
        <Form.Label>Coordinates (Area)</Form.Label>
        <Form.Text className="text-muted" style={{ marginBottom: "1ex" }}>
          Which place is described by the field name? Please describe the area
          boundaries as precise as you can. Most GPS devices show you the exact
          position as latitude and longitude.
        </Form.Text>
        <Form.Row>
          <Form.Group as={Col} md="6" lg="3">
            <Form.Label>North</Form.Label>
            <Form.Control
              type="number"
              name="north"
              placeholder="Latitude"
              value={values.north || ""}
              onChange={handleChange}
              isValid={touched.north && !errors.north}
              isInvalid={!!errors.north}
            />
            <Form.Text className="text-muted">
              Northern boundary latitude.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              {errors.north}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" lg="3">
            <Form.Label>East</Form.Label>
            <Form.Control
              type="number"
              name="east"
              placeholder="Longitude"
              value={values.east || ""}
              onChange={handleChange}
              isValid={touched.east && !errors.east}
              isInvalid={!!errors.east}
            />
            <Form.Text className="text-muted">
              Eastern boundary longitude.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              {errors.east}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" lg="3">
            <Form.Label>South</Form.Label>
            <Form.Control
              type="number"
              name="south"
              placeholder="Latitude"
              value={values.south || ""}
              onChange={handleChange}
              isValid={touched.south && !errors.south}
              isInvalid={!!errors.south}
            />
            <Form.Text className="text-muted">
              Southern boundary latitude.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              {errors.south}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" lg="3">
            <Form.Label>West</Form.Label>
            <Form.Control
              type="number"
              name="west"
              placeholder="Longitude"
              value={values.west || ""}
              onChange={handleChange}
              isValid={touched.west && !errors.west}
              isInvalid={!!errors.west}
            />
            <Form.Text className="text-muted">
              Western boundary longitude.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              {errors.west}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
      </FormGroup>
      <Button variant="primary" type="submit">
        Submit
        <SubmitFormLoading loading={loading} />
      </Button>
    </Form>
  );
};
