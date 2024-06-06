import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoal, setCourseGoal] = useState([])

  function startAddGoalHandler(){
    setModalIsVisible(true)
  }

 function addGoalHandler(enteredGoalText){
    setCourseGoal((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()}
    ])
    setModalIsVisible(false)
  }

  function deleteHandler(id){ 
    setCourseGoal(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }
  
  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
        <Button 
          title='Add New Goal' 
          color='#5e0acc'
          onPress={startAddGoalHandler}
        />
        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} close={() => setModalIsVisible(false)}/>
        <View>
          <Text style={styles.frontText}>List of goals...</Text>
        </View>
        <View style={styles.goalContainer}>
              <FlatList
              alwaysBounceVertical={false}
              data={courseGoal}
              renderItem={(itemData) => {
                return (
                  <GoalItem 
                    text={itemData.item.text}
                    id={itemData.item.id}
                    onDeleteItem={deleteHandler}
                  />
                );
              }}
              keyExtractor={(item, index) => {
                return item.id;
              }}
              />
        </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalContainer: {
    flex: 4
  },
  frontText: {
    color: 'pink'
  }
});
