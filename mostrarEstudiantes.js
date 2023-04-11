import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import db from './database.js'; 

function mostrarEstudiantes() {
    const [estudiantes, setEstudiantes] = useState([]);
    
    const handleEliminar = (id) => {
      console.log(id)
    }
  
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT id, nombre, apellido, edad FROM estudiante',
        [],
        (_, { rows }) => {
          const estudiantesArray = [];
          for (let i = 0; i < rows.length; i++) {
            const estudiante = rows.item(i);
            estudiantesArray.push({
              id: estudiante.id,
              nombre: estudiante.nombre,
              apellido: estudiante.apellido,
              edad: estudiante.edad,
            });
          }
          setEstudiantes(estudiantesArray);
        }
      );
    });
  
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Lista de Estudiantes</Text>
        <View style={styles.datosContainer}>
          {estudiantes.map((estudiante) => (
            <View key={estudiante.id} style={styles.estudiante}>
              <Text style={styles.info}>{estudiante.id}{'\t\t\t'}{estudiante.nombre}{'\t\t\t'}{estudiante.apellido}{'\t\t\t'}{estudiante.edad}</Text>
              <View style={styles.botonesContainer}>
                <TouchableOpacity onPress={() => handleEliminar(estudiante.id)}>
                  <Text style={styles.botonEliminar}>Eliminar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('editarEstudiante')}>
                  <Text style={styles.boton}>Editar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 20,
    },
    titulo: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    datosContainer: {
      width: '100%',
      paddingHorizontal: 10,
    },
    estudiante: {
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 5,
      padding: 5,
      marginTop: 10,
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    info: {
      flex: 1,
    },
    botonesContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    boton: {
      padding: 5,
      borderRadius: 5,
      backgroundColor: 'blue',
      color: 'white',
      marginLeft: 5,
    },
    botonEliminar: {
      padding: 5,
      borderRadius: 5,
      backgroundColor: 'red',
      color: 'white',
      marginLeft: 5,
    },
  });

export default mostrarEstudiantes;