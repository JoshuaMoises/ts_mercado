import { Sequelize } from '@sequelize/core';
import { MySqlDialect } from '@sequelize/mysql';

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;

const connection: Sequelize = new Sequelize({
  dialect: MySqlDialect,
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASS,
  host: DB_HOST,
  port: 3306,
});

export default connection;