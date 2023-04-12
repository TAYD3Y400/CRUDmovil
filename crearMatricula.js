import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import db from './database.js'; 

//Ventana que muestra un registro para poder ingresar una relación Curso x estudiante
function crearMatricula() {
  //Variables que van a guardar los valores que ingresemos en TextInput, en este caso la cedula y el codigo de curso
  const [curso, setCurso] = useState('');
  const [estudiante, setEstudiante] = useState('');
  const [mensaje, setMensaje] = useState('');

  //Se activara para realizar el ingreso con los datos de los TextInput
  const handleSubmit = () => {
    //sentencia sql que realiza el insert de los datos
    db.transaction((tx) => {
              // Realizar consulta SELECT para verificar si el id_estudiante existe en la tabla estudiante
      tx.executeSql(
        'SELECT * FROM estudiante WHERE id = ?',
        [estudiante],
        (_, { rows }) => {
          if (rows.length === 0) {
            // El id_estudiante no existe en la tabla estudiante
            setMensaje('Error: El id de estudiante no existe');
          } else {
            // Realizar consulta SELECT para verificar si el id_curso existe en la tabla curso
            tx.executeSql(
              'SELECT * FROM curso WHERE id = ?',
              [curso],
              (_, { rows }) => {
                if (rows.length === 0) {
                  // El id_curso no existe en la tabla curso
                  setMensaje('Error: El id de curso no existe');
                } else {
                  // Insertar los datos en la tabla estudiante_x_curso
                  const id = curso+"-"+estudiante;
                  tx.executeSql(
                    'INSERT INTO estudiante_x_curso (id, id_estudiante, id_curso) VALUES (?, ?, ?);',
                    [id, estudiante, curso],
                    (_, result) => {
                      setMensaje('El estudiante fue matriculado con éxito'); //mensaje de exito
                    },
                    (_, error) => {
                      setMensaje(`Error al realizar la matricula: ${error.message}`); //mensaje con error
                    }
                  );
                }
              }
            );
          }
        }
      );
    });
  };

  //Render
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Matricular Estudiante</Text>
      <View style={{ marginVertical: 10 }}>
        <TextInput placeholder="Cod.Curso" value={curso} onChangeText={setCurso} style={{ borderWidth: 1, borderRadius: 5, padding: 5, width: 200 }} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <TextInput placeholder="Cedula" value={estudiante} onChangeText={setEstudiante} style={{ borderWidth: 1, borderRadius: 5, padding: 5, width: 200 }} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button title="Matricular" onPress={handleSubmit} />
      </View>
      {mensaje !== '' && <Text style={{ color: mensaje.includes('Error') ? 'red' : 'green', marginTop: 10 }}>{mensaje}</Text>}
    </View>
  );
}

export default crearMatricula;