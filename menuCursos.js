// Componente para la pantalla de administración de cursos
import React, { useState } from 'react';
import { View, Button } from 'react-native';

function MenuCursos({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ marginVertical: 5}}>
          <Button
            title="Crear Curso"
            onPress={() => navigation.navigate('crearCurso')}
          />
          <Button
            title="Gestionar Cursos"
            onPress={() => navigation.navigate('mostrarCursos')}
          />
        </View>
      </View>
    );
  }

  export default MenuCursos;