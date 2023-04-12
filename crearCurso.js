import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import db from './database.js'; 

//Ventana que muestra un registro para poder ingresar un Curso
function crearCurso() {
  //Variables que van a guardar los valores que ingresemos en TextInput
  const [name, setName] = useState('');
  const [group, setGroup] = useState('');
  const [mensaje, setMensaje] = useState('');

  //Se activara para realizar el ingreso con los datos de los TextInput
  const handleSubmit = () => {
    const id = (name.substring(0, 3)+group).toUpperCase();
    console.log(id, name, group);
    //sentencia sql que realiza el insert de los datos
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO curso (id, nombre, grupo) VALUES (?, ?, ?);',
        [id, name, group],
        (_, result) => {
          setMensaje('El curso fue agregado con éxito'); //mensaje de exito
        },
        (_, error) => {
          setMensaje(`Error al agregar el curso: ${error.message}`); //mensaje con error
        }
      );
    });
  };

  //Render
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Agregar Curso</Text>
      <View style={{ marginVertical: 10 }}>
        <TextInput placeholder="Curso" value={name} onChangeText={setName} style={{ borderWidth: 1, borderRadius: 5, padding: 5, width: 200 }} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <TextInput placeholder="Grupo" value={group} onChangeText={setGroup} style={{ borderWidth: 1, borderRadius: 5, padding: 5, width: 200 }} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button title="Agregar" onPress={handleSubmit} />
      </View>
      {mensaje !== '' && <Text style={{ color: mensaje.includes('Error') ? 'red' : 'green', marginTop: 10 }}>{mensaje}</Text>}
    </View>
  );
}

export default crearCurso;