import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  Banco, createTable, insertUsuario, selectUsuarios, selectUsuarioById, selectUsuarioNome
  , deleteUsuario, updateUsuario
} from './Banco/Config';

import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    async function Main() {
      const db = await Banco();
      await createTable(db);
      //await insertUsuario(db, " sofie ", "xcps.com.br")  ;
      // exibir campos
      // const resp =  await selectUsuarios(db) ;
      // console.log(resp) ;

      // exibir por id
        // let idCampo =  await selectUsuarioById(db,3);
        // console.log(idCampo) ;

        // exibe por nome
        // let nomeCampo =  await selectUsuarioNome(db, " Zelão ");
        // console.log(nomeCampo) ;

        // exibe por delete
        let delCampo =  await deleteUsuario(db, 3);
        console.log(delCampo)  ;

    };
    Main();
  }, [])


  return (
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
