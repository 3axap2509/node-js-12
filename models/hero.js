module.exports = (Sequelize, sequelize) => {
    return sequelize.define('heroes', 
    {
        id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: Sequelize.STRING, allowNull: false, unique: true},
        race_id: {type: Sequelize.INTEGER, allowNull: false},
        class_id: {type: Sequelize.INTEGER, allowNull: false},
        weapon_id: {type: Sequelize.INTEGER, allowNull: false}
    })
  }