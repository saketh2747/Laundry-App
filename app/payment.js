import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react';
import RNUpiPayment from 'react-native-upi-payment';
const payment = () => {
  const paymentGateway=() =>{
    RNUpiPayment.initializePayment(
      {
        vpa: '9440228959@ybl', // or can be john@ybl or mobileNo@upi
        payeeName: 'satish',
        amount: '1',
        transactionRef: 'aasf-332-aoei-fn',
      },
      successCallback,
      failureCallback
    );
  }
  function successCallback(data) {
    console.log(data);
  }
  
  function failureCallback(data) {
    console.log(data);
  }
  
  return (
    <View
                style={{
                  backgroundColor: "#0066b2",
                  padding: 10,
                  marginVertical: 0,
                  borderRadius: 0,
                  marginLeft:0,
                  marginRight:0,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "500" }}>
                    TOTAL AMOUNT
                  </Text>
                  <Text style={{ color: "white", fontWeight: "500" }}>
                    Rs
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "500" }}>
                    TAXES AND CHARGES
                  </Text>
                  <Text style={{ color: "white", fontWeight: "500" }}>
                    Rs 0
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "500" }}>
                    TOTAL PAYABLE
                  </Text>
                  <Text style={{ color: "white", fontWeight: "500" }}>
                    Rs
                  </Text>
                </View>

                <View>
                  <Text> 
                    <Button title='Pay Now'  onPress={paymentGateway} />
                  </Text>
                </View>
              </View>
              
  )
}

export default payment

const styles = StyleSheet.create({})