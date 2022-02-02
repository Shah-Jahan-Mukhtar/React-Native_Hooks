import React, { useState } from "react";
// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
// import ColorPalette from "./screens/Colors";
// import { SafeAreaView } from "react-native-web";

// const Stack = createStackNavigator();

export default function App() {
  // const [Count, setCount] = useState("");

  return (
    <SafeAreaView style={{ marginTop: 50 }}>
      <Text>Object Update:</Text>

      <View style={{ flexDirection: "row", padding: 10 }}>
        <TouchableOpacity onPress={() => console.log(obj.name)}>
          <Text> Name update</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setObj((obj.email = "Tayyab@gmail.com"))}
        >
          <Text style={{ paddingLeft: 50 }}>Email update</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

    // <SafeAreaView style={{ marginTop: 50 }}>
    //   <Text>Count:{Count}</Text>

    //   <View style={{ flexDirection: "row", padding: 10 }}>
    //     <TouchableOpacity onPress={() => setCount(Count + 1)}>
    //       <Text> Increment</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={() => setCount(Count - 1)}>
    //       <Text style={{ paddingLeft: 50 }}>Decrement</Text>
    //     </TouchableOpacity>
    //   </View>
    // </SafeAreaView>

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen
    //       name="ColorPalette"
    //       component={ColorPalette}
    //       options={({ route }) => ({ title: route.params.colorPalette })}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
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
