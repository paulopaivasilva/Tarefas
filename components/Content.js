import React, { Component } from 'react';
import { Modal, StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableHighlight } from 'react-native';
import moment from 'moment/min/moment-with-locales'
import CardTask from './CardTask'

export default class Content extends Component {
    state = {
        date: moment().locale('pt-br').format('dddd'),
    }
    render(){
        return(
            <ScrollView style={styles.content}>
                {this.props.dates.map((date, i) => {
                    if(date === this.state.date){
                        return(
                            <View key={i}>
                            <Text style={styles.subtitle}>{date}</Text>
                            {this.props.tasks.map((task, index) => {
                                if(task.date === date)
                                return(
                                    <CardTask task={task} key={index} />
                                )
                            })}
                            </View>
                        )
                    }
                })}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        marginLeft: 10
    },
    subtitle: {
        marginTop: 20,
        marginBottom: 20,
        color: "#03c169",
        fontWeight: "bold",
        fontSize: 20
    }
})