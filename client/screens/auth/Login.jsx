import { View, Text ,StyleSheet, TextInput, Alert} from 'react-native'
import React, { useState } from 'react'
import InputBox from '../../components/Forms/InputBox'
import Submit from '../../components/Forms/Submit';

const Login = ({navigation}) => {
  const [ email,setEmail] = useState('')
  const [ password,setPassword] = useState('')
  const [ loading,setLoading] = useState(false)


  const handleSubmit = ()=>
  {
    try {
      setLoading(true);
      if(!email || !password)
      {
        Alert.alert("Please Fill All Fields")
        setLoading(false);
        return 
      }
      setLoading(false);
      console.log("login",{email,password})
    } catch (error) {
      setLoading(false);
      console.log('Error', error)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Login</Text>
      <View style={styles.subContainer}>

        <View>
        <InputBox title={"Email"} 
        value={email}
        keyboardType={"email-address"}
        autoComplete={"email"}
        setValue={setEmail}/>

        <InputBox title={"Password"}
          secureTextEntry={true}
          autoComplete={"password"}
          value={password} setValue={setPassword}/>

        </View>
        {/* <Text>{JSON.stringify({name,email,password},null,4)}</Text> */}
        <Submit btnName={"LOGIN"}
        loading={loading}
        handleSubmit={handleSubmit}/>
        <Text style={styles.linkText}>Not Registered ? Please <Text style={styles.link} 
        onPress={()=> navigation.navigate("Register")}
        >REGISTER</Text></Text>
      </View>
    </View>
  )
}

export default Login


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#8a8337',
      justifyContent: 'center',
    },
    pageTitle: 
    {
        fontWeight: "bold",
        fontSize : 40,
        textAlign: "center",
        color: "#1e2225",
        marginBottom: 20
    },
    inputBox: {
        height: 40,
        marginBottom: 20,
        backgroundColor: "#fff",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        color: "black"
    },
    subContainer: {
      marginHorizontal: 25
    },
    linkText: {
      textAlign: 'center',
    },
    link: 
    {
      color: '#852525'
    }
  });
  