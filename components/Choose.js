import {View, Text} from 'react-native'
import { useState } from 'react'
import { RadioButton } from 'react-native-paper'
const Choose = ({question = "What's up?", answer = 0, choices = [
    "Good", "Bad", "Not Bad"
]}) => {

    const [checked, setChecked] = useState('')
    const handleChange = (value) => {
        setChecked(value)
    }
    
    return <View style = {{flex : 1, paddingVertical : 10, margin: 20}}>
        <Text>{question}</Text>
        <RadioButton.Group onValueChange={handleChange} value = {checked}>
        {choices.map((choice, index) => (
            <RadioButton.Item 
                key = {index}
                style = {{
                    color : 'black',
                    backgroundColor : '#E1F0DA',
                    padding : 10,
                    margin : 2,
                    borderRadius : 10
                }} 
                label = {choice} 
                value = {index} 
                status={checked === index ? 'checked' : 'unchecked'}
            />
        ))}
        </RadioButton.Group>
        
        
    </View>
}

export default Choose