import { useState } from "react";

import "./App.css";
import { Image, AutoCenter, Input, Form, Button, Card } from "antd-mobile";

function App() {
  const [value, setValue] = useState("");

  const demoSrc =
    "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60";

  return (
    <>
    <div style={{ width: "100vw", height: "40px" }}>
      
    </div>
      <AutoCenter style={{ marginTop: "40px" }}>
        <Image src={demoSrc} width={200} height={200} />
      </AutoCenter>
      <div style={{margin: "0 auto", width: "80%", marginTop: "20px"}}>
      <Card>
        <Form layout="vertical" style={{ marginTop: "20px", width: "100%" }}>
          <Form.Item label="Email" name="email">
            <Input placeholder="Please key in email address" clearable />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input
              placeholder="Please key in pssword"
              clearable
              type="password"
            />
          </Form.Item>
        </Form>
        <Button
          block
          color="danger"
          size="large"
          shape='rounded'
          style={{ marginTop: "20px" }}
        >
          Login
        </Button>
        </Card>
        </div>
    </>
  );
}

export default App;
