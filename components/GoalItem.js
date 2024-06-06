import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({onDeleteItem, text, id}){
  return (
    <View style={styles.item}>
      <Pressable 
        android_ripple={{color: '#210644'}} 
        onPress={() => onDeleteItem(id)}
        style={({pressed}) => pressed && styles.pressedItem}
        >
          
            <Text style={styles.itemText}>{text}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem;

const styles = StyleSheet.create({
    item: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',    
      },
      pressedItem: {
        opacity: 0.5
      },
      itemText: {
        color: 'white',
        padding: 8,
      }
})