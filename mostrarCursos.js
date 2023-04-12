import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import db from './database.js';
import { useNavigation } from '@react-navigation/native'; 


//Ventana para mostrar y gestionar los cursos ya creados
function mostrarCursos() {
    const [cursos, setCursos] = useState([]);
    const navigation = useNavigation();
    

    //Se activa para eliminar un curso desde el boton eliminar
    const handleEliminar = (id) => {
      db.transaction((tx) => {
        tx.executeSql(
          'DELETE FROM curso WHERE id = ?',
          [id],
          (_, result) => {
            console.log(`Curso con id ${id} eliminado`);
            // Actualizar la lista de cursos
            const nuevosCursos = cursos.filter(
              (curso) => curso.id !== id
            );
            setCursos(nuevosCursos);
          },
          (_, error) => {
            console.log(`Error al eliminar curso con id ${id}: ${error}`);
          }
        );
      });
    }
    
    //Select que trae todos los datos de la base de datos
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT id, nombre, grupo FROM curso',
        [],
        (_, { rows }) => {
          const cursosArray = [];
          for (let i = 0; i < rows.length; i++) {
            const curso = rows.item(i);
            cursosArray.push({
              id: curso.id,
              nombre: curso.nombre,
              grupo: "0"+curso.grupo,
            }); //almacena los cursos que va leyendo
          }
          setCursos(cursosArray);
        }
      );
    });
    
    //render
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Lista de Cursos</Text>
        <View style={styles.datosContainer}>
          {cursos.map((curso) => (
            <View key={curso.id} style={styles.cursos}>
              <Text style={styles.info}>{curso.id}{'\t\t\t'}{curso.nombre}{'\t\t\t'}{curso.grupo}</Text>
              <View style={styles.botonesContainer}>
                <TouchableOpacity onPress={() => handleEliminar(curso.id)}>
                  <Text style={styles.botonEliminar}>Eliminar</Text> 
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('editarCurso', 
                { id: curso.id, nombre: curso.nombre, grupo: curso.grupo })}>
                  <Text style={styles.boton}>Editar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
  
  //Style de la ventana
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
    curso: {
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

export default mostrarCursos;