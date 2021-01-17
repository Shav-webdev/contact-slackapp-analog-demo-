import React from "react";
import classes from "./AuthPage.module.scss";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { authLogin } from "../../redux/actions/auth.actions";
import { useDispatch } from "react-redux";
import Page from "../layout/Page";
import HomeBtn from "../../components/homeBtn/HomeBtn";
import { withNamespaces } from "react-i18next";

const AuthLogin = ({ t }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = values => {
    const { setFieldsValue } = form;
    dispatch(authLogin(values));
    setFieldsValue({
      email: "",
      password: "",
    });
  };

  return (
    <Page>
      <div className={classes["container"]}>
        <div className={classes["login_section"]}>
          <Form
            name="normal_login"
            className="login-form"
            form={form}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                type="email"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder={t("Email")}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
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
                {t("Login")}
              </Button>
              <HomeBtn t={t} />
            </Form.Item>
          </Form>
        </div>
      </div>
    </Page>
  );
};

export default React.memo(withNamespaces()(AuthLogin));
