const Class = require('./class');
const Race = require('./race');
const Weapon = require('./weapon');
const Hero = require('./hero');

module.exports = (Sequelize, config) => {
const seq = new Sequelize(config.db,
  config.login,
  config.password,
  {
      host: config.host,
      dialect: config.dialect,
      logging: false
  });
seq.authenticate().then(()=>
{
    console.log("Connected to DB")
}).catch((err)=>
{
    console.log(err);
})
  const weapons = Weapon(Sequelize, seq);
  const classes = Class(Sequelize, seq);
  const races = Race(Sequelize, seq);
  const heroes = Hero(Sequelize, seq);

  
  // TODO: создание связей между таблицами

  heroes.belongsTo(classes,
  { 
    foreignKey: 'class_id',
    as: 'classt'
  });
  heroes.belongsTo(races,
  { 
    foreignKey: 'race_id',
    as: 'race'
  });
  heroes.belongsTo(weapons,
  { 
    foreignKey: 'weapon_id',
    as: 'weapon'
  });

  return {
    heroes,
    classes,
    weapons,
    races,
    
    sequelize: seq,
    Sequelize: Sequelize,
  };
};