import React from "react";
import {StyleSheet,View, Text} from "react-native";

export default function App(){
  return (
    <View style= {{ flex:1 }} >
      <View style={{ flex:1, backgroundColor:"yellow" }} ></View>
      <View style={{ flex : 1,backgroundColor:"orange"}}>
        <Text>hello</Text>
      </View>
    </View>

  );
}