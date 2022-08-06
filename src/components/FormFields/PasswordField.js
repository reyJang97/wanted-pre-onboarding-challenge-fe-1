import React from "react";
import { Controller } from "react-hook-form";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { ErrorMessage } from "@hookform/error-message";

function PasswordField({ control, errors, label }) {
  return (
    <section>
      <label htmlFor="password">{label}</label>
      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <Input.Password
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            {...field}
          />
        )}
      />
      <ErrorMessage
        errors={errors}
        name="password"
        render={({ message: validMessage }) => (
          <p style={{ color: "red" }}>{validMessage}</p>
        )}
      />
    </section>
  );
}

export default PasswordField;
