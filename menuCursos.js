// Componente para la pantalla de administración de cursos
import React, { useState } from 'react';
import { View, Button } from 'react-native';

function MenuCursos({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ marginVertical: 5}}>
          <Button
            title="Crear Curso"
            //onPress={() => /* Navegar a la pantalla de crear estudiante */}
          /> 
          <Button
            title="Ver Curso"
            //onPress={() => /* Navegar a la pantalla de ver estudiante */}
          />
          <Button
            title="Actualizar Curso"
            //onPress={() => /* Navegar a la pantalla de actualizar estudiante */}
          />
          <Button
            title="Eliminar Curso"
            //onPress={() => /* Navegar a la pantalla de eliminar estudiante */}
          />
        </View>
      </View>
    );
  }

  export default MenuCursos;