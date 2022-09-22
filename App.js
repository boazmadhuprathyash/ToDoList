import React,{useState,useEffect} from "react";
import {
StyleSheet,
View,
Text,
TouchableHighlight
} from 'react-native';

export default function App(){
  const [count,setcount] = useState(0)
  // const onPress =()=>setcount(count=> count+1)

  useEffect(()=>{
    setInterval(()=>{
      setcount(count+10)
    },1000)
  })

  return(
    <View style = {styles.container}>
      <Text>Count : {count}</Text>
      <TouchableHighlight
        // onPress = {onPress}
        underlayColor = 'skyblue'>
          <Text>Press Here</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'white',
    alignItems : 'center',
    justifyContent : 'center'
  }
})