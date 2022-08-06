import React from "react";
import "../styles/SignUp.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpYup } from "../utils/schema";
import { Button, Card, Space } from "antd";
import InputField from "../components/FormFields/InputField";
import PasswordField from "../components/FormFields/PasswordField";

function SignUp() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpYup),
    mode: "onBlur",
  });

  return (
    <div className="sign-up">
      <Card title="Create your ToDo manager account" size="large">
        <form>
          <Space direction="vertical" size={20}>
            <section>
              <Space direction="vertical" size={15}>
                <InputField control={control} errors={errors} label={"email"} />
                <PasswordField
                  control={control}
                  errors={errors}
                  label={"password"}
                />
              </Space>
            </section>
            <section>
              <Button type="primary" block>
                Let's get started!
              </Button>
            </section>
          </Space>
        </form>
      </Card>
    </div>
  );
}

export default SignUp;
