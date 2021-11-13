import * as SQLite from "expo-sqlite";

const DatabaseConnection = {
  getConnection: () => SQLite.openDatabase("databasepro.db"),
};

const db = DatabaseConnection.getConnection();

export default db;
