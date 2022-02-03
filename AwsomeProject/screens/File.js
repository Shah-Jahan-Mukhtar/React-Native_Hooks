import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const File = () => {
  const [array, setArray] = useState(["ali", "hamza", "danish"]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Text>First Array: {array[0]}</Text>
      <Text>Sec Array: {array[1]}</Text>
      <Text>3rd Array: {array[2]}</Text>

      <TouchableOpacity
        onPress={() =>
          setArray([
            (array[0] = "Abubakar"),
            (array[1] = "Bilal"),
            (array[2] = "Shahzaib"),
          ])
        }
      >
        <Text>Update the Array</Text>
      </TouchableOpacity>
    </View>
  );
};

export default File;
