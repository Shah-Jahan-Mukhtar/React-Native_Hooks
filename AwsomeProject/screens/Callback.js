import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useCallback } from "react";

const Callback = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <Text>Count:{count}</Text>
      <TouchableOpacity onPress={handleIncrement}>
        <Text>Click to update</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Callback;
