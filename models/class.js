module.exports = (Sequelize, sequelize) => {
    return sequelize.define('classes', 
    {
        id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: Sequelize.STRING, allowNull: false, unique: true},
        role: {type: Sequelize.STRING, allowNull: false},
        weapon_type: {type: Sequelize.STRING, allowNull: false},
        description: {type: Sequelize.TEXT, allowNull: false}
    });
  }