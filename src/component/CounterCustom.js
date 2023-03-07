import { useState } from "react";
import {View,TextInput} from "react-native";
export default function CounterCustom(setCustomStatevalue){
    const[customvalue,setCustomVlaue]=useState("1");
    const applychange=(text)=>{
        setCustomVlaue(text)
        setCustomStatevalue(text);

    }

 return (
        <View style={{flex:1,alignItems:'center'}}>
          <TextInput value={customvalue} 
          style={{borderWidth:1,width:'80%'}}

          onChangeText={(text=>applychange(text))}
          />
    </View>
  );
}
