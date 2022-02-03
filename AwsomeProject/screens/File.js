import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const File = () => {
  const [array, setArray] = useState({
    name: "ali",
    name2: "hamza",
    name3: "danish",
    name4: "",
  });

  const updateArr = () => {
    setArray([{ ...array, [name4]: "Hamayun" }]);
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
      <Text>First Array: {array.name}</Text>
      <Text>2nd Array: {array.name2}</Text>
      <Text>3rd Array: {array.name3}</Text>
      <Text>4th Array: {array.name4}</Text>

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
        <Text style={{ backgroundColor: "cyan", marginTop: 40 }}>
          Update the Array
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default File;
