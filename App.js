import { useState } from 'react';
import { 
        StyleSheet,
        View,
        FlatList,
      } from 'react-native';

      import GoalItem from './components/GoalItem';
      import GoalInput from './components/GoalInpu';
      


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);


  
  function addGoalHandler (enteredGoalText) {
    setCourseGoals((currentCourseGoals) =>
      [...currentCourseGoals,
        {text: enteredGoalText, id: Math.random().toString()},
      ]);
  }
  return (
    
    <View style={styles.appContainer} >
      <GoalInput onAddGoal={addGoalHandler} />
      <View  style={styles.goalsContainer} >
        <FlatList 
          data={courseGoals}  
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text}  />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        /> 

      </View>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  
  goalsContainer: {
    flex: 5,
  },
  

});

//scrollView its making as to get scrolling the our view 
//the view that having key property this for get the radius working in the both devices 
//Overall, FlatList is a useful component for rendering lists of data in a performant and customizable way in React Native.
//renderItem using for exact the way that you want to render your list 
//teh way that allows you to put the key prop.. is deferent here look up at the code 
//keyExtractor prop is used to extract a unique key for each item in the list