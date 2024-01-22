import {View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';


const numbers = (num) => {
    return Array.from({length: num}, (_, index) => index)
}
    
const AddQuestion = () => {

    const [question, setQuestion] = useState("")
    const [num, setNum] = useState(0)
    const [isSet, setTrue] = useState(false)
    const [answer, setAnswer] = useState(-1)
    return <ScrollView>
        <View style = {{
            flex : 1,
            padding : 10,
            margin : 30,
            paddingVertical : 60,
        }}>
        <Text style = {styles.text}>Enter the question below</Text>
        <TextInput 
            style = {styles.textInput} 
            placeholder='Question'
            onChangeText={(text) => {setQuestion(text)}}
        />
        <Text style = {styles.text}>How many choices?</Text>
        <TextInput 
            placeholder = "How Many" 
            style = {styles.textInput}
            keyboardType='numeric' 
            onChangeText={(number) => {number == "" ? setTrue(false) :setNum(number)}}
        />
        <TouchableOpacity 
            style = {[styles.textInput, {width : 60, display : 'flex', alignItems : 'center'}]}
            onPress = {() => {question != "" && num > 1 ? setTrue(true):setTrue(false)}}
        >
            <Text>Yes</Text>
        </TouchableOpacity>
        {isSet ? 
        <View style = {styles.choices}>
            <Text style = {styles.text}>Enter the Choices</Text>
            {
                numbers(num).map((index) => (
                <TextInput 
                    key = {index} 
                    style = {styles.textInput} 
                    placeholder={`Choice ${index + 1}`} />
                ))}
            <Text style = {styles.text}>Answer</Text>
            <TextInput 
            placeholder = "Answer" 
            style = {styles.textInput}
            keyboardType='numeric' 
            onChangeText={(number) => {setAnswer(number)}}
        />
        <TouchableOpacity 
            style = {[styles.textInput, {width : 150, display : 'flex', alignItems : 'center'}]}
            onPress={() => {answer >= 1 && answer <= num ? Alert.alert("Question Added Successfully") :Alert.alert("Invalid Choice")} }
        >
            <Text style = {[styles.textInput, {marginVertical : 1, padding : 2}]}>Add Question</Text>
        </TouchableOpacity>
        </View>:<View style = {styles.alert}>
            <Text style = {styles.alert }>Enter the Information</Text>
            <FontAwesome name="hand-o-up" size={24} color="black" />
            </View>}
        
    </View>
    </ScrollView>
}

export default AddQuestion

const styles = StyleSheet.create({
    text : {
        fontSize : 24,
        // backgroundColor : '#E1F0DA'

    },
    textInput : {
        fontSize : 18,
        backgroundColor : '#E1F0DA',
        padding : 5,
        marginVertical : 10,
        borderRadius : 5

    },
    choices : {
        paddingVertical : 10,
    },
    alert : {
        fontSize : 24,
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-around',
        margin : 20,
    }
})