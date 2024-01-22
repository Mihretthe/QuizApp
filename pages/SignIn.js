import { useState } from 'react'
import {View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import auth from '@react-native-firebase/auth'
import db from '@react-native-firebase/database'
import { useNavigation } from '@react-navigation/native'




const SignIn = () => {
    const navigation = useNavigation()

    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm_password, setConfirmPassword] = useState("")
    
    const createProfile = async (response) => {
        db().ref(`/users/${response.user.uid}`).set({email})
        // db().ref(`/users/${response.user.uid}`).set({name})
    }

    const Register = async () => {
        if (validateEmail() && validatePassword()){
            try {
                
            }catch (error){
                console.log("Error")
            }
    }
    }
    const validateEmail = () => {
        const emailPattern =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        
        if (emailPattern.test(email)){
            return true
        }
        return false
    }

    const validatePassword = () => {        
        if (password == confirm_password){
            return true
        }
        return false
    }

    return <ScrollView>
        
        <View style = {styles.container}>
            <Text style = {{color : "#E1F0DA", fontSize : 24}}>Register Here</Text>
            <TextInput 
                style = {styles.textInput} 
                placeholder='Email'
                onChangeText={(text) => 
                    setEmail(text)}
                value = {email}
            />
            <TextInput 
                style = {styles.textInput} 
                placeholder='Password'
                onChangeText = {(text) => {setPassword(text)}}
            />
            <TextInput 
                style = {styles.textInput} 
                placeholder='Confirm Password'
                onChangeText={(text) => {setConfirmPassword(text)}}
            />     
            <TouchableOpacity 
            style = {styles.register_button} 
            onPress={() => {
                console.log(email, validatePassword())
                if (validateEmail() && validatePassword()){
                    Alert.alert("Successful")
                    Register()
                }else{
                    Alert.alert("Invalid Information Try Again")
                }
            }} 
            >
                <Text>Register</Text>
            </TouchableOpacity>       
        </View>
    </ScrollView>

}

export default SignIn

const styles = StyleSheet.create({
    container : {
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