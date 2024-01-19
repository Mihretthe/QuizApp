import {View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity} from 'react-native'

const SignIn = () => {
    return <ScrollView>
        
        <View style = {styles.container}>
            <Text style = {{color : "#E1F0DA", fontSize : 24}}>Register Here</Text>
            <TextInput style = {styles.textInput} placeholder='Email'/>
            <TextInput style = {styles.textInput} placeholder='Password'/>
            <TextInput style = {styles.textInput} placeholder='Confirm Password'/>     
            <TouchableOpacity style = {styles.register_button} onPress={() => {
                console.log("Thank You")
            }} >
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