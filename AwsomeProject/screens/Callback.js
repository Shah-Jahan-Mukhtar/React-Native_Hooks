import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useCallback } from "react";

const Callback = () => {
  const [count, setCount] = useState({});

  const handleIncrement = useCallback(() => {
    setCount({ name: "Shahjahan", name2: "Abubakar" });
  }, [count]);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <Text>Count:{count.name}</Text>
      <Text>Count:{count.name2}</Text>

      <TouchableOpacity onPress={handleIncrement}>
        <Text>Click to update</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Callback;
