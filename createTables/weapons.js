module.exports = async (db) => {
	var Shadowmourne_desc = 
	`	Некоторые кузнецы утверждают, что Темную Скорбь можно сделать из обычного топора, 
	заточив его лезвие до несравненной остроты, другие же полагают, что для его создания нужно оружие невероятной мощи.
	Утверждают, будто Могрейн, разговорившись, признается, что основой для Темной Скорби, по его мнению, может послужить 
	только молот самого Артаса – но эта невероятная находка станет лишь первым шагом на пути создания великого топора. 
		Чтобы удержать силы, танцующие на его ледяных лезвиях, Темную Скорбь следует выковать из осколков
	неочищенного саронита - застывшей крови древнего бога Йогг-Сарона. Материал этот покорится молоту лишь самых умелых мастеров. 
		Чтобы поддерживать его убийственную мощь, необходимо напитать Темную Скорбь душами самых сильных слуг Плети,
	уничтожив их одного за другим еще не остывшим клинком.`;

	var Frostmourne_desc = 
	`	Ледяная Скорбь обладает способностью вытягивать жизнь из своих жертв, а также душу каждого, кого касается. 
	Король-лич(её обладатель) может видеть глазами и слышать ушами любого, кто держит меч в руке, и никакие средства, доступные смертным,
	не могут предотвратить этого. Король-лич может общаться с владельцем оружия телепатически на любом расстоянии,
	даже если тот находится вне материального мира. Правитель Плети использует эту способность,
	чтобы склонить владельца меча на свою сторону.
		Владелец Ледяной Скорби не может расстаться с оружием добровольно и со временем начинает склоняться ко злу,
	даже если обладал добрым характером. Если владелец ещё не был нежитью, он обращается в неё. 
	Меч затягивает души внутрь себя и сохраняет воспоминания и навыки жертв.`;

	var Atiesh_desc = 
	`Атиеш — личный посох Медива, он был инструментом фокусировки его магической силы и артефактом великой силы.
	К несчастью, из-за присутствия духа Саргераса в теле Медива, посох подвергся порче. Саргерас наделил посох некоторой разумностью.
	После гибели Медива Кирин Тор снарядил экспедицию магов для поиска и изучения хранящихся в Каражане артефактов.
	Тогда-то Атиеш был найден и доставлен в Даларан. Но все маги Кирин Тора, контактировавшие с посохом, погибли в
	результате серии странных происшествий, поэтому Совет Шести решил в целях безопасности защитить посох магическими барьерами,
	назначив наблюдателя для охраны. Этим наблюдателем стала архимаг Анджела Досантос. `;


	return Promise.all(
		[
			db.weapons.create({
				name: 'Грань Тьмы',
				dps: 99,
				type: "Топор",
				description: Shadowmourne_desc
			}),
			db.weapons.create({
				name: 'Ледяная Скорбь',
				dps: 155,
				type: "Меч",
				description: Frostmourne_desc
			}),
			db.weapons.create({
				name: 'Атиеш',
				dps: 121,
				type: "Посох",
				description: Atiesh_desc
			}),
			db.weapons.create({
				name: 'Тёмная скорбь',
				dps: 73,
				type: "Топор"
			}),
			db.weapons.create({
				name: 'Испепелитель',
				dps: 121,
				type: "Меч"
			}),
			db.weapons.create({
				name: `Тель'тас, кинжал Кровавого короля`,
				dps: 110,
				type: "Кинжал"
			})
			,
			db.weapons.create({
				name: 'Халион, посох забытой любви',
				dps: 100,
				type: "Посох"
			}),
			db.weapons.create({
				name: 'Пронзатель сердец Ветрокрылых',
				dps: 125,
				type: "Арбалет"
			}),
			db.weapons.create({
				name: 'Ярость Шторма, черный клинок Предателя',
				dps: 101,
				type: "Кинжал"
			}),
			db.weapons.create({
				name: 'Пугиус, боевая перчатка неповиновения',
				dps: 78,
				type: "Кистевое"
			}),
			db.weapons.create({
				name: 'Оскверненная ветвь Нордрассила',
				dps: 65,
				type: "Посох"
			}),
			db.weapons.create({
				name: 'Валий, молот Светоносного',
				dps: 105,
				type: "Дробящее"
			}),
			db.weapons.create({
				name: 'Проклятье Трогга, секира зиморожденного короля',
				dps: 115,
				type: "Топор"
			}).then(() => {
				console.log('insert weapons completed');
			  }).catch((err) => {
				console.log(err);
			  })
		]
	)
};