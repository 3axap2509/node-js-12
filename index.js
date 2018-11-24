const Sequelize = require('sequelize');

const config = require('./config.json');

const db = require('./models')(Sequelize, config);
const Op = Sequelize.Op;

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
    var classes_array= [];
    var heroes_array = [];
    

    // 3. Выведем все пиццы отмеченные как любимые без повторов
    console.log("\nВыбрать все существующие классы без повторов:");
    (await db.heroes.findAll(
        {
            include: 
            [{
                model: db.classes,
                as: 'classt'
            }]
        }
    )).forEach(hero=>
    {
        let obj = hero.dataValues.classt.name;
        if(!classes_array.includes(obj))
        {
            classes_array.push(obj);
            heroes_array.push(hero);
        }
    });
    heroes_array.forEach(hero =>
        {
            console.log(hero.name + '\t\t' + hero.dataValues.classt.name);
        })



    // 4. Создадим пятую черепашку с вашим именем и любимым цветом. Незабываем про оружие
    console.log("\nСоздать нового персонажа:");
    await db.weapons.create(
        {
            name: 'Золотой Микрофон',
            dps: 99999,
            type: "Микрофон"
        }
    );
    await db.classes.create(
        {
            name: "Суперстар",
            role: "Певица/телеведущая",
            weapon_type: "Микрофон",
            description: "Класс, созданный специально для Оли Бузовой"
        }
    );
    await db.races.create(
        {
            name: "Сверхчеловек",
            fraction: "Альянс",
            description: "Расса, созданная специально для Оли Бузовой"
        }
    );
    await db.heroes.create(
        {
            name: "Оля Бузова",
            class_id: 11,
            race_id: 11,
            weapon_id: 14
        }
    );

    (await db.heroes.findAll(
        {
            include:
            [{
                model: db.classes,
                as: 'classt'
            }],
            where:
            {
                class_id: '11'
            }
        }
        
    )
    ).forEach(hero =>
        {
            console.log('Персонаж '+hero.name + ' создан');
        });
    // 5. Обновим все пиццы с количеством калорий больше 3000 добавив к описанию "SUPER FAT!"
    await db.weapons.update(
            {
                description: 'Оч большой урон, просто минус жызень'
            },
            {
                where:
                {
                    dps: { [Op.gt]: 900}
                }
            }
    ).then((row)=>
    {
        console.log(`\n${row} строк было обновлено`);
    })
    // 6. Запросим число оружий с dps больше 100
    var t6 = await db.weapons.findAll(
    {
        where:
        {
            dps: { [Op.gt]: 100}
        }
    }
    )

    console.log(`\n${t6.length} экземпляров оружия с уроном > 100: `)
    t6.forEach(weapon =>
        {
            console.log('Оружие: ' + weapon.name + '\tурон: ' + weapon.dps + '\n\tОписание: ' + weapon.description);
        });
    // 7.  Выведем всех персонажей и их основные поля
        console.log('\nВыбрать всех персонажей и их основные поля:');
    (await db.heroes.findAll(
        {
            include: 
            [{
                model: db.classes,
                as: 'classt'
            },
            {
                model: db.weapons,
                as: 'weapon'
            },
            {
                model: db.races,
                as: 'race'
            }]
        }
    )).forEach(hero =>
        {
            let buf =  hero.dataValues;
            console.log('Имя: ' + hero.name +', \tраса: ' + buf["race"].name + ', \tкласс: ' + buf["classt"].name + ', \tроль: ' + buf["classt"].role +', \tоружие: ' + buf["weapon"].name);
        });

    console.log('\nИспользование Group by:');

    (await db.heroes.findAll({
        group: ['classt.name'],
        include:
        [
            {
                model: db.classes,
                as: 'classt',
                attributes: [[models.sequelize.fn('sum', models.sequelize.col('payments.payment_amount')), 'total_cost']]
            }
        ]
    })).forEach(hero=>
        {
            console.log(hero.name + '\t\t' + hero.dataValues.classt.name);
        });
}