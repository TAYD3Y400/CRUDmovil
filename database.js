import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('sistemaMatricula.db');

// Crea la tabla "estudiante"
db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS estudiante (id INTEGER PRIMARY KEY, nombre TEXT NOT NULL, apellido TEXT NOT NULL, edad INTEGER NOT NULL);'
  );
});

// Crea la tabla "curso"
db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS cursos (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT NOT NULL);'
  );
});

// Crea la tabla "estudiante_x_curso"
db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS estudiante_x_curso (FOREIGN KEY (id_estudiante) REFERENCES estudiante (id), FOREIGN KEY (id_curso) REFERENCES curso (id));'
  );
});


export default db;