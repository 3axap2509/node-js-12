module.exports = (Sequelize, sequelize) => {
    return sequelize.define('races', 
    {
        id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: Sequelize.STRING, allowNull: false, unique: true},
        fraction: {type: Sequelize.STRING, allowNull: false},
        description: {type: Sequelize.TEXT, allowNull: false}
    })
  }