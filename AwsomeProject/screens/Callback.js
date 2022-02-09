import {
  View,
  Text,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useState, useCallback, useEffect } from "react";

const Callback = () => {
  const [count, setCount] = useState(0);
  const [Decrement, setDecrement] = useState(0);
  const [Refersh, setRefresh] = useState(false);

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const handleDecrement = useCallback(() => {
    setDecrement(Decrement - 1);
  }, [Decrement]);

  useEffect(() => {
    alert("Koi chngi hai v aa?");
  }, [count]);
  useEffect(() => {
    alert("Bari jaldi a tnu");
  }, [Decrement]);

  const handleRefresh = useCallback(() => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 1000);
  }, []);

  return (
    <ScrollView
      style={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={Refersh} onRefresh={handleRefresh} />
      }
    >
      <View
        style={[{ flex: 1, justifyContent: "center", alignItems: "center" }]}
      >
        <Text>Count:{count}</Text>
        <Text>Count:{Decrement}</Text>

        <TouchableOpacity onPress={handleIncrement}>
          <Text
            style={{ backgroundColor: "cyan", marginTop: 20, fontSize: 40 }}
          >
            Check Your habits
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDecrement}>
          <Text
            style={{ backgroundColor: "lime", marginTop: 20, fontSize: 40 }}
          >
            Check Your Wife Name
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "pink",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default Callback;
