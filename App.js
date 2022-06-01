import React from 'react';
import { 
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  Text,
  Pressable,
  Linking
} from 'react-native';

const colorGithub = '#010409'
const avatarGithub = 'https://avatars.githubusercontent.com/u/81595439?v=4'
const urlPerfilGithub = 'https://github.com/ItaloAraujoo'


export default function App() {

  const hamblePressGoToGithub = async () => {
    console.log('Verificando link')
    const res = await Linking.canOpenURL(urlPerfilGithub);
    if(res){
      console.log('Link aprovado')
      console.log('Abrindo link')
      await Linking.openURL(urlPerfilGithub)
    }
  }

  hamblePressGoToGithub()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.avatar} source={{uri: avatarGithub}}/>
        <Text style={[styles.defaultText, styles.name]}>Ítalo Araújo</Text>
        <Text style={[styles.defaultText, styles.profissao]}>Developer front end | Mobile | React native</Text>
        <Text style={[styles.defaultText, styles.localidade]}>Guarulhos - SP</Text>
        <Pressable onPress={()=> console.log('github')}>
          <View>
            <Text style={styles.button}>Open in Github</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  //expandir para a tela inteira
    backgroundColor: colorGithub,
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 1,
  },
  defaultText: {
    color: '#fff'
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10
  },
  profissao: {
    fontSize: 18,
  },
  localidade: {
    fontSize: 17
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: 140,
    marginTop: 10,
    fontSize: 14.9,
    fontWeight: 'bold',
  },
});

