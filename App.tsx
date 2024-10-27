import React, { useState } from "react";
import {
  SafeAreaView
} from 'react-native';
import ToDoForm from './src/components/ToDoForm';
import ToDoList from './src/components/ToDoList';


function App(): React.JSX.Element {
  const [taskList, setTaskList] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (taskText: string) => {
    const taskExist = taskList.some(
      (task) => task.toLowerCase() === taskText.toLowerCase()
    );

    if (taskExist) {
      return false;
    } else {
      setTaskList([...taskList, taskText]);
      return true;
    }


  };


  return (
    <SafeAreaView>
      <ToDoList taskList={taskList}></ToDoList>
      <ToDoForm addTask={addTask}></ToDoForm>
    </SafeAreaView>
  );
}


export default App;
