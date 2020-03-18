import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {Ionicons} from 'react-native-vector-icons';
import {connect} from 'react-redux';

class AddTodo extends React.Component {
    state = {
        text : ''
    }

    addTodo = (text) => {
        this.props.dispatch({type:'ADD_TODO', text})
        this.setState({ text:'' })
    }

    render() {
        return(
            <View style={{flexDirection:'row', marginHorizontal:20}}>
                <TextInput
                    onChange = {(text)=>this.setState({ text })}
                    value = {this.state.text}
                    placeholder="eg. create something"
                    style={{backgroundColor:'#ebebeb', borderWidth:1, borderColor:'#f2f2e1', flex:1, height:50, padding:5}}
                />
                <TouchableOpacity onPress={()=>this.addTodo}>    
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect()(AddTodo);

const styles = StyleSheet.create({
    conatiner : {
        flex : 1,
        alignItems : 'center',
        fontSize : 50,
    }
})


