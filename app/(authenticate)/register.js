import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

const register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    try {
      // Input validation
      if (!email || !password || !mobile) {
        throw new Error("Email, password, and mobile number are required.");
      }

      const userCredential = createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then((userCredential) => {
        console.log("user credential", userCredential);
        const user = userCredential._tokenResponse.email;
        const myUserUid = auth.currentUser.uid;

        sendEmailVerification(auth.currentUser).then((response) => {
          console.log(response);
          console.log("Email verification sent to the user");
        });

        setDoc(doc(db, "users", `${myUserUid}`), {
          email: user,
          mobile: mobile,
        });
      });

      setEmail("");
      setPassword("");
      setMobile("");
    } catch (error) {
      // Handle errors
      console.error("Registration error:", error.message);
      // You can display the error message to the user or handle it accordingly
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View style={{ height: 200, backgroundColor: "#FEBE10", width: "100%" }}>
        <View
          style={{
            marginTop: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ marginTop: 35, width: 350, height: 100, resizeMode: "cover" }}
            source={require("../../assets/mainlogo.png")}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
          }}
        ></Text>
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 25,
              color: "#FEBE10",
            }}
          >
            Register to your Account
          </Text>
        </View>
        <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#FEBE10",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="phone"
              size={24}
              color="white"
            />
            <TextInput
              value={mobile}
              onChangeText={(text) => setMobile(text)}
              style={{
                color: "white",
                width: 300,
                marginVertical: 10,
                fontSize: mobile ? 17 : 17,
              }}
              placeholder="Enter your mobile number"
              placeholderTextColor={"white"}
            />
          </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#FEBE10",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="white"
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "white",
                width: 300,
                marginVertical: 10,
                fontSize: email ? 17 : 17,
              }}
              placeholder="Enter your email"
              placeholderTextColor={"white"}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#FEBE10",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <AntDesign
              name="lock1"
              size={24}
              color="white"
              style={{ marginLeft: 8 }}
            />
            <TextInput
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={{
                color: "white",
                width: 300,
                marginVertical: 10,
                fontSize: password ? 17 : 17,
              }}
              placeholder="Enter your password"
              placeholderTextColor={"white"}
            />
          </View>

          
        </View>

        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#007FFF", fontWeight: "500" }}></Text>
        </View>

        <View style={{ marginTop: 50 }} />

        <Pressable
          onPress={handleRegister}
          style={{
            width: 200,
            backgroundColor: "#FEBE10",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Register
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.replace("/login")}
          style={{ marginTop: 12 }}
        >
          <Text style={{ textAlign: "center", fontSize: 15 }}>
            Already have an account? Sign In
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default register;

const styles = StyleSheet.create({});
