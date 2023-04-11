import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import db from './database.js'; 

/*function editarEstudiante(estudiante) {
  const [n_id, setID] = useState('');
  const [n_name, setName] = useState('');
  const [n_lastname, setLastname] = useState('');
  const [n_age, setAge] = useState('');

  const handleSubmit = () => {
    console.log(id, name, lastname, age);
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO estudiante (id, nombre, apellido,  edad) VALUES (?, ?, ?, ?);',
        [n_id,n_name, n_lastname, n_age],
        (_, result) => {
          console.log('El estudiante fue agregado con éxito');
        },
        (_, error) => {
          console.log(`Error al agregar el estudiante: ${error.message}`);
        }
      );
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Agregar Estudiante</Text>
      <View style={{ marginVertical: 10 }}>
        <TextInput placeholder={estudiante.id} value={estudiante.id} onChangeText={setID} style={{ borderWidth: 1, borderRadius: 5, padding: 5, width: 200 }} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <TextInput placeholder={estudiante.nombre}  value={estudiante.nombre} onChangeText={setName} style={{ borderWidth: 1, borderRadius: 5, padding: 5, width: 200 }} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <TextInput placeholder={estudiante.apellido}  value={estudiante.apellido} onChangeText={setLastname} style={{ borderWidth: 1, borderRadius: 5, padding: 5, width: 200 }} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <TextInput placeholder={estudiante.edad} value={estudiante.edad} onChangeText={setAge} style={{ borderWidth: 1, borderRadius: 5, padding: 5, width: 200 }} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button title="Agregar" onPress={handleSubmit} />
      </View>
    </View>
  );
}*/

function editarEstudiante() {
    const [id, setID] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState('');
  
    const handleSubmit = () => {
      console.log(id, name, lastname, age);
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO estudiante (id, nombre, apellido,  edad) VALUES (?, ?, ?, ?);',
          [id,name, lastname, age],
          (_, result) => {
            console.log('El estudiante fue agregado con éxito');
          },
          (_, error) => {
            console.log(`Error al agregar el estudiante: ${error.message}`);
          }
        );
      });
    };
  
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
      </View>
    );
  }

export default editarEstudiante;