import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AddTodo from './components/AddTodo';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    todos : state.todos
})

const mapDispatchToProps = dispatch => ({
    toggleTodo : id => dispatch({type:'TOGGLE_TODO', id})
})

const TodoList = ({ todos, toggleTodo }) => (
    <View>
        {todos.map(todo => 
            <TouchableOpacity>
                <Text style={{fontSize=24, textDecorationLine: todo.completed ? 'line-through' : 'none'}}>
                    {todo.text}
                </Text>
            </TouchableOpacity>
        )}
    </View>
)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

const styles = StyleSheet.create({
    conatiner : {
        flex : 1,
        alignItems : 'center',
        fontSize : 50,
        paddingTop : 20,
    }
})


