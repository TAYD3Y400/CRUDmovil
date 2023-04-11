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
          <Button
            title="Actualizar estudiante"
            //onPress={() => /* Navegar a la pantalla de actualizar estudiante */}
          />
          <Button
            title="Eliminar estudiante"
            //onPress={() => /* Navegar a la pantalla de eliminar estudiante */}
          />
        </View>
      </View>
    );
  }

  export default MenuEstudiantes;