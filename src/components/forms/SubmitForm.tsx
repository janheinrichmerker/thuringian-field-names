import { FunctionComponent } from "react";
import { Form, Button, Alert, Spinner, Col, FormGroup } from "react-bootstrap";
import { useIntl } from "react-intl";
import { FormikErrors, useFormik } from "formik";
import { FieldNameInput, FieldNameType, License } from "../../model";
import { formatFieldNameType, formatLicense } from "../../utils";
import { AsValues, WithFlattenedGeoArea } from "./utils";

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

function convert(values: Values): FieldNameInput {
  return {
    title: values.title!,
    type: values.type! as FieldNameType,
    license: values.license! as License,
    gndNumber: values.gndNumber!,
    area: {
      from: {
        latitude: parseFloat(values.fromLatitude!),
        longitude: parseFloat(values.fromLongitude!),
      },
      to: {
        latitude: parseFloat(values.toLatitude!),
        longitude: parseFloat(values.toLongitude!),
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
        <Form.Control.Feedback type="invalid">
          {errors.license}
        </Form.Control.Feedback>
      </Form.Group>
      <FormGroup>
        {/* TODO Let users select between defining an area and a single point. */}
        <Form.Label>Coordinates (Area)</Form.Label>
        <Form.Row>
          <Form.Group as={Col} lg="6">
            <Form.Label>North-east corner</Form.Label>
            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>Latitude</Form.Label>
                <Form.Control
                  type="number"
                  name="fromLatitude"
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
                  name="fromLongitude"
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
                  name="toLatitude"
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
                  name="toLongitude"
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
