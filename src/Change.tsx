import React from "react";
import { Select, Space } from "antd";
import { useTranslation } from "react-i18next";

export default function BasicSelect() {
  const { i18n } = useTranslation();
  const language = [
    { value: "TH", label: "ไทย" },
    { value: "EN", label: "English" },
  ];

  const handleChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ textAlign: "right", margin: "1rem 1rem 2rem 0" }}>
      <Select
        defaultValue="EN"
        style={{ width: 120 }}
        onChange={handleChange}
        options={language}
      />
    </div>
  );
}
