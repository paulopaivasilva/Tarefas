import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Button, Header } from 'react-native-elements';

export default class Navbar extends Component {
    render(){
        return(
            <Header 
                leftComponent={{ text: "Tarefas", color: "black", style: styles.title}} 
                leftContainerStyle={styles.leftComponent}
                containerStyle={{backgroundColor: "white"}}
            />
        )
    }
}

const styles = StyleSheet.create({
    leftComponent: {
        flex: 2
    },
    title: {
        fontWeight: "bold",
        fontSize: 30
    },
})