import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
=======
import { StyleSheet, Text, View } from 'react-native';
>>>>>>> 9d5f3d0207572a91ae4b7a2bb5eb247fdf7ffee3

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text style={styles.textos}>Digite seu nome</Text>
      <TextInput placeholder='Nome' style={styles.textinp}/>
      <Text style={styles.textos}>Digite sua data de nascimento</Text>
      <TextInput placeholder='DD-MM-AAAA' style={styles.textinp} />
      <Text style={styles.textos}>Digite seu CRP</Text>
      <TextInput placeholder='01/XXXXX' style={styles.textinp} />
      <Text style={styles.textos}>Digite seu Email</Text>
      <TextInput placeholder='email@email.com' style={styles.textinp} />
      <Text style={styles.textos}>Digite seu telefone</Text>
      <TextInput placeholder='+55 XXX XXXXX-XXXX' style={styles.textinp} />
      <TouchableOpacity activeOpacity={0.7} style={styles.button}><Text style={styles.textos}>Enviar</Text></TouchableOpacity>
=======
      <Text>Hello world</Text>
>>>>>>> 9d5f3d0207572a91ae4b7a2bb5eb247fdf7ffee3
      <StatusBar style="auto" />
    </View>
  );
}

<<<<<<< HEAD
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1',
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
=======




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
>>>>>>> 9d5f3d0207572a91ae4b7a2bb5eb247fdf7ffee3
