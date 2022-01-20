import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView>
      <Text>Count = {count}</Text>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setCount((currentValue) => currentValue + 1)}
        >
          <Text>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCount((currentValue) => currentValue - 1)}
        >
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
