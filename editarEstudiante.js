import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import db from './database.js'; 


//Form similar al de crear sin embargo este edita ya que viene un ID fijo
function editarEstudiante(props) {
  const [n_id, setID] = useState(props.route.params.id);
  const [n_name, setName] = useState(props.route.params.nombre);
  const [n_lastname, setLastname] = useState(props.route.params.apellido);
  const [n_age, setAge] = useState(props.route.params.edad);
  const [mensaje, setMensaje] = useState('');

  //Variable para no modificar el id
  const id = props.route.params.id;

  //Se activa para actualizar los datos del estudiante con el id seleccionado
  const handleSubmit = () => {
    console.log(n_id, n_name, n_lastname, n_age);
    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE estudiante SET nombre = ?, apellido = ?, edad = ? WHERE id = ?',
        [n_name, n_lastname, n_age, n_id],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            setMensaje(`Estudiante con ID ${id} actualizado`); //exito
          } else {
            setMensaje(`No se encontró estudiante con ID ${id}`); //error
          }
        }
      );
    });
  };

  //render
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Editar Estudiante</Text>
      <View style={{ marginVertical: 10 }}>
        <TextInput placeholder={id} value={id} onChangeText={console.log('no')} style={{ borderWidth: 1, borderRadius: 5, padding: 5, width: 200 }} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <TextInput placeholder={n_name}  value={n_name} onChangeText={setName} style={{ borderWidth: 1, borderRadius: 5, padding: 5, width: 200 }} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <TextInput placeholder={n_lastname}  value={n_lastname} onChangeText={setLastname} style={{ borderWidth: 1, borderRadius: 5, padding: 5, width: 200 }} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <TextInput placeholder={n_age} value={n_age} onChangeText={setAge} style={{ borderWidth: 1, borderRadius: 5, padding: 5, width: 200 }} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button title="Editar" onPress={handleSubmit} />
      </View>
      {mensaje !== '' && <Text style={{ color: mensaje.includes('encontró') ? 'red' : 'green', marginTop: 10 }}>{mensaje}</Text>}
    </View>
  );
}

export default editarEstudiante;