import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInYup } from "./utils/schema";
import { Button, Card, Space } from "antd";
import InputField from "./components/FormFields/InputField";
import PasswordField from "./components/FormFields/PasswordField";

function App() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInYup),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    alert("Success");
  };

  return (
    <div className="App">
      <Card title="Welcome to your ToDo Manager!" size="large">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Space direction="vertical" size={20}>
            <section>
              <Space direction="vertical" size={15}>
                <InputField control={control} errors={errors} />
                <PasswordField control={control} errors={errors} />
              </Space>
            </section>
            <section>
              <Button>Sign In</Button>
              <Button type="link">Wanna make a new account?</Button>
            </section>
          </Space>
        </form>
      </Card>
    </div>
  );
}

export default App;
