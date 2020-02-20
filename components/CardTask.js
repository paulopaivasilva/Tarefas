import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Card, CheckBox } from 'react-native-elements';
import info from '../mockup/infoAlertTasks'

export default class CardTask extends Component {
    state = {
        task: this.props.task
    }

    changeTask = () => {
        if(!this.state.task.status) this.alertTask(info.done.title, info.done.msg, info.done.status)
        else this.alertTask(info.notDone.title, info.notDone.msg, info.notDone.status)
    }

    alertTask = (title, msg, status) => {
        Alert.alert(
            title,
            msg,
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'OK', 
                    onPress: () => this.setState({ task: { ...this.state.task, status: status}})
                },
            ],
            {cancelable: false},
          );
    }

    render(){
        return (
            <Card containerStyle={styles.container}>
                <TouchableOpacity 
                    style={styles.content} 
                    onPress={this.changeTask} 
                    onLongPress={() => console.log("click longo")}>
                    <CheckBox 
                        checked={this.state.task.status} 
                        onPress={this.changeTask} 
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checkedColor='#03c169'
                        />
                    <View style={{flexDirection: "column"}}>
                        <Text style={styles.title}>{this.state.task.title}</Text>
                        {this.state.task.text ? <Text style={styles.text}>{this.state.task.text}</Text> : null}
                    </View>
                </TouchableOpacity>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: -10, 
        marginTop: 0,
        marginBottom: 7
    },
    content: {
        flexDirection: "row", 
        alignItems: "center"
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5
    },
    text: {
        fontSize: 14
    }
})