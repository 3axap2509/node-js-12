module.exports = async (db) => {

	return Promise.all(
		[
			db.heroes.destroy({where:{}}),
			db.heroes.create({
				name: 'Артас',
				race_id: 1,
				class_id: 1,
				weapon_id: 1
			}),
			db.heroes.create({
				name: 'Бронзобород',
				race_id: 6,
				class_id: 5,
				weapon_id: 4
			}),
			db.heroes.create({
				name: `Кель'Тас`,
				race_id: 4,
				class_id: 2,
				weapon_id: 7
			}),
			db.heroes.create({
				name: 'Джун',
				race_id: 8,
				class_id: 9,
				weapon_id: 2
			}),
			db.heroes.create({
				name: 'Моргус',
				race_id: 2,
				class_id: 6,
				weapon_id: 9
			}),
			db.heroes.create({
				name: `Вариан`,
				race_id: 1,
				class_id: 2,
				weapon_id: 3
			}),
			db.heroes.create({
				name: `Тирион`,
				race_id: 1,
				class_id: 4,
				weapon_id: 1
			}),
			db.heroes.create({
				name: 'Иллидан',
				race_id: 4,
				class_id: 4,
				weapon_id: 8
			}),
			db.heroes.create({
				name: `Кил'Джеден`,
				race_id: 6,
				class_id: 8,
				weapon_id: 2
			}),
			db.heroes.create({
				name: 'Джайна Праудмур',
				race_id: 1,
				class_id: 6,
				weapon_id: 7
			}),
			db.heroes.create({
				name: 'Аланар',
				race_id: 8,
				class_id: 2,
				weapon_id: 3
			})
			
		]
	).then(() => {
		console.log('insert heroes completed');
	}).catch((err) => {
		console.log(err);
	})
};