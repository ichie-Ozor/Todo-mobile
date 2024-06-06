import { useState } from 'react'
import { View, TextInput, Button, Image, StyleSheet, Modal } from 'react-native'

function GoalInput({onAddGoal, visible, close}){
    const [enteredGoalText, setEnteredGoalText] = useState('')
  
    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText)
      }

    function addGoalHandler(){
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }
    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/image/cross.jpg')}/>
                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText} 
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                       <Button 
                       onPress={close}
                       title='Cancel' 
                       color='#f31282'
                       />
                    </View>
                    <View style={styles.button}>
                        <Button 
                            onPress={addGoalHandler}
                            title='Add Goal'
                            color='#5e0acc'
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6c'
      },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: '100%',
        padding: 16,
        color: '#120438',
        borderRadius: 6
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
    width: 100,
    marginHorizontal: 6
},
image: {
    width: 150,
    height: 150,
    margin: 20,
    borderRadius: 5
}
})