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
        flexDirection: "row",
      }}
    >
      <Text>First Array:{array[0]}</Text>
      <Text>Second Array:{array[1]}</Text>

      <TouchableOpacity
        onPress={() =>
          setArray([((array[0] = "Abubakar"), (array[1] = "Rana"))])
        }
      >
        <Text style={{ paddingLeft: 20 }}>Update the Array</Text>
      </TouchableOpacity>
    </View>
  );
};

export default File;
