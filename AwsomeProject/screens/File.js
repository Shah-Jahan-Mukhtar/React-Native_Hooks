import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const File = () => {
  const [array, setArray] = useState(["ali", "hamza", "danish"]);

  const updateArr = () => {
    setArray([...array, "Hamayun"]);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Text>First Array: {array}</Text>
      {/* <Text>2nd Array: {array[1]}</Text> */}

      {/* <Text>Sec Array: {array[1]}</Text>
      <Text>3rd Array: {array[2]}</Text> */}

      <TouchableOpacity
        onPress={
          updateArr
          // () =>
          // setArray(

          //   // (array) => [...array, [(array = "Shahzaib")]
          //   // (array[2] = "Shahzaib"),
          // )
        }
      >
        <Text style={{ backgroundColor: "cyan" }}>Update the Array</Text>
      </TouchableOpacity>
    </View>
  );
};

export default File;
