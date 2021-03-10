import { FunctionComponent } from "react";
import { Form, Button, Alert, Spinner, Col, FormGroup } from "react-bootstrap";
import { FormikErrors, useFormik } from "formik";
import { FieldName, FieldNameType, License } from "../../model";
import { FormattedFieldNameType, FormattedLicense } from "../format";

interface Props {
  submit: (values: FieldNameRequirements) => void;
  error?: string;
  loading: boolean;
}

/**
 * Fields that should be given to submit a new field name to the API.
 */
type FieldNameRequirements = Pick<FieldName, "title" | "type" | "license"> &
  Partial<Pick<FieldName, "gndNumber" | "area">>;

interface FlattenedGeoArea {
  fromLatitude: number;
  fromLongitude: number;
  toLatitude: number;
  toLongitude: number;
}

/**
 * Replace area property with flattened properties.
 */
type FieldNameWithFlattenedGeoArea = Omit<FieldNameRequirements, "area"> &
  FlattenedGeoArea;

type Values = Partial<FieldNameWithFlattenedGeoArea>;

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

function isLatitude(latitude: number) {
  return latitude >= -90 && latitude <= 90;
}

function isLongitude(longitude: number) {
  return longitude >= -90 && longitude <= 90;
}

export const SubmitForm: FunctionComponent<Props> = ({
  submit,
  error,
  loading,
}) => {
  function validate(values: Values) {
    let errors: FormikErrors<Values> = {};
    if (!values.title) {
      errors.title = "Required";
    }
    if (!values.type) {
      errors.type = "Required";
    }
    if (values.gndNumber && !isGndNumber(values.gndNumber)) {
      errors.gndNumber = "Must only contain numbers and dashes.";
    }
    if (!values.license) {
      errors.license = "Required";
    }
    if (values.fromLatitude && !isLatitude(values.fromLatitude)) {
      errors.fromLatitude = "Must be from -90 to 90.";
    }
    if (values.toLatitude && !isLatitude(values.toLatitude)) {
      errors.toLatitude = "Must be from -90 to 90.";
    }
    if (values.fromLongitude && !isLongitude(values.fromLongitude)) {
      errors.fromLongitude = "Must be from -180 to 180.";
    }
    if (values.toLongitude && !isLongitude(values.toLongitude)) {
      errors.toLongitude = "Must be from -180 to 180.";
    }
    return errors;
  }

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
      const fieldName: FieldNameRequirements = {
        title: values.title!,
        type: values.type!,
        license: values.license!,
        gndNumber: values.gndNumber!,
        area: {
          from: {
            latitude: values.fromLatitude!,
            longitude: values.fromLongitude!,
          },
          to: {
            latitude: values.toLatitude!,
            longitude: values.toLongitude!,
          },
        },
      };
      submit(fieldName);
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
          defaultValue="undefined"
        >
          <option value="undefined">Choose...</option>
          {[FieldNameType.Marking, FieldNameType.Map].map((type) => {
            // FIXME
            return (
              <option key={type} value={type} selected={type === values.type}>
                <FormattedFieldNameType type={type} />
              </option>
            );
          })}
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.type}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>GND-Number</Form.Label>
        <Form.Control
          type="text"
          name="gndNumber"
          value={values.gndNumber}
          onChange={handleChange}
          isValid={touched.gndNumber && !errors.gndNumber}
          isInvalid={!!errors.gndNumber}
        />
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
          defaultValue="undefined"
        >
          <option value="undefined">Choose...</option>
          {[License.CcByNcSa40, License.Unknown].map((license) => {
            // FIXME
            return (
              <option
                key={license}
                value={license}
                selected={license === values.license}
              >
                <FormattedLicense license={license} />
              </option>
            );
          })}
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.license}
        </Form.Control.Feedback>
      </Form.Group>
      <FormGroup>
        <Form.Label>Area</Form.Label>
        <Form.Row>
          <Form.Group as={Col} lg="6">
            <Form.Label>North-east corner</Form.Label>
            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>Latitude</Form.Label>
                <Form.Control
                  type="number"
                  name="northEastLatitude"
                  placeholder="Latitude"
                  value={values.fromLatitude || ""}
                  onChange={handleChange}
                  isValid={touched.fromLatitude && !errors.fromLatitude}
                  isInvalid={!!errors.fromLatitude}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.fromLatitude}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>Longitude</Form.Label>
                <Form.Control
                  type="number"
                  name="northEastLongitude"
                  placeholder="Longitude"
                  value={values.fromLongitude || ""}
                  onChange={handleChange}
                  isValid={touched.fromLongitude && !errors.fromLongitude}
                  isInvalid={!!errors.fromLongitude}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.fromLongitude}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
          </Form.Group>
          <Form.Group as={Col} lg="6">
            <Form.Label>South-west corner</Form.Label>
            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>Latitude</Form.Label>
                <Form.Control
                  type="number"
                  name="southWestLatitude"
                  placeholder="Latitude"
                  value={values.toLatitude || ""}
                  onChange={handleChange}
                  isValid={touched.toLatitude && !errors.toLatitude}
                  isInvalid={!!errors.toLatitude}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.toLatitude}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>Longitude</Form.Label>
                <Form.Control
                  type="number"
                  name="southWestLongitude"
                  placeholder="Longitude"
                  value={values.toLongitude || ""}
                  onChange={handleChange}
                  isValid={touched.toLongitude && !errors.toLongitude}
                  isInvalid={!!errors.toLongitude}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.toLongitude}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
          </Form.Group>
        </Form.Row>
      </FormGroup>
      <pre>{JSON.stringify(values, undefined, 2)}</pre>
      <Button variant="primary" type="submit">
        Submit
        <SubmitFormLoading loading={loading} />
      </Button>
    </Form>
  );
};
