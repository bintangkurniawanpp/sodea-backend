import dotenv from "dotenv";
dotenv.config();

const config = {
  development: {
    port: process.env.PORT,
    dbPort: process.env.POSTGRESQL_PORT,
    dbUsername: process.env.POSTGRESQL_USERNAME,
    dbPassword: process.env.POSTGRESQL_PASSWORD,
    database: process.env.POSTGRESQL_CONNECTION,
    host: process.env.POSTGRESQL_HOST,
    dialect: 'postgresql'

  },
  test: {},
  production: {},
};

export default config


