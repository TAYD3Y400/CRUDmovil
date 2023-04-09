// Componente para la pantalla de administración de matriculas
import React, { useState } from 'react';
import { View, Button } from 'react-native';

function MenuMatriculas({ navigation }) {
    return (
      <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ marginVertical: 15}}>
          <Button
            title="Crear Matricula"
            //onPress={() => /* Navegar a la pantalla de crear estudiante */}
          />
          <Button
            title="Ver Matricula"
            //onPress={() => /* Navegar a la pantalla de ver estudiante */}
          />
          <Button
            title="Actualizar Matricula"
            //onPress={() => /* Navegar a la pantalla de actualizar estudiante */}
          />
          <Button
            title="Eliminar Matricula"
            //onPress={() => /* Navegar a la pantalla de eliminar estudiante */}
          />
        </View>
      </View>
    );
  }

  export default MenuMatriculas;