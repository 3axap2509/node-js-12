const Sequelize = require('sequelize');

const config = require('./config.json');

const db = require('./models')(Sequelize, config);


fff();

async function fff() {
    await db.sequelize.sync({force: true});
    await require('./createTables/classes')(db);
    await require('./createTables/races')(db);
    await require('./createTables/weapons')(db);
    await require('./createTables/heroes')(db);

    //Вывести всех героев
    console.log("\nВыбрать имена всех персонажей:");
    (await db.heroes.findAll()).forEach(hero =>
        {
            console.log(hero.name);
        });
    // 2. Выведем всех героев класса "Паладин" у кого любимая пицца "Mozzarella"
    //var sdf1 = 

    console.log("\nВыбрать имена всех персонажей класса 'Рыцарь смерти':");
    (await db.heroes.findAll(
        {
            where:
            {
                '$classt.name$': "Рыцарь Смерти"
            },
            include: 
            [{
                model: db.classes,
                as: 'classt'
            }]
        }
    )).forEach((hero, classt)=>
    {
        console.log(hero.name + '\t\t' + hero.dataValues.classt.name);
    });
    
    console.log("\nВыбрать все имена героев без повторов классов");
    (await db.heroes.findAll(
        {
            include: 
            [{
                model: db.classes,
                as: 'classt'
            }]
        }
    )).then((result) => 
    {
        result.map(res => res.name);
    }).forEach(hero=>
        {
            let obj = hero.dataValues.classt.name;
            console.log(obj);
        });
    // 3. Выведем все пиццы отмеченные как любимые без повторов
    // 4. Создадим пятую черепашку с вашим именем и любимым цветом. Незабываем про оружие
    // 5. Обновим все пиццы с количеством калорий больше 3000 добавив к описанию "SUPER FAT!"
    // 6. Запросим число оружий с dps больше 100
    // 7. Найдем пиццу с id равным 1
    // 8. Добавим пятой черепашке любимую пиццу через объект черепахи
}