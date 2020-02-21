// DisplayModal.js

import React, { Component } from 'react'
import { Modal, View, Image, Text, StyleSheet } from 'react-native';

export default class NewTask extends Component {
    constructor(props){
        super(props)
        this.state = {
            modal: this.props.modal
        }
    }
    render(){
        return(
            <Modal visible={this.state.modal} animationType="slide" 
                    onRequestClose={() => this.navigation.pop()}>
                <View>
                    <Text>
                        Teste
                    </Text>
                </View>
            </Modal>
        )
    }
}