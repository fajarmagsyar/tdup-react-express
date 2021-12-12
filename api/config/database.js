import { Sequelize } from "sequelize";

const db = new Sequelize('db_tdup', 'postgres', 'root', {
    host: "localhost",
    dialect: "postgres",
});

export default db;