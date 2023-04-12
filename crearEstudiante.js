import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import db from './database.js'; 


//Form para registar un estudiante
function crearEstudiante() {
  const [id, setID] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const [mensaje, setMensaje] = useState('');

  //Se activa para hacer le ingreso de 
  const handleSubmit = () => {
    //Sentencia sql para ingresar los datos
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO estudiante (id, nombre, apellido,  edad) VALUES (?, ?, ?, ?);',
        [id, name, lastname, age],
        (_, result) => {
          setMensaje('El estudiante fue agregado con éxito'); //exito
        },
        (_, error) => {
          setMensaje(`Error al agregar el estudiante: ${error.message}`); //error
        }
      );
    });
  };

  //render
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Agregar Estudiante</Text>
      <View style={{ marginVertical: 10 }}>
        <TextInput placeholder="Cedula" value={id} onChangeText={setID} style={{ borderWidth: 1, borderRadius: 5, padding: 5, width: 200 }} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <TextInput placeholder="Nombre" value={name} onChangeText={setName} style={{ borderWidth: 1, borderRadius: 5, padding: 5, width: 200 }} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <TextInput placeholder="Apellido" value={lastname} onChangeText={setLastname} style={{ borderWidth: 1, borderRadius: 5, padding: 5, width: 200 }} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <TextInput placeholder="Edad" value={age} onChangeText={setAge} style={{ borderWidth: 1, borderRadius: 5, padding: 5, width: 200 }} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button title="Agregar" onPress={handleSubmit} />
      </View>
      {mensaje !== '' && <Text style={{ color: mensaje.includes('Error') ? 'red' : 'green', marginTop: 10 }}>{mensaje}</Text>}
    </View>
  );
}

export default crearEstudiante;