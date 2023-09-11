import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const Submit = ({btnName,handleSubmit,loading}) => {
  return (
    <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
      <Text style={styles.btnText}>{loading ? "Please Wait..." : btnName}</Text>
    </TouchableOpacity>
  )
}

export default Submit

const styles = StyleSheet.create({
      submitBtn: { 
        height: 40,
        marginHorizontal: 50,
        borderRadius: 80,
        justifyContent: "center",
        marginBottom: 20,
        backgroundColor: "#000000",
        borderColor: "black",

        },
        btnText: 
        {
            textAlign: "center",
            fontSize: 22,
            color: '#fff',
            fontWeight: '400',
        }
  });
  