import {View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
// import HomeContainer from './HomeContainer'


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")    
    const navigation = useNavigation()
    const data = require('../db.json')
    const validateEmail = () => {
        const emailPattern =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        
        if (emailPattern.test(email)){
            return true
        }
        return false
    }


    
    const handleSubmit = () => {
        if (validateEmail() && password){
            console.log(email, password)
            const user = Object.values(data.users).find((user) => user.email === email && user.password === password)
            if (user){
                navigation.navigate('Welcome');
            }else{
                Alert.alert("Invalid Information")
            }
        }else{
            Alert.alert("Invalid Email")
    }}

    return <View style = {styles.conatainer}>
        <View style = {styles.card}>
            <Text style = {{color : "#E1F0DA", fontSize : 24}}>Login</Text>
            <TextInput 
                style = {styles.textInput} 
                placeholder='Email'
                onChangeText={(text) => {
                    setEmail(text)}}
                value = {email}
            />
            <TextInput 
                style = {styles.textInput} 
                placeholder='Password'
                onChangeText={(text) => {
                    setPassword(text)}}
                value = {password}
                // secureTextEntry = {true}
            />   
            <TouchableOpacity 
                style = {styles.register_button} 
                onPress={() => {
                    handleSubmit()
                }
                    
                    } 
            >
                <Text>Login</Text>
            </TouchableOpacity>       
        </View>
        </View>

}

export default Login

const styles = StyleSheet.create({
    conatainer : {
        // backgroundColor : '#99BC85',
        // flex: 1,
        // justifyContent : 'center'
    },
    card : {
        backgroundColor : '#99BC85',
        padding : 20,
        marginHorizontal : 2, 
       
    },
    textInput : {
        backgroundColor : '#E1F0DA', 
        paddingHorizontal : 10,
        marginVertical : 10,
        borderRadius : 5
    }, 
    register_button : {
        backgroundColor : '#E1F0DA', 
        padding : 10,
        marginVertical : 10,
        borderRadius : 5,
        alignSelf : 'flex-start'
        
        
    }
})