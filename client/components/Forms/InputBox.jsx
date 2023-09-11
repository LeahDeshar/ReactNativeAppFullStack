import { View, Text,StyleSheet, TextInput } from 'react-native'
import React from 'react'

const InputBox = ({title,keyboardType,autoComplete,secureTextEntry=false,value,setValue}) => {
  return (
    <View>
      <Text>{title}</Text>
      <TextInput style={styles.inputBox} 
      autoCorrect={false}
      keyboardType={keyboardType}
      autoComplete={autoComplete}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={(text)=> setValue(text)}
     

      
     />
    </View>
  )
}

export default InputBox

const styles = StyleSheet.create({
    inputBox: {
        height: 45,
        marginBottom: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginTop: 10,
        color: "black"
    }
  });
  