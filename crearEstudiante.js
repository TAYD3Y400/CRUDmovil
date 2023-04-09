import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function crearEstudiante() {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = () => {
    console.log(name, course, grade);
    // Aquí podrías realizar la llamada a la API para guardar la información en la base de datos
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Agregar Estudiante</Text>
      <View style={{ marginVertical: 10 }}>
        <TextInput placeholder="Cedula" value={name} onChangeText={setName} style={{ borderWidth: 1, borderRadius: 5, padding: 5, width: 200 }} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <TextInput placeholder="Nombre" value={course} onChangeText={setCourse} style={{ borderWidth: 1, borderRadius: 5, padding: 5, width: 200 }} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <TextInput placeholder="Apellido" value={grade} onChangeText={setGrade} style={{ borderWidth: 1, borderRadius: 5, padding: 5, width: 200 }} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <TextInput placeholder="Edad" value={grade} onChangeText={setGrade} style={{ borderWidth: 1, borderRadius: 5, padding: 5, width: 200 }} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button title="Agregar" onPress={handleSubmit} />
      </View>
    </View>
  );
}

export default crearEstudiante;