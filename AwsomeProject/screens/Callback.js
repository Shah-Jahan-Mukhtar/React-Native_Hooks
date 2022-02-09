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
    alert("Koi chngi hai v aa?");
  }, [count]);
  useEffect(() => {
    alert("Bari jaldi a tnu");
  }, [Decrement]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Count:{count}</Text>
      <Text>Count:{Decrement}</Text>

      <TouchableOpacity onPress={handleIncrement}>
        <Text style={{ backgroundColor: "cyan", marginTop: 20, fontSize: 40 }}>
          Check Your habits
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDecrement}>
        <Text style={{ backgroundColor: "lime", marginTop: 20, fontSize: 40 }}>
          Check Your Wife Name
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Callback;
