import React, { Component } from 'react';
import { Modal, StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableHighlight } from 'react-native';
import { Button, Header } from 'react-native-elements';
import dates from './mockup/daysOfWeek'
import tasks from './mockup/tasks'
import NewTask from './components/NewTask'
import Content from './components/Content'
import Navbar from './components/Navbar'

export default class App extends Component {
  state = {
    modal: false
  }

  setVisibleModal = () => {
    this.setState({modal: !this.state.modal});
  }

  render(){
    return (
      <SafeAreaView style={styles.container}>
        <Navbar />
        <Content dates={dates} tasks={tasks} />
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
  button: {
    height: 60, 
    backgroundColor: '#03c169'
  }
});
