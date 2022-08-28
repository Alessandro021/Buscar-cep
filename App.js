import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import api from './src/services/api.js'

export default function App() {
    const [cep, setCep] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}>Digite o seu CEP</Text>
        <TextInput style={styles.input}
          placeholder="Ex: 123456789"
          value={cep}
          onChangeText={(texto)=> setCep(texto)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.botao, {backgroundColor: "#1d75cd"}]}>
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, {backgroundColor: "#cd3e1d"}]}>
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultado}>
        <Text style={styles.itemText}>CEP: 123456789</Text>
        <Text style={styles.itemText}>logradouro: Rua A</Text>
        <Text style={styles.itemText}>Bairro: Centro</Text>
        <Text style={styles.itemText}>Cidade: São Paulo</Text>
        <Text style={styles.itemText}>Estado: SP</Text>
        <Text style={styles.itemText}>DDD: 11</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text:{
    marginTop: 20,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: "bold"
  },
  input:{
    width: "90%",
    backgroundColor: "#DDD",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  areaBtn:{
    alignItems: 'center',
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-around",
  },
  botao:{
    height: 60,
    width: "30%",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
  botaoText:{
    fontSize: 22,
    color: "#FFF",
    fontWeight: "900"
  },
  resultado:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText:{
    fontSize: 22
  }

});
