import React from "react";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import ColorPalette from "./screens/Colors";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={({ route }) => ({ title: route.params.colorPalette })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// import React, { useState, useCallback } from "react";
// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   TouchableOpacity,
// } from "react-native";

// export default function App() {
//   const [count, setCount] = useState(0);

//   const handleIncrement = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);

//   const handleDecrement = useCallback(() => {
//     setCount(count - 1);
//   }, [count]);

//   return (
//     <SafeAreaView style={{ marginTop: 300 }}>
//       <Text>Count = {count}</Text>
//       <View style={styles.container}>
//         <TouchableOpacity onPress={handleIncrement}>
//           <Text>Increment</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleDecrement}>
//           <Text>Decrement</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     padding: 10,
//   },
// });
