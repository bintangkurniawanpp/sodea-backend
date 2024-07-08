import { Sequelize } from 'sequelize';
import config from "./config.js";

const getConfig = () => {
    const env = process.env.NODE_ENV || 'development'; // Default to development if no env specified
    return config[env];
}
  
const { port, dbPort, dbUsername, dbPassword, database, host, dialect } = getConfig();
  
const sequelize = new Sequelize(database, dbUsername, dbPassword, {
    host,
    dialect,
    port: dbPort
});

const test = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

test();


  