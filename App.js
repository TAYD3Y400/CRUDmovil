import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SQLite from 'expo-sqlite'
import { useState, useEffect } from 'react';
//---------------------------------------------------------------
import MenuEstudiantes from './menuEstudiantes.js';
import MenuCursos from './menuCursos.js';
import MenuMatriculas from './menuMatriculas.js';
import crearEstudiante from './crearEstudiante.js';
import mostrarEstudiantes from './mostrarEstudiantes.js';
import editarEstudiante from './editarEstudiante.js';
import crearCurso from './crearCurso.js';
import editarCurso from './editarCurso.js';
import mostrarCursos from './mostrarCursos.js';
import crearMatricula from './crearMatricula.js';
import mostrarMatricula from './mostrarMatricula.js';


//Ventana principal que redirige a las demas subventanas
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{ marginVertical: 15}}>
        <Button
          title="Administrar estudiantes"
          onPress={() => navigation.navigate('MenuEstudiantes')}
        />
        <Button
          title="Administrar cursos"
          onPress={() => navigation.navigate('MenuCursos')}
        />
        <Button
          title="Administrar matriculas"
          onPress={() => navigation.navigate('MenuMatriculas')}
        />
      </View>
    </View>
  );
}

//Navegador para poder moverse entre las distintas paginas
const Stack = createStackNavigator();

//Navegador que contiene todas las ventanas
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MenuEstudiantes" component={MenuEstudiantes} />
        <Stack.Screen name="MenuCursos" component={MenuCursos} />
        <Stack.Screen name="MenuMatriculas" component={MenuMatriculas} />
        <Stack.Screen name="crearEstudiante" component={crearEstudiante} />
        <Stack.Screen name="mostrarEstudiantes" component={mostrarEstudiantes} />
        <Stack.Screen name="editarEstudiante" component={editarEstudiante} />
        <Stack.Screen name="crearCurso" component={crearCurso} />
        <Stack.Screen name="mostrarCursos" component={mostrarCursos} />
        <Stack.Screen name="editarCurso" component={editarCurso} />
        <Stack.Screen name="crearMatricula" component={crearMatricula} />
        <Stack.Screen name="mostrarMatricula" component={mostrarMatricula} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
