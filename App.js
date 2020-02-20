import React, { Component } from 'react';
import { Modal, StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableHighlight } from 'react-native';
import { Button, Header } from 'react-native-elements';
import CardTask from './components/CardTask'
import moment from 'moment/min/moment-with-locales'
import dates from './mockup/daysOfWeek'
import tasks from './mockup/tasks'
import NewTask from './components/NewTask'

export default class App extends Component {
  state = {
    tasks: tasks,
    date: moment().locale('pt-br').format('dddd'),
    dates: dates,
    modal: false
  }

  setVisibleModal = () => {
    this.setState({modal: !this.state.modal});
  }

  render(){
    return (
      <SafeAreaView style={styles.container}>
        <Header 
          leftComponent={{ text: "Tarefas", color: "black", style: styles.title}} 
          leftContainerStyle={styles.leftComponent}
          containerStyle={{backgroundColor: "white"}}
        />
        <ScrollView style={styles.content}>
          {this.state.dates.map((date, i) => {
            if(date === this.state.date){
              return(
                <View key={i}>
                  <Text style={styles.subtitle}>{date}</Text>
                  {this.state.tasks.map((task, index) => {
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
        <Button title="Adicionar Tarefa" buttonStyle={styles.button} onPress={this.setVisibleModal} />
        <NewTask modal={this.state.modal} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f8",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30
  },
  leftComponent: {
    flex: 2
  },
  content: {
    marginLeft: 10
  },
  subtitle: {
    marginTop: 20,
    marginBottom: 20,
    color: "#03c169",
    fontWeight: "bold",
    fontSize: 20
  },
  button: {
    height: 60, 
    backgroundColor: '#03c169'
  }
});
