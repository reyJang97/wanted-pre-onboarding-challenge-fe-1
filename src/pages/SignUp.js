import React from "react";
import "../styles/SignUp.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpYup } from "../utils/schema";
import axios from "axios";
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

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userData = {
      email: data.email,
      password: data.password,
    };
    console.log(userData);

    try {
      const res = await axios.post(
        "http://localhost:8080/users/create",
        userData
      );
      if (res.statusText === "OK") {
        alert(res.data.message);
        localStorage.setItem("token", res.data.token);
        navigate("/");
      }
    } catch (error) {
      alert(error);
    }
  };

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
              <Button type="primary" onClick={handleSubmit(onSubmit)} block>
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
