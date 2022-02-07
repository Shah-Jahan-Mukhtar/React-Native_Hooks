import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const File = () => {
  const [array, setArray] = useState([
    {
      name: "ali",
      name2: "hamza",
      name3: "danish",
      name4: "",
    },
    {
      name5: "Qais",
      name6: "usama",
      name7: "Abubakar",
    },
  ]);

  let updateValue = [(array[0].name4 = "Hamayun")];

  const updateArr = () => {
    [(array[0].name = "umair")],
      [(array[1].name7 = "IrfanAli")],
      [(array[1].name5 = "Nasir")];
    setArray([...array, ...updateValue]);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "white",
      }}
    >
      <Text>First Array: {array[0].name}</Text>
      <Text>2nd Array: {array[0].name2}</Text>
      <Text>3rd Array: {array[0].name3}</Text>
      <Text>4th Array: {array[0].name4}</Text>
      <Text>5th Array: {array[1].name5}</Text>
      <Text>6th Array: {array[1].name6}</Text>
      <Text>7th Array: {array[1].name7}</Text>

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
