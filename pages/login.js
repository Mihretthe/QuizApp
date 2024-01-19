import {View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity} from 'react-native'

const Login = () => {
    return <View style = {styles.conatainer}>
        <View style = {styles.card}>
            <Text style = {{color : "#E1F0DA", fontSize : 24}}>Login</Text>
            <TextInput style = {styles.textInput} placeholder='Email'/>
            <TextInput style = {styles.textInput} placeholder='Password'/>   
            <TouchableOpacity style = {styles.register_button} onPress={() => {
                console.log("Thanks")
            }} >
                <Text>Login</Text>
                </TouchableOpacity>       
        </View>
        </View>

}

export default Login

const styles = StyleSheet.create({
    // conatainer : {
    //     backgroundColor : '#99BC85',
    //     flex: 1,
    //     justifyContent : 'center'
    // },
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