module.exports = async (db) =>
{
    var humans_desc = 
    `Недавние открытия показали, что люди произошли от врайкулов — полувеликанов, обитающих в Нордсколе. 
В течение многих поколений племена людей жили разрозненно, и только угроза со стороны набирающей силу 
империи троллей заставила их объединиться. Так появилось государство Аратор, столицей которого стал город Стром.
    `;
    var dwarfs_desc = 
    `Отважные дворфы — древний народ, происходящий от земельников, существ из живого камня, созданных
титанами еще на заре мира. Из-за странной болезни, названной проклятьем плоти, земельники подверглись
трансформации: их каменная шкуре превратилась в мягкую кожу. В конце концов эти создания из плоти и крови 
стали называть себя дворфами и вырубили величественный город Стальгорн в толще заснеженных гор Каз Модана.`;
    var gnomes_desc = 
    `Умные, лихие и зачастую эксцентричные гномы – самая удивительная из цивилизованных рас Азерота. 
Эти неугомонные, обладающие веселым нравом гениальные изобретатели пережили предательство, потерю 
родного дома и едва не были полностью уничтожены. Оптимизм, проявленный гномами перед лицом подобных
    несчастий, как нельзя лучше характеризует непоколебимый дух этой расы.`;
    var night_elfs_desc = 
    `Древняя раса ночных эльфов — убежденных отшельников — сыграла важнейшую роль в определении истории Азерота. 
Более десяти тысяч лет назад героизм эльфийских воинов позволил остановить первое вторжение Пылающего Легиона. 
Минули столетия. Разрозненные обломки Легиона вновь сплотились, заручившись помощью подлых сатиров, и эльфы опять
выступили против врага. Последовавшая Война сатиров дорого обошлась ночным эльфам, но они все же сумели изгнать
со своей земли тех, кто сеял на ней хаос.`;
    var draeneis_desc = 
    `Задолго до того как падший титан Саргерас натравил Пылающий Легион на Азерот, он направил свой губительный взор на Аргус,
населенный представителями высокоразвитой расы эредаров. Саргерас надеялся, что искусные в магии эредары станут ключевой
составляющей его плана по уничтожению всего живого. Саргерас обратился к трем эредарским предводителям – Кил’джедену, 
Архимонду и Велену – и посулил им новые знания и невиданную силу, если те присягнут ему на верность.`;

    var orcs_desc = 
    `В отличие от других рас Орды, орки родом не из Азерота. Орки-шаманы жили племенами на цветущем Дреноре, 
пока мирный уклад их жизни не разрушил Кил’джеден, полководец Пылающего Легиона. При помощи Скверны он поработил орков 
и подчинил их своей воле, чтобы те помогли ему разделаться с дренеями, бежавшими из его родного мира.`;
    var taurens_desc = 
    `Миролюбивые таурены — или, на их собственном наречии, шу’хало, — издревле жили в Калимдоре, поддерживая равновесие
в природе и следуя заповедям своей богини, Матери-Земли. До недавних пор таурены кочевали по Степям и охотились на кодо, 
которые населяют эти засушливые земли.`;
    var undead_desc = 
    `Гибель не принесла смертного покоя множеству людей, истребленных Королем-личом в Лордероне. Павших превратили в нежить,
сделали приспешниками Плети и заставили вести жуткую войну против всех и всего, чем они раньше дорожили.`;
    var trolls_desc = 
    `Яростные тролли Азерота славятся своей жестокостью, ненавистью ко всем другим расам и страстью к темному мистицизму. 
Единственным исключением являются тролли племени Черного Копья. Это гордое племя изгнанников находилось на грани вымирания,
когда на их отдаленные острова в Южных морях забросило штормом могучих воинов Орды во главе с вождем Траллом.`;
    var blood_elfs_desc = 
    `Почти 7000 лет общество высших эльфов держалось вокруг священного Солнечного Колодца — волшебного источника, 
созданного из фиала чистой магической энергии первого Источника Вечности. Энергия Солнечного Колодца питала Кель’Талас,
и великолепное королевство высших эльфов процветало в густых лесах к северу от Лордерона.`;


    return Promise.all(
      [
        db.races.destroy({where:{}}),
        db.races.create(
            {
              name: "Человек",
              fraction: "Альянс",
              description: humans_desc
            }),
        db.races.create(
          {
            name: "Дворф",
            fraction: "Альянс",
            description: dwarfs_desc
          }),
        db.races.create(
          {
            name: "Ночной эльф",
            fraction: "Альянс",
            description: night_elfs_desc
          }),
        db.races.create(
          {
            name: "Гном",
            fraction: "Альянс",
            description: gnomes_desc
          }),
        db.races.create(
          {
            name: "Дреней",
            fraction: "Альянс",
            description: draeneis_desc
          }),
        db.races.create(
            {
              name: "Орк",
              fraction: "Орда",
              description: orcs_desc
            }),
        db.races.create(
          {
            name: "Нежить",
            fraction: "Орда",
            description: undead_desc
          }),
        db.races.create(
          {
            name: "Таурен",
            fraction: "Орда",
            description: taurens_desc
          }),
        db.races.create(
          {
            name: "Тролль",
            fraction: "Орда",
            description: trolls_desc
          }),
        db.races.create(
          {
            name: "Кровавый эльф",
            fraction: "Орда",
            description: blood_elfs_desc
          })
      ]
    ).then(() => {
      console.log('insert races completed');
    }).catch((err) => {
      console.log(err);
    })
  };