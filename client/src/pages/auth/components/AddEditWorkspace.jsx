import React from "react";
import { Row, Col, Button } from "antd";
import { Formik, Form, Field, ErrorMessage } from "formik";
import classes from "../AuthPage.module.scss";
import { useSelector } from "react-redux";

const AddEditWorkspace = ({
  handleCancel,
  handleOk,
  type,
  currentEditableData,
  t,
}) => {
  const userId = useSelector(state => state.auth.authData.userId);
  const validateFields = values => {
    const errors = {};
    if (!values.name) {
      errors.name = t("Field is required.");
    } else if (!values.subDomain) {
      errors.subDomain = t("Field is required.");
    }
    return errors;
  };

  let initialValues;

  if (currentEditableData) {
    console.log("currentEditableData", currentEditableData);
    initialValues = { ...currentEditableData };
  } else {
    initialValues = {
      name: "",
      subDomain: "",
      userId,
    };
  }

  const handleSubmitForm = (values, { setSubmitting, resetForm }) => {
    console.log("userId", userId);
    console.log("values", values);
    let data;
    if (type === "create") {
      data = {
        name: values.name,
        subDomain: values.subDomain,
        userId,
      };
      handleOk(data);
    }else {
      data = {
        name: values.name,
        subDomain: values.subDomain,
        userId,
      };
      handleOk(data, values.id);
    }

  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validateFields}
      onSubmit={handleSubmitForm}
    >
      {({ errors, handleSubmit, isSubmitting, getFieldMeta }) => (
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs={24}>
              <div
                className={`${classes["input-field"]} ${
                  getFieldMeta("name").touched && errors.name
                    ? classes["input-error"]
                    : ""
                }`}
              >
                <label className={classes["input-field-label"]} htmlFor="name">
                  {t("Workspace name")}
                  <Field
                    className="ant-input"
                    type="text"
                    name="name"
                    placeholder={t("Workspace name")}
                  />
                </label>

                <ErrorMessage name="name" />
              </div>
            </Col>
            <Col xs={24}>
              <div
                className={`${classes["input-field"]} ${
                  getFieldMeta("subDomain").touched && errors.name
                    ? classes["input-error"]
                    : ""
                }`}
              >
                <label
                  className={classes["input-field-label"]}
                  htmlFor="subDomain"
                >
                  {t("Subdomain")}
                  <Field
                    className="ant-input"
                    type="text"
                    name="subDomain"
                    placeholder={t("Subdomain")}
                  />
                </label>

                <ErrorMessage name="subDomain" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={24} className={classes["modal-btns-wrapper"]}>
              <Button onClick={handleCancel}>{t("cancel")}</Button>
              <Button htmlType="submit" type="primary" disabled={isSubmitting}>
                {type === "create" ? t("create") : t("edit")}
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default React.memo(AddEditWorkspace);
