import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import db from './database.js';
import { useNavigation } from '@react-navigation/native'; 

function mostrarEstudiantes() {
    const [matriculas, setMatriculas] = useState([]);
    const navigation = useNavigation();
    
    //Se activa para eliminar unA matricula desde el boton eliminar
    const handleEliminar = (id) => {
      db.transaction((tx) => {
        tx.executeSql(
          'DELETE FROM estudiante_x_curso WHERE id = ?',  //elimina el estudiante segun el id que se le haya pasado
          [id],
          (_, result) => {
            console.log(`Matricula con id ${id} eliminada`);
            // Actualizar la lista de cursos
            const nuevasMatriculas = matriculas.filter(
              (matricula) => matricula.id !== id
            );
            setMatriculas(nuevasMatriculas);
          },
          (_, error) => {
            console.log(`Error al eliminar matricula con id ${id}: ${error}`);
          }
        );
      });
    }
    
    //Select que trae todos los datos de la tabla estudiante_x_curso y además hace los inner join correspondientes para los datos de otras tablas
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT estudiante_x_curso.id as id, curso.id as codigo_curso, estudiante.id as cedula, estudiante.nombre as nombre_estudiante, estudiante.apellido as apellido_estudiante, curso.nombre as nombre_curso, curso.grupo as grupo_curso " +
        "FROM estudiante_x_curso " +
        "INNER JOIN estudiante ON estudiante.id = estudiante_x_curso.id_estudiante " +
        "INNER JOIN curso ON curso.id = estudiante_x_curso.id_curso",
        [],
        (_, { rows }) => {
          const matriculaArray = [];
          for (let i = 0; i < rows.length; i++) {
            const matricula = rows.item(i);
            matriculaArray.push({
              id: matricula.id,
              cedula: matricula.cedula,
              nombre: matricula.nombre_estudiante,
              apellido: matricula.apellido_estudiante,
              codigo: matricula.codigo_curso,
              curso: matricula.nombre_curso,
              grupo: matricula.grupo_curso,
            });
          }
          setMatriculas(matriculaArray);
        }
      );
    });
  
    //render
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Lista de Matriculas</Text>
        <View style={styles.datosContainer}>
          {matriculas.map((matricula) => (
            <View key={matricula.cedula} style={styles.matriculas}>
              <Text style={styles.info}>{matricula.cedula}{'\t\t\t'}{matricula.nombre}{'\t\t\t'}{matricula.apellido}{'\t\t\t'}{matricula.curso}{'\t\t\t'}{matricula.grupo}</Text>
              <View style={styles.botonesContainer}>
                <TouchableOpacity onPress={() => handleEliminar(matricula.id)}>
                  <Text style={styles.botonEliminar}>Eliminar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
  

  //style necesario para acomodar todos los datos ya que esta ventana es un poco más compleja de acomodar
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