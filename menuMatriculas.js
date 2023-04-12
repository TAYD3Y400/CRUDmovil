// Componente para la pantalla de administración de matriculas
import React, { useState } from 'react';
import { View, Button } from 'react-native';


//Menu que meustra las opciones de gestion de matriculas
function MenuMatriculas({ navigation }) {
    return (
      <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ marginVertical: 15}}>
          <Button
            title="Crear Matricula"
            onPress={() => navigation.navigate('crearMatricula')} //creción de la matricula
          />
          <Button
            title="Ver Matricula"
            onPress={() => navigation.navigate('mostrarMatricula')} //creción de las matriculas
          />
        </View>
      </View>
    );
  }

  export default MenuMatriculas;