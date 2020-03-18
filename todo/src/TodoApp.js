import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddTodo from './components/AddTodo';

class TodoApp extends React.Component {
    render() {
        return(
            <View style = {styles.conatiner}>
                <AddTodo />
            </View>
        )
    }
}

export default TodoApp;

const styles = StyleSheet.create({
    conatiner : {
        flex : 1,
        alignItems : 'center',
        fontSize : 50,
        paddingTop : 20,
    }
})


