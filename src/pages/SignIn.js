import React from "react";
import "../styles/SignIn.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInYup } from "../utils/schema";
import { Button, Card, Space } from "antd";
import InputField from "../components/FormFields/InputField";
import PasswordField from "../components/FormFields/PasswordField";

function SignIn() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInYup),
    mode: "onBlur",
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    alert("welcome!");
    console.log(data);
  };

  const goToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="sign-in">
      <Card title="Welcome to your ToDo Manager!" size="large">
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
              <Button onClick={handleSubmit(onSubmit)}>Sign In</Button>
              <Button type="link" onClick={goToSignUp}>
                Wanna make a new account?
              </Button>
            </section>
          </Space>
        </form>
      </Card>
    </div>
  );
}

export default SignIn;
