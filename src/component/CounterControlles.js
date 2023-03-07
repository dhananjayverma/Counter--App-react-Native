import {View ,Text,TouchableOpacity} from "react-native";

export default function CounterControlles({setCounterValue,customStatevalue}){
    const incementVlaue=()=>{
        setCounterValue(tempValue=>{
            return parseInt(tempValue)+customStatevalue;
         })
    }
    const decementVlaue=()=>{
        setCounterValue(tempValue=>{
            return parseInt(tempValue)-customStatevalue;
        })
    }
return(
        <View style={{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        width:"70%",
        }}>
            <TouchableOpacity style={{backgroundColor:"blue",padding:10}} 
            onPress={()=>decementVlaue()}>
            <Text style={{fontSize:20,color:"white"}}> Decrement </Text>
            </TouchableOpacity>

            <TouchableOpacity
             style={{backgroundColor:"blue",padding:10}}
             onPress={()=>incementVlaue()}
             >
            <Text style={{fontSize:20, color:"white"}}> Increment </Text>
            </TouchableOpacity>
        </View>
    )
}
