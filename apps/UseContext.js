import React,{useState, useEffect, useContext, useRef} from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const Themes  = {
    light : {
        Color : 'skyblue',
        fontSize : 20
    },
    dark : {
        Color : 'yellow',
        fontSize :  50
    }
};

const ThemeContext = React.createContext(Themes.light);

function Toolbar(props){
    return(
        <View>
            <ThemedButton/>
        </View>
    );
}

function ThemedButton(){
    const Themes = useContext(ThemeContext)
    return(
        <View style = {styles.container}>
            <Text style = {{fontSize : Themes.fontSize , color : Themes.Color}}>RAYVEN</Text>
        </View>

    )
}

export default function UseContext(){
    return(
        <View style = {styles.container}>
            <ThemeContext.Provider value={Themes.dark}>
                <Toolbar/>
            </ThemeContext.Provider>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
      flex : 1,
      backgroundColor : 'black',
      alignItems : 'center',
      justifyContent : 'center'
    }
  })