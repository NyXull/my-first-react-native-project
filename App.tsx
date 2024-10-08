import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  let [newTask, setNewTask] = React.useState('');

  return (
    <View style={styles.container}>
      {/*<Text style={styles.textos}>Digite seu nome</Text>
      <TextInput placeholder='Nome' style={styles.textinp}/>
      <Text style={styles.textos}>Digite sua data de nascimento</Text>
      <TextInput placeholder='DD-MM-AAAA' style={styles.textinp} />
      <Text style={styles.textos}>Digite seu CRP</Text>
      <TextInput placeholder='01/XXXXX' style={styles.textinp} />
      <Text style={styles.textos}>Digite seu Email</Text>
      <TextInput placeholder='email@email.com' style={styles.textinp} />
      <Text style={styles.textos}>Digite seu telefone</Text>
      <TextInput placeholder='+55 XXX XXXXX-XXXX' style={styles.textinp} />*/}
      <Text style={styles.textos}>Trabalhando com Hook useState</Text>
      <TextInput onChangeText={setNewTask} placeholder='Tarefa' style={styles.textinp} />
      <Text></Text>
      <Text style={styles.textos}>Elemento digitado</Text>
      <Text style={styles.textos}>{newTask}</Text>
      {/*<TouchableOpacity activeOpacity={0.7} style={styles.button}>
        <Text style={styles.textos}>Adicionar tarefa</Text>
      </TouchableOpacity>*/}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F4F4F',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textinp: {
    backgroundColor: '#D3D3D3',
    width: 300,
    borderRadius: 7,
    height: 40,
    textAlign: 'center',
  },

  textos: {
    marginTop: 10,
    marginBottom: 10,
    color: '#F5F5F5',
  },

  button: {
    backgroundColor: '#000000',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
    width: 300,
  },
});