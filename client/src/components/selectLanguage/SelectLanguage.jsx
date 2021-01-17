import React from "react";
import i18n from "../../i18n";
import { getI18n, withNamespaces } from "react-i18next";
import { Select } from "antd";
import classes from "./SelectLanguage.module.scss";

const { Option } = Select;

// const selectedLang = localStorage.getItem()

function handleChange(lng) {
  i18n.changeLanguage(lng);
}

const SelectLanguage = ({ t }) => (
  <div className={classes["select-wrapper"]}>
    <Select
      defaultValue={`${getI18n().language}`}
      style={{ width: 120 }}
      onChange={handleChange}
    >
      <Option value="hy">{t("arm")}</Option>
      <Option value="ru">{t("rus")}</Option>
      <Option value="en">{t("eng")}</Option>
    </Select>
  </div>
);

export default React.memo(withNamespaces()(SelectLanguage));
