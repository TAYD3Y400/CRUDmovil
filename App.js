import React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MenuEstudiantes from './menuEstudiantes.js';
import MenuCursos from './menuCursos.js';
import MenuMatriculas from './menuMatriculas.js';
import crearEstudiante from './crearEstudiante.js';

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

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MenuEstudiantes" component={MenuEstudiantes} />
        <Stack.Screen name="MenuCursos" component={MenuCursos} />
        <Stack.Screen name="MenuMatriculas" component={MenuMatriculas} />
        <Stack.Screen name="crearEstudiante" component={crearEstudiante} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
