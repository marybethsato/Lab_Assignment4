import React from 'react';
import {
    Alert,
    Button,
    StyleSheet,
    TextInput,
    View
} from 'react-native';

interface ToDoFormProps {
    addTask: any
}

const ToDoForm: React.FC<ToDoFormProps> = ({ addTask }): React.JSX.Element => {

    const [taskText, setTaskText] = React.useState('');

    const add = () => {
        const isAdded = addTask(taskText);
        if (isAdded) {
            setTaskText('');
        } else {
            Alert.alert('Task already exists. Try another.');
        }

    };

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                onChangeText={(text) => setTaskText(text)}
                value={taskText}
            />
            <Button title="Add" onPress={add} />
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
});

export default ToDoForm;