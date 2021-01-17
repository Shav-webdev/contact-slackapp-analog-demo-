import React from "react";
import classes from "./AuthPage.module.scss";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { authRegister } from "../../redux/actions/auth.actions";
import { useDispatch } from "react-redux";
import Page from "../layout/Page";
import HomeBtn from "../../components/homeBtn/HomeBtn";
import { withNamespaces } from "react-i18next";

const AuthRegister = ({t}) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = values => {
    const { setFieldsValue } = form;
    dispatch(authRegister(values));
    setFieldsValue({
      fullName: "",
      email: "",
      password: "",
    });
  };

  return (
    <Page>
      <div className={classes["container"]}>
        <div className={classes["login_section"]}>
          <Form
            name="login"
            className="login-form"
            form={form}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="fullName"
              rules={[
                {
                  trim: true,
                  required: true,
                  message: "Please input your full name!",
                },
              ]}
            >
              <Input
                type="text"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder={t("Full name")}
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  trim: true,
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                type="email"
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder={t("Email")}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  trim: true,
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder={t("Password")}
              />
            </Form.Item>
            <Form.Item className={classes["auth-btn-wrapper"]}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                {t("Register")}
              </Button>
              <HomeBtn/>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Page>
  );
};

export default React.memo(withNamespaces()(AuthRegister))
