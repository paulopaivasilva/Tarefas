// DisplayModal.js

import React, { Component } from 'react'
import { Modal, View, Image, Text, StyleSheet } from 'react-native';

export default class NewTask extends Component {
    state = {
        modal: this.props.modal
    }
    render(){
        console.log(this.state.modal)
        return(
            <Modal visible={this.props.modal} animationType="slide" 
                    onRequestClose={() => this.visibleModal(false)  }>
                <View>
                    <Text>
                        Teste
                    </Text>
                </View>
            </Modal>
        )
    }
}