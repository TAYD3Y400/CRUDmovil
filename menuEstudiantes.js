// Componente para la pantalla de administración de estudiantes
import React, { useState } from 'react';
import { View, Button } from 'react-native';

//Ventana que nos muestra las opciones de CRUD de estudiante
function MenuEstudiantes({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ marginVertical: 15}}>
          <Button
            title="Crear estudiante"
            onPress={() => navigation.navigate('crearEstudiante')} //Redirige al form para ingresar 
          />
          <Button
            title="Gestionar estudiantes"
            onPress={() => navigation.navigate('mostrarEstudiantes')} //Redirige a la ventana que muestra, edita y elimina
          />
        </View>
      </View>
    );
  }

  export default MenuEstudiantes;