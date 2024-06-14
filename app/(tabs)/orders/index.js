import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
const Index = () => {

  const router = useRouter();
  // Function to handle adding items (replace with your actual logic)
  const handleAddItems = () => {
    // Logic to navigate to the page where items can be added
    console.log("Navigate to the page where items can be added");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.message}>No orders have been placed</Text>
      <Pressable
        onPress={() => router.push("/(tabs)/basket/select")}
          style={{
            borderColor: "#034694",
            paddingHorizontal: 10,
            paddingVertical: 4,
            justifyContent: "center",
            alignItems:"center",
            borderWidth:0.7,
            width:130,
            marginTop:8,
            borderRadius:5
          }}
        >
          <Text>ADD ITEMS</Text>
        </Pressable>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 20,
    marginBottom: 20,
  },
})
