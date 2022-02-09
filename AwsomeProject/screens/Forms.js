import React, { useState } from "react";

import {
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from "react-native";

const [value1, setValue1] = useState("");
const [value2, setValue2] = useState("");
const [value3, setValue3] = useState("");
const [value4, setValue4] = useState("");

const Forms = () => {
  return (
    <SafeAreaView style={{ marginTop: 25 }}>
      <ScrollView style={styles.container}>
        <Text>Basic Text input:</Text>
        <Text>Current Value:{value1}</Text>
        <TextInput
          style={styles.input}
          value={value1}
          onChangeText={setValue1}
          placeholdler="Please Input here"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    padding: 5,
  },
});
export default Forms;
