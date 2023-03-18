import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

// Databases connexion config to developpment environnement (local sever)

// module.exports = {
//   HOST: "localhost",
//   USER: "postgres",
//   PASSWORD: "dbiaelflor123",
//   DB: "testdb",
//   dialect: "postgres",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };

dotenv.config();

export const db = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`);

