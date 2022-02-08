import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useCallback, useEffect } from "react";

const Callback = () => {
  const [count, setCount] = useState(0);
  const [Decrement, setDecrement] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const handleDecrement = useCallback(() => {
    setDecrement(Decrement - 1);
  }, [Decrement]);

  useEffect(() => {
    handleDecrement();
  }, [Decrement]);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <Text>Count:{count}</Text>
      <Text>Count:{Decrement}</Text>

      <TouchableOpacity onPress={handleIncrement}>
        <Text>Click to Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDecrement}>
        <Text>Click to Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Callback;
