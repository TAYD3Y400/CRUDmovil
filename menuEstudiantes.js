// Componente para la pantalla de administración de estudiantes
import React, { useState } from 'react';
import { View, Button } from 'react-native';

function MenuEstudiantes({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ marginVertical: 15}}>
          <Button
            title="Crear estudiante"
            onPress={() => navigation.navigate('crearEstudiante')}
          />
          <Button
            title="Gestionar estudiantes"
            onPress={() => navigation.navigate('mostrarEstudiantes')}
          />
        </View>
      </View>
    );
  }

  export default MenuEstudiantes;