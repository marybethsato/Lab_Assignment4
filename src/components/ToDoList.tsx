import React from 'react';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';


interface ToDoListProps {
    taskList: string[];
}


const ToDoList: React.FC<ToDoListProps> = ({ taskList }): React.JSX.Element => {
    return (
        <ScrollView>
            {taskList.map((task, index) =>
                <Pressable key={index}>
                    <View style={[styles.task, (index % 2 == 0 ? styles.completed : null)]}>
                        <Text style={[styles.taskText , (index % 2 == 0 ? styles.completeTaskText : null)]}>{task}</Text>
                    </View>
                </Pressable>)}
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
    taskText: {
        fontSize: 16,
    },
    completeTaskText: {
        color: '#000000'
    }
});

export default ToDoList;