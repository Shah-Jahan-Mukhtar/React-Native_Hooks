import { View, Text } from "react-native";
import React, { useState } from "react";

const File = () => {
  const [array, setArray] = useState(["ali", "hamza", "danish"]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      {array.map((item) => (
        <Text>{item}</Text>
      ))}
    </View>
  );
};

export default File;
