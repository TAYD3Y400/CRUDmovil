import * as SQLite from 'expo-sqlite';

//se abré la conexión con la base de datos
const db = SQLite.openDatabase('sistemaMatricula.db');

/*db.transaction(tx => {
  tx.executeSql(
    'DROP TABLE IF EXISTS estudiante_x_curso;'
  );
});*/

// Crea la tabla "estudiante"
db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS estudiante (id INTEGER PRIMARY KEY, nombre TEXT NOT NULL, apellido TEXT NOT NULL, edad INTEGER NOT NULL);'
  );
});

// Crea la tabla "curso"
db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS curso (id TEXT PRIMARY KEY, nombre TEXT NOT NULL, grupo INTEGER NOT NULL);'
  );
});

// Crea la tabla "estudiante_x_curso"
db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS estudiante_x_curso (id TEXT PRIMARY KEY, id_estudiante INTEGER NOT NULL, id_curso TEXT NOT NULL, FOREIGN KEY (id_estudiante) REFERENCES estudiantes (id), FOREIGN KEY (id_curso) REFERENCES curso (id));'
  );
});


export default db;