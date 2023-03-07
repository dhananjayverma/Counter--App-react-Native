import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import CountScreen from './src/screens/CounterScreen';
import CounterCustom from "./src/component/CounterCustom";
export default function App() {
  const[customState,setCustomState]=useState(1);
return (
    <View style={{flex:1}}>
     <CountScreen customStatevalue={customState}/>
     <CounterCustom setCustomStatevalue={setCustomState}/>
    <StatusBar style="auto" />
    </View>
  );
}

