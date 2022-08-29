import { StatusBar } from 'expo-status-bar';
import { useState, useRef, } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Keyboard } from 'react-native';
import api from './src/services/api'

export default function App() {
    const [cep, setCep] = useState("");
    const [cepUser, setCepUser] = useState(null);
    const inputRef = useRef(null);

    function limpar(){
      setCep("")
      inputRef.current.focus();
      setCepUser(null)
    }
    async function buscar(){
      if(cep == ""){
        alert("Digite um CEP Valido!")
        setCep("")
        return
      }

      try {
        const response = await api.get(`/${cep}/json`)
        setCepUser(response.data);
        Keyboard.dismiss();//força o teclado a fechar
        
      } catch (error) {
        alert("CEP digitado não encontrado")
      }
    }

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
          maxLength={9}
          ref={inputRef}
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.botao, {backgroundColor: "#1d75cd"}]}
          onPress={ buscar }
        >
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, {backgroundColor: "#cd3e1d"}]}
          onPress={ limpar }
        >
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {cepUser && 
      
      <View style={styles.resultado}>
        {/* <View> */}
          <Text style={styles.itemText}>Cidade: <Text style={styles.textoConteudo}>{cepUser.localidade}</Text></Text>
          <Text style={styles.itemText}>CEP:  <Text style={styles.textoConteudo}>{cepUser.cep}</Text></Text>
          <Text style={styles.itemText}>logradouro: <Text style={styles.textoConteudo}>{cepUser.logradouro}</Text></Text>
          <Text style={styles.itemText}>Complemento: <Text style={styles.textoConteudo}>{cepUser.complemento}</Text></Text>
          <Text style={styles.itemText}>Bairro: <Text style={styles.textoConteudo}>{cepUser.bairro}</Text></Text>
          <Text style={styles.itemText}>Estado: <Text style={styles.textoConteudo}>{cepUser.uf}</Text></Text>
          <Text style={styles.itemText}>DDD: <Text style={styles.textoConteudo}>{cepUser.ddd}</Text></Text>
        {/* </View> */}
      </View>
      
      }
      {/* condicional para os dados serem renderizados  */}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
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
    fontSize: 26,
  },
  textoConteudo:{
    fontSize: 22,
    fontWeight: 'bold',
    color: "#1d75cd"
  }

});
