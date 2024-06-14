import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";

const OrderSuccess = ({ navigation }) => {
  // Mock data for pickup and delivery times
  const orderPlacedTime = moment();
  const pickupTime = orderPlacedTime.clone().add(1, "hours");
  const deliveryTime = orderPlacedTime.clone().add(3, "hours");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <Pressable style={styles.headerButton} onPress={() => navigation.navigate("(tabs)/home")}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </Pressable>
          <Text style={styles.headerTitle}>Order Placed</Text>
          <View style={styles.headerButton} />
        </View>
        <View style={styles.orderCard}>
          <Ionicons name="checkmark-circle" size={80} color="#4CAF50" style={styles.icon} />
          <Text style={styles.successText}>Pickup Confirmed Successfully!</Text>
          <Text style={styles.orderText}>Thank you!!</Text>
          
          <View style={styles.timeline}>
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  contentContainer: {
    padding: 20,
  },
  header: {
    backgroundColor: "#0066b2",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  headerButton: {
    padding: 10,
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  orderCard: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    marginTop: 20,
  },
  icon: {
    marginBottom: 20,
  },
  successText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 10,
  },
  orderText: {
    fontSize: 16,
    color: "#757575",
    textAlign: "center",
    marginBottom: 10,
  },
  timeline: {
    marginTop: 20,
    width: "100%",
  },
  timelineStep: {
    flexDirection: "row",
    alignItems: "center",
  },
  timelineCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#4CAF50",
    marginRight: 10,
  },
  timelineLine: {
    width: 2,
    height: 40,
    backgroundColor: "#4CAF50",
    alignSelf: "center",
    marginLeft: 9,
  },
  timelineText: {
    fontSize: 16,
    color: "#757575",
  },
});
