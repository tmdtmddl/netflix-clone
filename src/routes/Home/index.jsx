import React, { useState } from "react";
import Layout from "../../components/Layout";
import { useTextInput } from "../../components/ui/TextInput";

const Home = () => {
  const [text, setText] = useState("");
  const Text = useTextInput();
  return (
    <div>
      <h1>Home</h1>
      <Text.Input value={text} onChangeText={setText} id="text" />
    </div>
  );
};

export default Home;
