const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'place-tracker_app_db',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true
  }
});

const Place = sequelize.define('place', {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  visited: Sequelize.BOOLEAN,
  address: Sequelize.STRING
});

//add more const!

module.exports = {
  sequelize,
  Place
};
