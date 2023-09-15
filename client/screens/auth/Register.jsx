import { View, Text ,StyleSheet, TextInput, Alert} from 'react-native'
import React, { useState } from 'react'
import InputBox from '../../components/Forms/InputBox'
import Submit from '../../components/Forms/Submit';
import axios from "axios"

  const Register = ({navigation}) => {
  const [name,setName] = useState('');
  const [ email,setEmail] = useState('')
  const [ password,setPassword] = useState('')
  const [ loading,setLoading] = useState(false)


  const handleSubmit = async ()=>
  {
    try {
      setLoading(true);
      if(!name || !email || !password)
      {
        Alert.alert("Please Fill All Fields")
        setLoading(false);
        return 
      }
      setLoading(false);
      const {data} = await axios.post("http://192.168.1.8:8000/api/v1/auth/register",{name,email,password})
      console.log(data && data.message)
      console.log("register",{name,email,password})
    } catch (error) {
      console.log(error.response.data.message)
      setLoading(false);
      console.log('Error', error)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Register</Text>
      <View style={styles.subContainer}>

        <View>
        <InputBox title={"Name"} 
        value={name} 
        setValue={setName}/>

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
        <Submit btnName={"SUBMIT"}
        loading={loading}
        handleSubmit={handleSubmit}/>
        <Text style={styles.linkText}>Already Register ? Please {" "}<Text style={styles.link}
        onPress={()=> navigation.navigate("Login")}
        >LOGIN</Text></Text>
      </View>
    </View>
  )
}

export default Register


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
      color: 'red'
    }
  });
  