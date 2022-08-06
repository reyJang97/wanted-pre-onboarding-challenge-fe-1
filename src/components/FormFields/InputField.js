import React from "react";
import { Controller } from "react-hook-form";
import { Input } from "antd";
import { ErrorMessage } from "@hookform/error-message";

function InputField({ control, errors, label }) {
  return (
    <section>
      <label htmlFor="email">{label}</label>
      <Controller
        control={control}
        name="email"
        render={({ field }) => <Input {...field} />}
      />
      <ErrorMessage
        errors={errors}
        name="email"
        render={({ message: validMessage }) => (
          <p style={{ color: "red" }}>{validMessage}</p>
        )}
      />
    </section>
  );
}

export default InputField;
