import {View,Text} from "react-native";
import { useState } from "react";
import CounterView from "../component/CounterView";
import CounterControlles from "../component/CounterControlles";

 function CountScreen({customStatevalue}){
    const [counter,setCounter]=useState(0);
    return (
    <View style={{flex:1,backgroundColor:"#fff",alignItems:"center", justifyContent:"center"}}>
       <CounterView counterValue={counter}/>
      <CounterControlles 
      setCounterValue={setCounter}
      customStatevalue={customStatevalue}
      />
 </View>
  );
}
export default CountScreen;
