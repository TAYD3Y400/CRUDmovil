// Componente para la pantalla de administración de cursos
import React, { useState } from 'react';
import { View, Button } from 'react-native';

//Menu que muestra las opciones de gestion de cursos
function MenuCursos({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ marginVertical: 5}}>
          <Button
            title="Crear Curso"
            onPress={() => navigation.navigate('crearCurso')} //Creación
          />
          <Button
            title="Gestionar Cursos"
            onPress={() => navigation.navigate('mostrarCursos')} //Vizualización, Edición y elminacón
          />
        </View>
      </View>
    );
  }

  export default MenuCursos;