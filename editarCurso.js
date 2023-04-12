import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import db from './database.js'; 


//Form similar al de crear sin embargo este edita ya que viene un ID fijo
function editarCurso(props) {
  const [n_id, setID] = useState(props.route.params.id);
  const [n_name, setName] = useState(props.route.params.nombre);
  const [n_group, setGroup] = useState(props.route.params.grupo);
  const [mensaje, setMensaje] = useState('');

  //Variable para no modificar el id
  const id = props.route.params.id;

  //Se activa para actualizar los datos del curso con el id seleccionado
  const handleSubmit = () => {
    console.log(n_id, n_name, n_group);
    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE curso SET nombre = ?, grupo = ? WHERE id = ?',
        [n_name, n_group, n_id],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            setMensaje(`Curso con ID ${id} actualizado`); //exito
          } else {
            setMensaje(`No se encontró Curso con ID ${id}`); //error
          }
        }
      );
    });
  };

  //Render
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Editar Curso</Text>
      <View style={{ marginVertical: 10 }}>
        <TextInput placeholder={id} value={id} onChangeText={console.log('no')} style={{ borderWidth: 1, borderRadius: 5, padding: 5, width: 200 }} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <TextInput placeholder={n_name}  value={n_name} onChangeText={setName} style={{ borderWidth: 1, borderRadius: 5, padding: 5, width: 200 }} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <TextInput placeholder={n_group}  value={n_group} onChangeText={setGroup} style={{ borderWidth: 1, borderRadius: 5, padding: 5, width: 200 }} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button title="Editar" onPress={handleSubmit} />
      </View>
      {mensaje !== '' && <Text style={{ color: mensaje.includes('encontró') ? 'red' : 'green', marginTop: 10 }}>{mensaje}</Text>}
    </View>
  );
}

export default editarCurso;