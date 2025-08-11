import { prisma } from '..';

export default async function citySeeder() {
  if ((await prisma.ibgeCity.count()) > 0) return;

  await prisma.ibgeCity.createMany({
    data: [
      {
        ibge_id: 1100015,
        name: "Alta Floresta D'Oeste",
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100023,
        name: 'Ariquemes',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100031,
        name: 'Cabixi',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100049,
        name: 'Cacoal',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100056,
        name: 'Cerejeiras',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100064,
        name: 'Colorado do Oeste',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100072,
        name: 'Corumbiara',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100080,
        name: 'Costa Marques',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100098,
        name: "Espigão D'Oeste",
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100106,
        name: 'Guajará-Mirim',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100114,
        name: 'Jaru',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100122,
        name: 'Ji-Paraná',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100130,
        name: "Machadinho D'Oeste",
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100148,
        name: "Nova Brasilândia D'Oeste",
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100155,
        name: 'Ouro Preto do Oeste',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100189,
        name: 'Pimenta Bueno',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100205,
        name: 'Porto Velho',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100254,
        name: 'Presidente Médici',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100262,
        name: 'Rio Crespo',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100288,
        name: 'Rolim de Moura',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100296,
        name: "Santa Luzia D'Oeste",
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100304,
        name: 'Vilhena',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100320,
        name: 'São Miguel do Guaporé',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100338,
        name: 'Nova Mamoré',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100346,
        name: "Alvorada D'Oeste",
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100379,
        name: 'Alto Alegre dos Parecis',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100403,
        name: 'Alto Paraíso',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100452,
        name: 'Buritis',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100502,
        name: 'Novo Horizonte do Oeste',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100601,
        name: 'Cacaulândia',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100700,
        name: 'Campo Novo de Rondônia',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100809,
        name: 'Candeias do Jamari',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100908,
        name: 'Castanheiras',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100924,
        name: 'Chupinguaia',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1100940,
        name: 'Cujubim',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1101005,
        name: 'Governador Jorge Teixeira',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1101104,
        name: 'Itapuã do Oeste',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1101203,
        name: 'Ministro Andreazza',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1101302,
        name: 'Mirante da Serra',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1101401,
        name: 'Monte Negro',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1101435,
        name: 'Nova União',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1101450,
        name: 'Parecis',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1101468,
        name: 'Pimenteiras do Oeste',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1101476,
        name: 'Primavera de Rondônia',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1101484,
        name: "São Felipe D'Oeste",
        ibge_state_id: 11,
      },
      {
        ibge_id: 1101492,
        name: 'São Francisco do Guaporé',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1101500,
        name: 'Seringueiras',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1101559,
        name: 'Teixeirópolis',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1101609,
        name: 'Theobroma',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1101708,
        name: 'Urupá',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1101757,
        name: 'Vale do Anari',
        ibge_state_id: 11,
      },
      {
        ibge_id: 1101807,
        name: 'Vale do Paraíso',
        ibge_state_id: 11,
      },
    ],
  });

  await prisma.ibgeCity.createMany({
    data: [
      {
        ibge_id: 1200013,
        name: 'Acrelândia',
        ibge_state_id: 12,
      },
      {
        ibge_id: 1200054,
        name: 'Assis Brasil',
        ibge_state_id: 12,
      },
      {
        ibge_id: 1200104,
        name: 'Brasiléia',
        ibge_state_id: 12,
      },
      {
        ibge_id: 1200138,
        name: 'Bujari',
        ibge_state_id: 12,
      },
      {
        ibge_id: 1200179,
        name: 'Capixaba',
        ibge_state_id: 12,
      },
      {
        ibge_id: 1200203,
        name: 'Cruzeiro do Sul',
        ibge_state_id: 12,
      },
      {
        ibge_id: 1200252,
        name: 'Epitaciolândia',
        ibge_state_id: 12,
      },
      {
        ibge_id: 1200302,
        name: 'Feijó',
        ibge_state_id: 12,
      },
      {
        ibge_id: 1200328,
        name: 'Jordão',
        ibge_state_id: 12,
      },
      {
        ibge_id: 1200336,
        name: 'Mâncio Lima',
        ibge_state_id: 12,
      },
      {
        ibge_id: 1200344,
        name: 'Manoel Urbano',
        ibge_state_id: 12,
      },
      {
        ibge_id: 1200351,
        name: 'Marechal Thaumaturgo',
        ibge_state_id: 12,
      },
      {
        ibge_id: 1200385,
        name: 'Plácibge_ido de Castro',
        ibge_state_id: 12,
      },
      {
        ibge_id: 1200393,
        name: 'Porto Walter',
        ibge_state_id: 12,
      },
      {
        ibge_id: 1200401,
        name: 'Rio Branco',
        ibge_state_id: 12,
      },
      {
        ibge_id: 1200427,
        name: 'Rodrigues Alves',
        ibge_state_id: 12,
      },
      {
        ibge_id: 1200435,
        name: 'Santa Rosa do Purus',
        ibge_state_id: 12,
      },
      {
        ibge_id: 1200450,
        name: 'Senador Guiomard',
        ibge_state_id: 12,
      },
      {
        ibge_id: 1200500,
        name: 'Sena Madureira',
        ibge_state_id: 12,
      },
      {
        ibge_id: 1200609,
        name: 'Tarauacá',
        ibge_state_id: 12,
      },
      {
        ibge_id: 1200708,
        name: 'Xapuri',
        ibge_state_id: 12,
      },
      {
        ibge_id: 1200807,
        name: 'Porto Acre',
        ibge_state_id: 12,
      },
    ],
  });

  await prisma.ibgeCity.createMany({
    data: [
      {
        ibge_id: 1300029,
        name: 'Alvarães',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1300060,
        name: 'Amaturá',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1300086,
        name: 'Anamã',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1300102,
        name: 'Anori',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1300144,
        name: 'Apuí',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1300201,
        name: 'Atalaia do Norte',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1300300,
        name: 'Autazes',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1300409,
        name: 'Barcelos',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1300508,
        name: 'Barreirinha',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1300607,
        name: 'Benjamin Constant',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1300631,
        name: 'Beruri',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1300680,
        name: 'Boa Vista do Ramos',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1300706,
        name: 'Boca do Acre',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1300805,
        name: 'Borba',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1300839,
        name: 'Caapiranga',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1300904,
        name: 'Canutama',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1301001,
        name: 'Carauari',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1301100,
        name: 'Careiro',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1301159,
        name: 'Careiro da Várzea',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1301209,
        name: 'Coari',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1301308,
        name: 'Codajás',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1301407,
        name: 'Eirunepé',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1301506,
        name: 'Envira',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1301605,
        name: 'Fonte Boa',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1301654,
        name: 'Guajará',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1301704,
        name: 'Humaitá',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1301803,
        name: 'Ipixuna',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1301852,
        name: 'Iranduba',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1301902,
        name: 'Itacoatiara',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1301951,
        name: 'Itamarati',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1302009,
        name: 'Itapiranga',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1302108,
        name: 'Japurá',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1302207,
        name: 'Juruá',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1302306,
        name: 'Jutaí',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1302405,
        name: 'Lábrea',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1302504,
        name: 'Manacapuru',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1302553,
        name: 'Manaquiri',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1302603,
        name: 'Manaus',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1302702,
        name: 'Manicoré',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1302801,
        name: 'Maraã',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1302900,
        name: 'Maués',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1303007,
        name: 'Nhamundá',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1303106,
        name: 'Nova Olinda do Norte',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1303205,
        name: 'Novo Airão',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1303304,
        name: 'Novo Aripuanã',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1303403,
        name: 'Parintins',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1303502,
        name: 'Pauini',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1303536,
        name: 'Presibge_idente Figueiredo',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1303569,
        name: 'Rio Preto da Eva',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1303601,
        name: 'Santa Isabel do Rio Negro',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1303700,
        name: 'Santo Antônio do Içá',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1303809,
        name: 'São Gabriel da Cachoeira',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1303908,
        name: 'São Paulo de Olivença',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1303957,
        name: 'São Sebastião do Uatumã',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1304005,
        name: 'Silves',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1304062,
        name: 'Tabatinga',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1304104,
        name: 'Tapauá',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1304203,
        name: 'Tefé',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1304237,
        name: 'Tonantins',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1304260,
        name: 'Uarini',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1304302,
        name: 'Urucará',
        ibge_state_id: 13,
      },
      {
        ibge_id: 1304401,
        name: 'Urucurituba',
        ibge_state_id: 13,
      },
    ],
  });

  await prisma.ibgeCity.createMany({
    data: [
      {
        ibge_id: 1400027,
        name: 'Amajari',
        ibge_state_id: 14,
      },
      {
        ibge_id: 1400050,
        name: 'Alto Alegre',
        ibge_state_id: 14,
      },
      {
        ibge_id: 1400100,
        name: 'Boa Vista',
        ibge_state_id: 14,
      },
      {
        ibge_id: 1400159,
        name: 'Bonfim',
        ibge_state_id: 14,
      },
      {
        ibge_id: 1400175,
        name: 'Cantá',
        ibge_state_id: 14,
      },
      {
        ibge_id: 1400209,
        name: 'Caracaraí',
        ibge_state_id: 14,
      },
      {
        ibge_id: 1400233,
        name: 'Caroebe',
        ibge_state_id: 14,
      },
      {
        ibge_id: 1400282,
        name: 'Iracema',
        ibge_state_id: 14,
      },
      {
        ibge_id: 1400308,
        name: 'Mucajaí',
        ibge_state_id: 14,
      },
      {
        ibge_id: 1400407,
        name: 'Normandia',
        ibge_state_id: 14,
      },
      {
        ibge_id: 1400456,
        name: 'Pacaraima',
        ibge_state_id: 14,
      },
      {
        ibge_id: 1400472,
        name: 'Rorainópolis',
        ibge_state_id: 14,
      },
      {
        ibge_id: 1400506,
        name: 'São João da Baliza',
        ibge_state_id: 14,
      },
      {
        ibge_id: 1400605,
        name: 'São Luiz',
        ibge_state_id: 14,
      },
      {
        ibge_id: 1400704,
        name: 'Uiramutã',
        ibge_state_id: 14,
      },
    ],
  });

  await prisma.ibgeCity.createMany({
    data: [
      {
        ibge_id: 1500107,
        name: 'Abaetetuba',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1500131,
        name: 'Abel Figueiredo',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1500206,
        name: 'Acará',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1500305,
        name: 'Afuá',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1500347,
        name: 'Água Azul do Norte',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1500404,
        name: 'Alenquer',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1500503,
        name: 'Almeirim',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1500602,
        name: 'Altamira',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1500701,
        name: 'Anajás',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1500800,
        name: 'Ananindeua',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1500859,
        name: 'Anapu',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1500909,
        name: 'Augusto Corrêa',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1500958,
        name: 'Aurora do Pará',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1501006,
        name: 'Aveiro',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1501105,
        name: 'Bagre',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1501204,
        name: 'Baião',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1501253,
        name: 'Bannach',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1501303,
        name: 'Barcarena',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1501402,
        name: 'Belém',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1501451,
        name: 'Belterra',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1501501,
        name: 'Benevides',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1501576,
        name: 'Bom Jesus do Tocantins',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1501600,
        name: 'Bonito',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1501709,
        name: 'Bragança',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1501725,
        name: 'Brasil Novo',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1501758,
        name: 'Brejo Grande do Araguaia',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1501782,
        name: 'Breu Branco',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1501808,
        name: 'Breves',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1501907,
        name: 'Bujaru',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1501956,
        name: 'Cachoeira do Piriá',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1502004,
        name: 'Cachoeira do Arari',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1502103,
        name: 'Cametá',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1502152,
        name: 'Canaã dos Carajás',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1502202,
        name: 'Capanema',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1502301,
        name: 'Capitão Poço',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1502400,
        name: 'Castanhal',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1502509,
        name: 'Chaves',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1502608,
        name: 'Colares',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1502707,
        name: 'Conceição do Araguaia',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1502756,
        name: 'Concórdia do Pará',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1502764,
        name: 'Cumaru do Norte',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1502772,
        name: 'Curionópolis',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1502806,
        name: 'Curralinho',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1502855,
        name: 'Curuá',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1502905,
        name: 'Curuçá',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1502939,
        name: 'Dom Eliseu',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1502954,
        name: 'Eldorado do Carajás',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1503002,
        name: 'Faro',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1503044,
        name: 'Floresta do Araguaia',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1503077,
        name: 'Garrafão do Norte',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1503093,
        name: 'Goianésia do Pará',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1503101,
        name: 'Gurupá',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1503200,
        name: 'Igarapé-Açu',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1503309,
        name: 'Igarapé-Miri',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1503408,
        name: 'Inhangapi',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1503457,
        name: 'Ipixuna do Pará',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1503507,
        name: 'Irituia',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1503606,
        name: 'Itaituba',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1503705,
        name: 'Itupiranga',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1503754,
        name: 'Jacareacanga',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1503804,
        name: 'Jacundá',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1503903,
        name: 'Juruti',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1504000,
        name: 'Limoeiro do Ajuru',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1504059,
        name: 'Mãe do Rio',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1504109,
        name: 'Magalhães Barata',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1504208,
        name: 'Marabá',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1504307,
        name: 'Maracanã',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1504406,
        name: 'Marapanim',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1504422,
        name: 'Marituba',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1504455,
        name: 'Medicilândia',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1504505,
        name: 'Melgaço',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1504604,
        name: 'Mocajuba',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1504703,
        name: 'Moju',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1504752,
        name: 'Mojuí dos Campos',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1504802,
        name: 'Monte Alegre',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1504901,
        name: 'Muaná',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1504950,
        name: 'Nova Esperança do Piriá',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1504976,
        name: 'Nova Ipixuna',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1505007,
        name: 'Nova Timboteua',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1505031,
        name: 'Novo Progresso',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1505064,
        name: 'Novo Repartimento',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1505106,
        name: 'Óbidos',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1505205,
        name: 'Oeiras do Pará',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1505304,
        name: 'Oriximiná',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1505403,
        name: 'Ourém',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1505437,
        name: 'Ourilândia do Norte',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1505486,
        name: 'Pacajá',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1505494,
        name: 'Palestina do Pará',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1505502,
        name: 'Paragominas',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1505536,
        name: 'Parauapebas',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1505551,
        name: "Pau D'Arco",
        ibge_state_id: 15,
      },
      {
        ibge_id: 1505601,
        name: 'Peixe-Boi',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1505635,
        name: 'Piçarra',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1505650,
        name: 'Placas',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1505700,
        name: 'Ponta de Pedras',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1505809,
        name: 'Portel',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1505908,
        name: 'Porto de Moz',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1506005,
        name: 'Prainha',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1506104,
        name: 'Primavera',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1506112,
        name: 'Quatipuru',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1506138,
        name: 'Redenção',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1506161,
        name: 'Rio Maria',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1506187,
        name: 'Rondon do Pará',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1506195,
        name: 'Rurópolis',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1506203,
        name: 'Salinópolis',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1506302,
        name: 'Salvaterra',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1506351,
        name: 'Santa Bárbara do Pará',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1506401,
        name: 'Santa Cruz do Arari',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1506500,
        name: 'Santa Izabel do Pará',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1506559,
        name: 'Santa Luzia do Pará',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1506583,
        name: 'Santa Maria das Barreiras',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1506609,
        name: 'Santa Maria do Pará',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1506708,
        name: 'Santana do Araguaia',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1506807,
        name: 'Santarém',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1506906,
        name: 'Santarém Novo',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1507003,
        name: 'Santo Antônio do Tauá',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1507102,
        name: 'São Caetano de Odivelas',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1507151,
        name: 'São Domingos do Araguaia',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1507201,
        name: 'São Domingos do Capim',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1507300,
        name: 'São Félix do Xingu',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1507409,
        name: 'São Francisco do Pará',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1507458,
        name: 'São Geraldo do Araguaia',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1507466,
        name: 'São João da Ponta',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1507474,
        name: 'São João de Pirabas',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1507508,
        name: 'São João do Araguaia',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1507607,
        name: 'São Miguel do Guamá',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1507706,
        name: 'São Sebastião da Boa Vista',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1507755,
        name: 'Sapucaia',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1507805,
        name: 'Senador José Porfírio',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1507904,
        name: 'Soure',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1507953,
        name: 'Tailândia',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1507961,
        name: 'Terra Alta',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1507979,
        name: 'Terra Santa',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1508001,
        name: 'Tomé-Açu',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1508035,
        name: 'Tracuateua',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1508050,
        name: 'Trairão',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1508084,
        name: 'Tucumã',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1508100,
        name: 'Tucuruí',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1508126,
        name: 'Ulianópolis',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1508159,
        name: 'Uruará',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1508209,
        name: 'Vigia',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1508308,
        name: 'Viseu',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1508357,
        name: 'Vitória do Xingu',
        ibge_state_id: 15,
      },
      {
        ibge_id: 1508407,
        name: 'Xinguara',
        ibge_state_id: 15,
      },
    ],
  });

  await prisma.ibgeCity.createMany({
    data: [
      {
        ibge_id: 1600055,
        name: 'Serra do Navio',
        ibge_state_id: 16,
      },
      {
        ibge_id: 1600105,
        name: 'Amapá',
        ibge_state_id: 16,
      },
      {
        ibge_id: 1600154,
        name: 'Pedra Branca do Amapari',
        ibge_state_id: 16,
      },
      {
        ibge_id: 1600204,
        name: 'Calçoene',
        ibge_state_id: 16,
      },
      {
        ibge_id: 1600212,
        name: 'Cutias',
        ibge_state_id: 16,
      },
      {
        ibge_id: 1600238,
        name: 'Ferreira Gomes',
        ibge_state_id: 16,
      },
      {
        ibge_id: 1600253,
        name: 'Itaubal',
        ibge_state_id: 16,
      },
      {
        ibge_id: 1600279,
        name: 'Laranjal do Jari',
        ibge_state_id: 16,
      },
      {
        ibge_id: 1600303,
        name: 'Macapá',
        ibge_state_id: 16,
      },
      {
        ibge_id: 1600402,
        name: 'Mazagão',
        ibge_state_id: 16,
      },
      {
        ibge_id: 1600501,
        name: 'Oiapoque',
        ibge_state_id: 16,
      },
      {
        ibge_id: 1600535,
        name: 'Porto Grande',
        ibge_state_id: 16,
      },
      {
        ibge_id: 1600550,
        name: 'Pracuúba',
        ibge_state_id: 16,
      },
      {
        ibge_id: 1600600,
        name: 'Santana',
        ibge_state_id: 16,
      },
      {
        ibge_id: 1600709,
        name: 'Tartarugalzinho',
        ibge_state_id: 16,
      },
      {
        ibge_id: 1600808,
        name: 'Vitória do Jari',
        ibge_state_id: 16,
      },
    ],
  });

  await prisma.ibgeCity.createMany({
    data: [
      {
        ibge_id: 1700251,
        name: 'Abreulândia',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1700301,
        name: 'Aguiarnópolis',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1700350,
        name: 'Aliança do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1700400,
        name: 'Almas',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1700707,
        name: 'Alvorada',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1701002,
        name: 'Ananás',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1701051,
        name: 'Angico',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1701101,
        name: 'Aparecida do Rio Negro',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1701309,
        name: 'Aragominas',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1701903,
        name: 'Araguacema',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1702000,
        name: 'Araguaçu',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1702109,
        name: 'Araguaína',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1702158,
        name: 'Araguanã',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1702208,
        name: 'Araguatins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1702307,
        name: 'Arapoema',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1702406,
        name: 'Arraias',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1702554,
        name: 'Augustinópolis',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1702703,
        name: 'Aurora do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1702901,
        name: 'Axixá do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1703008,
        name: 'Babaçulândia',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1703057,
        name: 'Bandeirantes do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1703073,
        name: 'Barra do Ouro',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1703107,
        name: 'Barrolândia',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1703206,
        name: 'Bernardo Sayão',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1703305,
        name: 'Bom Jesus do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1703602,
        name: 'Brasilândia do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1703701,
        name: 'Brejinho de Nazaré',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1703800,
        name: 'Buriti do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1703826,
        name: 'Cachoeirinha',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1703842,
        name: 'Campos Lindos',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1703867,
        name: 'Cariri do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1703883,
        name: 'Carmolândia',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1703891,
        name: 'Carrasco Bonito',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1703909,
        name: 'Caseara',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1704105,
        name: 'Centenário',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1704600,
        name: 'Chapada de Areia',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1705102,
        name: 'Chapada da Natividade',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1705508,
        name: 'Colinas do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1705557,
        name: 'Combinado',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1705607,
        name: 'Conceição do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1706001,
        name: 'Couto Magalhães',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1706100,
        name: 'Cristalândia',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1706258,
        name: 'Crixás do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1706506,
        name: 'Darcinópolis',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1707009,
        name: 'Dianópolis',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1707108,
        name: 'Divinópolis do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1707207,
        name: 'Dois Irmãos do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1707306,
        name: 'Dueré',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1707405,
        name: 'Esperantina',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1707553,
        name: 'Fátima',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1707652,
        name: 'Figueirópolis',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1707702,
        name: 'Filadélfia',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1708205,
        name: 'Formoso do Araguaia',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1708254,
        name: 'Tabocão',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1708304,
        name: 'Goianorte',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1709005,
        name: 'Goiatins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1709302,
        name: 'Guaraí',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1709500,
        name: 'Gurupi',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1709807,
        name: 'Ipueiras',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1710508,
        name: 'Itacajá',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1710706,
        name: 'Itaguatins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1710904,
        name: 'Itapiratins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1711100,
        name: 'Itaporã do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1711506,
        name: 'Jaú do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1711803,
        name: 'Juarina',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1711902,
        name: 'Lagoa da Confusão',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1711951,
        name: 'Lagoa do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1712009,
        name: 'Lajeado',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1712157,
        name: 'Lavandeira',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1712405,
        name: 'Lizarda',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1712454,
        name: 'Luzinópolis',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1712504,
        name: 'Marianópolis do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1712702,
        name: 'Mateiros',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1712801,
        name: 'Maurilândia do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1713205,
        name: 'Miracema do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1713304,
        name: 'Miranorte',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1713601,
        name: 'Monte do Carmo',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1713700,
        name: 'Monte Santo do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1713809,
        name: 'Palmeiras do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1713957,
        name: 'Muricilândia',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1714203,
        name: 'Natividade',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1714302,
        name: 'Nazaré',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1714880,
        name: 'Nova Olinda',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1715002,
        name: 'Nova Rosalândia',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1715101,
        name: 'Novo Acordo',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1715150,
        name: 'Novo Alegre',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1715259,
        name: 'Novo Jardim',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1715507,
        name: 'Oliveira de Fátima',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1715705,
        name: 'Palmeirante',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1715754,
        name: 'Palmeirópolis',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1716109,
        name: 'Paraíso do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1716208,
        name: 'Paranã',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1716307,
        name: "Pau D'Arco",
        ibge_state_id: 17,
      },
      {
        ibge_id: 1716505,
        name: 'Pedro Afonso',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1716604,
        name: 'Peixe',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1716653,
        name: 'Pequizeiro',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1716703,
        name: 'Colméia',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1717008,
        name: 'Pindorama do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1717206,
        name: 'Piraquê',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1717503,
        name: 'Pium',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1717800,
        name: 'Ponte Alta do Bom Jesus',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1717909,
        name: 'Ponte Alta do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1718006,
        name: 'Porto Alegre do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1718204,
        name: 'Porto Nacional',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1718303,
        name: 'Praia Norte',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1718402,
        name: 'Presidente Kennedy',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1718451,
        name: 'Pugmil',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1718501,
        name: 'Recursolândia',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1718550,
        name: 'Riachinho',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1718659,
        name: 'Rio da Conceição',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1718709,
        name: 'Rio dos Bois',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1718758,
        name: 'Rio Sono',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1718808,
        name: 'Sampaio',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1718840,
        name: 'Sandolândia',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1718865,
        name: 'Santa Fé do Araguaia',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1718881,
        name: 'Santa Maria do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1718899,
        name: 'Santa Rita do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1718907,
        name: 'Santa Rosa do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1719004,
        name: 'Santa Tereza do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1720002,
        name: 'Santa Terezinha do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1720101,
        name: 'São Bento do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1720150,
        name: 'São Félix do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1720200,
        name: 'São Miguel do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1720259,
        name: 'São Salvador do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1720309,
        name: 'São Sebastião do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1720499,
        name: 'São Valério',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1720655,
        name: 'Silvanópolis',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1720804,
        name: 'Sítio Novo do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1720853,
        name: 'Sucupira',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1720903,
        name: 'Taguatinga',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1720937,
        name: 'Taipas do Tocantins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1720978,
        name: 'Talismã',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1721000,
        name: 'Palmas',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1721109,
        name: 'Tocantínia',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1721208,
        name: 'Tocantinópolis',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1721257,
        name: 'Tupirama',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1721307,
        name: 'Tupiratins',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1722081,
        name: 'Wanderlândia',
        ibge_state_id: 17,
      },
      {
        ibge_id: 1722107,
        name: 'Xambioá',
        ibge_state_id: 17,
      },
    ],
  });

  await prisma.ibgeCity.createMany({
    data: [
      {
        ibge_id: 2100055,
        name: 'Açailândia',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2100105,
        name: 'Afonso Cunha',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2100154,
        name: 'Água Doce do Maranhão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2100204,
        name: 'Alcântara',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2100303,
        name: 'Aldeias Altas',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2100402,
        name: 'Altamira do Maranhão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2100436,
        name: 'Alto Alegre do Maranhão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2100477,
        name: 'Alto Alegre do Pindaré',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2100501,
        name: 'Alto Parnaíba',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2100550,
        name: 'Amapá do Maranhão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2100600,
        name: 'Amarante do Maranhão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2100709,
        name: 'Anajatuba',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2100808,
        name: 'Anapurus',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2100832,
        name: 'Apicum-Açu',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2100873,
        name: 'Araguanã',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2100907,
        name: 'Araioses',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2100956,
        name: 'Arame',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2101004,
        name: 'Arari',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2101103,
        name: 'Axixá',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2101202,
        name: 'Bacabal',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2101251,
        name: 'Bacabeira',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2101301,
        name: 'Bacuri',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2101350,
        name: 'Bacurituba',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2101400,
        name: 'Balsas',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2101509,
        name: 'Barão de Grajaú',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2101608,
        name: 'Barra do Corda',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2101707,
        name: 'Barreirinhas',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2101731,
        name: 'Belágua',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2101772,
        name: 'Bela Vista do Maranhão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2101806,
        name: 'Benedito Leite',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2101905,
        name: 'Bequimão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2101939,
        name: 'Bernardo do Mearim',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2101970,
        name: 'Boa Vista do Gurupi',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2102002,
        name: 'Bom Jardim',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2102036,
        name: 'Bom Jesus das Selvas',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2102077,
        name: 'Bom Lugar',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2102101,
        name: 'Brejo',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2102150,
        name: 'Brejo de Areia',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2102200,
        name: 'Buriti',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2102309,
        name: 'Buriti Bravo',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2102325,
        name: 'Buriticupu',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2102358,
        name: 'Buritirana',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2102374,
        name: 'Cachoeira Grande',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2102408,
        name: 'Cajapió',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2102507,
        name: 'Cajari',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2102556,
        name: 'Campestre do Maranhão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2102606,
        name: 'Cândido Mendes',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2102705,
        name: 'Cantanhede',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2102754,
        name: 'Capinzal do Norte',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2102804,
        name: 'Carolina',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2102903,
        name: 'Carutapera',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2103000,
        name: 'Caxias',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2103109,
        name: 'Cedral',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2103125,
        name: 'Central do Maranhão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2103158,
        name: 'Centro do Guilherme',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2103174,
        name: 'Centro Novo do Maranhão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2103208,
        name: 'Chapadinha',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2103257,
        name: 'Cidelândia',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2103307,
        name: 'Codó',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2103406,
        name: 'Coelho Neto',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2103505,
        name: 'Colinas',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2103554,
        name: 'Conceição do Lago-Açu',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2103604,
        name: 'Coroatá',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2103703,
        name: 'Cururupu',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2103752,
        name: 'Davinópolis',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2103802,
        name: 'Dom Pedro',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2103901,
        name: 'Duque Bacelar',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2104008,
        name: 'Esperantinópolis',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2104057,
        name: 'Estreito',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2104073,
        name: 'Feira Nova do Maranhão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2104081,
        name: 'Fernando Falcão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2104099,
        name: 'Formosa da Serra Negra',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2104107,
        name: 'Fortaleza dos Nogueiras',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2104206,
        name: 'Fortuna',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2104305,
        name: 'Godofredo Viana',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2104404,
        name: 'Gonçalves Dias',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2104503,
        name: 'Governador Archer',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2104552,
        name: 'Governador Edison Lobão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2104602,
        name: 'Governador Eugênio Barros',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2104628,
        name: 'Governador Luiz Rocha',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2104651,
        name: 'Governador Newton Bello',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2104677,
        name: 'Governador Nunes Freire',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2104701,
        name: 'Graça Aranha',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2104800,
        name: 'Grajaú',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2104909,
        name: 'Guimarães',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2105005,
        name: 'Humberto de Campos',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2105104,
        name: 'Icatu',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2105153,
        name: 'Igarapé do Meio',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2105203,
        name: 'Igarapé Grande',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2105302,
        name: 'Imperatriz',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2105351,
        name: 'Itaipava do Grajaú',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2105401,
        name: 'Itapecuru Mirim',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2105427,
        name: 'Itinga do Maranhão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2105450,
        name: 'Jatobá',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2105476,
        name: 'Jenipapo dos Vieiras',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2105500,
        name: 'João Lisboa',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2105609,
        name: 'Joselândia',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2105658,
        name: 'Junco do Maranhão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2105708,
        name: 'Lago da Pedra',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2105807,
        name: 'Lago do Junco',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2105906,
        name: 'Lago Verde',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2105922,
        name: 'Lagoa do Mato',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2105948,
        name: 'Lago dos Rodrigues',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2105963,
        name: 'Lagoa Grande do Maranhão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2105989,
        name: 'Lajeado Novo',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2106003,
        name: 'Lima Campos',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2106102,
        name: 'Loreto',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2106201,
        name: 'Luís Domingues',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2106300,
        name: 'Magalhães de Almeida',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2106326,
        name: 'Maracaçumé',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2106359,
        name: 'Marajá do Sena',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2106375,
        name: 'Maranhãozinho',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2106409,
        name: 'Mata Roma',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2106508,
        name: 'Matinha',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2106607,
        name: 'Matões',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2106631,
        name: 'Matões do Norte',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2106672,
        name: 'Milagres do Maranhão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2106706,
        name: 'Mirador',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2106755,
        name: 'Miranda do Norte',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2106805,
        name: 'Mirinzal',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2106904,
        name: 'Monção',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2107001,
        name: 'Montes Altos',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2107100,
        name: 'Morros',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2107209,
        name: 'Nina Rodrigues',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2107258,
        name: 'Nova Colinas',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2107308,
        name: 'Nova Iorque',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2107357,
        name: 'Nova Olinda do Maranhão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2107407,
        name: "Olho d'Água das Cunhãs",
        ibge_state_id: 21,
      },
      {
        ibge_id: 2107456,
        name: 'Olinda Nova do Maranhão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2107506,
        name: 'Paço do Lumiar',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2107605,
        name: 'Palmeirândia',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2107704,
        name: 'Paraibano',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2107803,
        name: 'Parnarama',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2107902,
        name: 'Passagem Franca',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2108009,
        name: 'Pastos Bons',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2108058,
        name: 'Paulino Neves',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2108108,
        name: 'Paulo Ramos',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2108207,
        name: 'Pedreiras',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2108256,
        name: 'Pedro do Rosário',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2108306,
        name: 'Penalva',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2108405,
        name: 'Peri Mirim',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2108454,
        name: 'Peritoró',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2108504,
        name: 'Pindaré-Mirim',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2108603,
        name: 'Pinheiro',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2108702,
        name: 'Pio XII',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2108801,
        name: 'Pirapemas',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2108900,
        name: 'Poção de Pedras',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2109007,
        name: 'Porto Franco',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2109056,
        name: 'Porto Rico do Maranhão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2109106,
        name: 'Presidente Dutra',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2109205,
        name: 'Presidente Juscelino',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2109239,
        name: 'Presidente Médici',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2109270,
        name: 'Presidente Sarney',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2109304,
        name: 'Presidente Vargas',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2109403,
        name: 'Primeira Cruz',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2109452,
        name: 'Raposa',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2109502,
        name: 'Riachão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2109551,
        name: 'Ribamar Fiquene',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2109601,
        name: 'Rosário',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2109700,
        name: 'Sambaíba',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2109759,
        name: 'Santa Filomena do Maranhão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2109809,
        name: 'Santa Helena',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2109908,
        name: 'Santa Inês',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2110005,
        name: 'Santa Luzia',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2110039,
        name: 'Santa Luzia do Paruá',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2110104,
        name: 'Santa Quitéria do Maranhão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2110203,
        name: 'Santa Rita',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2110237,
        name: 'Santana do Maranhão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2110278,
        name: 'Santo Amaro do Maranhão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2110302,
        name: 'Santo Antônio dos Lopes',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2110401,
        name: 'São Benedito do Rio Preto',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2110500,
        name: 'São Bento',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2110609,
        name: 'São Bernardo',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2110658,
        name: 'São Domingos do Azeitão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2110708,
        name: 'São Domingos do Maranhão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2110807,
        name: 'São Félix de Balsas',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2110856,
        name: 'São Francisco do Brejão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2110906,
        name: 'São Francisco do Maranhão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2111003,
        name: 'São João Batista',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2111029,
        name: 'São João do Carú',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2111052,
        name: 'São João do Paraíso',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2111078,
        name: 'São João do Soter',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2111102,
        name: 'São João dos Patos',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2111201,
        name: 'São José de Ribamar',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2111250,
        name: 'São José dos Basílios',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2111300,
        name: 'São Luís',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2111409,
        name: 'São Luís Gonzaga do Maranhão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2111508,
        name: 'São Mateus do Maranhão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2111532,
        name: 'São Pedro da Água Branca',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2111573,
        name: 'São Pedro dos Crentes',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2111607,
        name: 'São Raimundo das Mangabeiras',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2111631,
        name: 'São Raimundo do Doca Bezerra',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2111672,
        name: 'São Roberto',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2111706,
        name: 'São Vicente Ferrer',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2111722,
        name: 'Satubinha',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2111748,
        name: 'Senador Alexandre Costa',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2111763,
        name: 'Senador La Rocque',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2111789,
        name: 'Serrano do Maranhão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2111805,
        name: 'Sítio Novo',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2111904,
        name: 'Sucupira do Norte',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2111953,
        name: 'Sucupira do Riachão',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2112001,
        name: 'Tasso Fragoso',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2112100,
        name: 'Timbiras',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2112209,
        name: 'Timon',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2112233,
        name: 'Trizidela do Vale',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2112274,
        name: 'Tufilândia',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2112308,
        name: 'Tuntum',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2112407,
        name: 'Turiaçu',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2112456,
        name: 'Turilândia',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2112506,
        name: 'Tutóia',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2112605,
        name: 'Urbano Santos',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2112704,
        name: 'Vargem Grande',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2112803,
        name: 'Viana',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2112852,
        name: 'Vila Nova dos Martírios',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2112902,
        name: 'Vitória do Mearim',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2113009,
        name: 'Vitorino Freire',
        ibge_state_id: 21,
      },
      {
        ibge_id: 2114007,
        name: 'Zé Doca',
        ibge_state_id: 21,
      },
    ],
  });

  await prisma.ibgeCity.createMany({
    data: [
      {
        ibge_id: 2200053,
        name: 'Acauã',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2200103,
        name: 'Agricolândia',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2200202,
        name: 'Água Branca',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2200251,
        name: 'Alagoinha do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2200277,
        name: 'Alegrete do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2200301,
        name: 'Alto Longá',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2200400,
        name: 'Altos',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2200459,
        name: 'Alvorada do Gurguéia',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2200509,
        name: 'Amarante',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2200608,
        name: 'Angical do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2200707,
        name: 'Anísio de Abreu',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2200806,
        name: 'Antônio Almeida',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2200905,
        name: 'Aroazes',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2200954,
        name: 'Aroeiras do Itaim',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2201002,
        name: 'Arraial',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2201051,
        name: 'Assunção do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2201101,
        name: 'Avelino Lopes',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2201150,
        name: 'Baixa Grande do Ribeiro',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2201176,
        name: "Barra D'Alcântara",
        ibge_state_id: 22,
      },
      {
        ibge_id: 2201200,
        name: 'Barras',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2201309,
        name: 'Barreiras do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2201408,
        name: 'Barro Duro',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2201507,
        name: 'Batalha',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2201556,
        name: 'Bela Vista do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2201572,
        name: 'Belém do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2201606,
        name: 'Beneditinos',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2201705,
        name: 'Bertolínia',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2201739,
        name: 'Betânia do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2201770,
        name: 'Boa Hora',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2201804,
        name: 'Bocaina',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2201903,
        name: 'Bom Jesus',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2201919,
        name: 'Bom Princípio do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2201929,
        name: 'Bonfim do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2201945,
        name: 'Boqueirão do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2201960,
        name: 'Brasileira',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2201988,
        name: 'Brejo do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202000,
        name: 'Buriti dos Lopes',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202026,
        name: 'Buriti dos Montes',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202059,
        name: 'Cabeceiras do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202075,
        name: 'Cajazeiras do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202083,
        name: 'Cajueiro da Praia',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202091,
        name: 'Caldeirão Grande do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202109,
        name: 'Campinas do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202117,
        name: 'Campo Alegre do Fidalgo',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202133,
        name: 'Campo Grande do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202174,
        name: 'Campo Largo do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202208,
        name: 'Campo Maior',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202251,
        name: 'Canavieira',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202307,
        name: 'Canto do Buriti',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202406,
        name: 'Capitão de Campos',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202455,
        name: 'Capitão Gervásio Oliveira',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202505,
        name: 'Caracol',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202539,
        name: 'Caraúbas do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202554,
        name: 'Caridade do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202604,
        name: 'Castelo do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202653,
        name: 'Caxingó',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202703,
        name: 'Cocal',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202711,
        name: 'Cocal de Telha',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202729,
        name: 'Cocal dos Alves',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202737,
        name: 'Coivaras',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202752,
        name: 'Colônia do Gurguéia',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202778,
        name: 'Colônia do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202802,
        name: 'Conceição do Canindé',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202851,
        name: 'Coronel José Dias',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2202901,
        name: 'Corrente',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2203008,
        name: 'Cristalândia do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2203107,
        name: 'Cristino Castro',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2203206,
        name: 'Curimatá',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2203230,
        name: 'Currais',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2203255,
        name: 'Curralinhos',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2203271,
        name: 'Curral Novo do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2203305,
        name: 'Demerval Lobão',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2203354,
        name: 'Dirceu Arcoverde',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2203404,
        name: 'Dom Expedito Lopes',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2203420,
        name: 'Domingos Mourão',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2203453,
        name: 'Dom Inocêncio',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2203503,
        name: 'Elesbão Veloso',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2203602,
        name: 'Eliseu Martins',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2203701,
        name: 'Esperantina',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2203750,
        name: 'Fartura do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2203800,
        name: 'Flores do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2203859,
        name: 'Floresta do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2203909,
        name: 'Floriano',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2204006,
        name: 'Francinópolis',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2204105,
        name: 'Francisco Ayres',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2204154,
        name: 'Francisco Macedo',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2204204,
        name: 'Francisco Santos',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2204303,
        name: 'Fronteiras',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2204352,
        name: 'Geminiano',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2204402,
        name: 'Gilbués',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2204501,
        name: 'Guadalupe',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2204550,
        name: 'Guaribas',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2204600,
        name: 'Hugo Napoleão',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2204659,
        name: 'Ilha Grande',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2204709,
        name: 'Inhuma',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2204808,
        name: 'Ipiranga do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2204907,
        name: 'Isaías Coelho',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2205003,
        name: 'Itainópolis',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2205102,
        name: 'Itaueira',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2205151,
        name: 'Jacobina do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2205201,
        name: 'Jaicós',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2205250,
        name: 'Jardim do Mulato',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2205276,
        name: 'Jatobá do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2205300,
        name: 'Jerumenha',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2205359,
        name: 'João Costa',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2205409,
        name: 'Joaquim Pires',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2205458,
        name: 'Joca Marques',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2205508,
        name: 'José de Freitas',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2205516,
        name: 'Juazeiro do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2205524,
        name: 'Júlio Borges',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2205532,
        name: 'Jurema',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2205540,
        name: 'Lagoinha do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2205557,
        name: 'Lagoa Alegre',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2205565,
        name: 'Lagoa do Barro do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2205573,
        name: 'Lagoa de São Francisco',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2205581,
        name: 'Lagoa do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2205599,
        name: 'Lagoa do Sítio',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2205607,
        name: 'Landri Sales',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2205706,
        name: 'Luís Correia',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2205805,
        name: 'Luzilândia',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2205854,
        name: 'Madeiro',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2205904,
        name: 'Manoel Emídio',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2205953,
        name: 'Marcolândia',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2206001,
        name: 'Marcos Parente',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2206050,
        name: 'Massapê do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2206100,
        name: 'Matias Olímpio',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2206209,
        name: 'Miguel Alves',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2206308,
        name: 'Miguel Leão',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2206357,
        name: 'Milton Brandão',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2206407,
        name: 'Monsenhor Gil',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2206506,
        name: 'Monsenhor Hipólito',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2206605,
        name: 'Monte Alegre do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2206654,
        name: 'Morro Cabeça no Tempo',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2206670,
        name: 'Morro do Chapéu do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2206696,
        name: 'Murici dos Portelas',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2206704,
        name: 'Nazaré do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2206720,
        name: 'Nazária',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2206753,
        name: 'Nossa Senhora de Nazaré',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2206803,
        name: 'Nossa Senhora dos Remédios',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2206902,
        name: 'Novo Oriente do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2206951,
        name: 'Novo Santo Antônio',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2207009,
        name: 'Oeiras',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2207108,
        name: "Olho D'Água do Piauí",
        ibge_state_id: 22,
      },
      {
        ibge_id: 2207207,
        name: 'Padre Marcos',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2207306,
        name: 'Paes Landim',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2207355,
        name: 'Pajeú do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2207405,
        name: 'Palmeira do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2207504,
        name: 'Palmeirais',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2207553,
        name: 'Paquetá',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2207603,
        name: 'Parnaguá',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2207702,
        name: 'Parnaíba',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2207751,
        name: 'Passagem Franca do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2207777,
        name: 'Patos do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2207793,
        name: "Pau D'Arco do Piauí",
        ibge_state_id: 22,
      },
      {
        ibge_id: 2207801,
        name: 'Paulistana',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2207850,
        name: 'Pavussu',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2207900,
        name: 'Pedro II',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2207934,
        name: 'Pedro Laurentino',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2207959,
        name: 'Nova Santa Rita',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2208007,
        name: 'Picos',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2208106,
        name: 'Pimenteiras',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2208205,
        name: 'Pio IX',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2208304,
        name: 'Piracuruca',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2208403,
        name: 'Piripiri',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2208502,
        name: 'Porto',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2208551,
        name: 'Porto Alegre do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2208601,
        name: 'Prata do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2208650,
        name: 'Queimada Nova',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2208700,
        name: 'Redenção do Gurguéia',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2208809,
        name: 'Regeneração',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2208858,
        name: 'Riacho Frio',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2208874,
        name: 'Ribeira do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2208908,
        name: 'Ribeiro Gonçalves',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2209005,
        name: 'Rio Grande do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2209104,
        name: 'Santa Cruz do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2209153,
        name: 'Santa Cruz dos Milagres',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2209203,
        name: 'Santa Filomena',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2209302,
        name: 'Santa Luz',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2209351,
        name: 'Santana do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2209377,
        name: 'Santa Rosa do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2209401,
        name: 'Santo Antônio de Lisboa',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2209450,
        name: 'Santo Antônio dos Milagres',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2209500,
        name: 'Santo Inácio do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2209559,
        name: 'São Braz do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2209609,
        name: 'São Félix do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2209658,
        name: 'São Francisco de Assis do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2209708,
        name: 'São Francisco do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2209757,
        name: 'São Gonçalo do Gurguéia',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2209807,
        name: 'São Gonçalo do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2209856,
        name: 'São João da Canabrava',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2209872,
        name: 'São João da Fronteira',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2209906,
        name: 'São João da Serra',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2209955,
        name: 'São João da Varjota',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2209971,
        name: 'São João do Arraial',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2210003,
        name: 'São João do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2210052,
        name: 'São José do Divino',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2210102,
        name: 'São José do Peixe',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2210201,
        name: 'São José do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2210300,
        name: 'São Julião',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2210359,
        name: 'São Lourenço do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2210375,
        name: 'São Luis do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2210383,
        name: 'São Miguel da Baixa Grande',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2210391,
        name: 'São Miguel do Fidalgo',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2210409,
        name: 'São Miguel do Tapuio',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2210508,
        name: 'São Pedro do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2210607,
        name: 'São Raimundo Nonato',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2210623,
        name: 'Sebastião Barros',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2210631,
        name: 'Sebastião Leal',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2210656,
        name: 'Sigefredo Pacheco',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2210706,
        name: 'Simões',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2210805,
        name: 'Simplício Mendes',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2210904,
        name: 'Socorro do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2210938,
        name: 'Sussuapara',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2210953,
        name: 'Tamboril do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2210979,
        name: 'Tanque do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2211001,
        name: 'Teresina',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2211100,
        name: 'União',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2211209,
        name: 'Uruçuí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2211308,
        name: 'Valença do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2211357,
        name: 'Várzea Branca',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2211407,
        name: 'Várzea Grande',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2211506,
        name: 'Vera Mendes',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2211605,
        name: 'Vila Nova do Piauí',
        ibge_state_id: 22,
      },
      {
        ibge_id: 2211704,
        name: 'Wall Ferraz',
        ibge_state_id: 22,
      },
    ],
  });

  await prisma.ibgeCity.createMany({
    data: [
      {
        ibge_id: 2300101,
        name: 'Abaiara',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2300150,
        name: 'Acarape',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2300200,
        name: 'Acaraú',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2300309,
        name: 'Acopiara',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2300408,
        name: 'Aiuaba',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2300507,
        name: 'Alcântaras',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2300606,
        name: 'Altaneira',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2300705,
        name: 'Alto Santo',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2300754,
        name: 'Amontada',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2300804,
        name: 'Antonina do Norte',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2300903,
        name: 'Apuiarés',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2301000,
        name: 'Aquiraz',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2301109,
        name: 'Aracati',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2301208,
        name: 'Aracoiaba',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2301257,
        name: 'Ararendá',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2301307,
        name: 'Araripe',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2301406,
        name: 'Aratuba',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2301505,
        name: 'Arneiroz',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2301604,
        name: 'Assaré',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2301703,
        name: 'Aurora',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2301802,
        name: 'Baixio',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2301851,
        name: 'Banabuiú',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2301901,
        name: 'Barbalha',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2301950,
        name: 'Barreira',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2302008,
        name: 'Barro',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2302057,
        name: 'Barroquinha',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2302107,
        name: 'Baturité',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2302206,
        name: 'Beberibe',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2302305,
        name: 'Bela Cruz',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2302404,
        name: 'Boa Viagem',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2302503,
        name: 'Brejo Santo',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2302602,
        name: 'Camocim',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2302701,
        name: 'Campos Sales',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2302800,
        name: 'Canindé',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2302909,
        name: 'Capistrano',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2303006,
        name: 'Caridade',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2303105,
        name: 'Cariré',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2303204,
        name: 'Caririaçu',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2303303,
        name: 'Cariús',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2303402,
        name: 'Carnaubal',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2303501,
        name: 'Cascavel',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2303600,
        name: 'Catarina',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2303659,
        name: 'Catunda',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2303709,
        name: 'Caucaia',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2303808,
        name: 'Cedro',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2303907,
        name: 'Chaval',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2303931,
        name: 'Choró',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2303956,
        name: 'Chorozinho',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2304004,
        name: 'Coreaú',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2304103,
        name: 'Crateús',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2304202,
        name: 'Crato',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2304236,
        name: 'Croatá',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2304251,
        name: 'Cruz',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2304269,
        name: 'Deputado Irapuan Pinheiro',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2304277,
        name: 'Ereré',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2304285,
        name: 'Eusébio',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2304301,
        name: 'Farias Brito',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2304350,
        name: 'Forquilha',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2304400,
        name: 'Fortaleza',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2304459,
        name: 'Fortim',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2304509,
        name: 'Frecheirinha',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2304608,
        name: 'General Sampaio',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2304657,
        name: 'Graça',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2304707,
        name: 'Granja',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2304806,
        name: 'Granjeiro',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2304905,
        name: 'Groaíras',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2304954,
        name: 'Guaiúba',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2305001,
        name: 'Guaraciaba do Norte',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2305100,
        name: 'Guaramiranga',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2305209,
        name: 'Hidrolândia',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2305233,
        name: 'Horizonte',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2305266,
        name: 'Ibaretama',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2305308,
        name: 'Ibiapina',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2305332,
        name: 'Ibicuitinga',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2305357,
        name: 'Icapuí',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2305407,
        name: 'Icó',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2305506,
        name: 'Iguatu',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2305605,
        name: 'Independência',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2305654,
        name: 'Ipaporanga',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2305704,
        name: 'Ipaumirim',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2305803,
        name: 'Ipu',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2305902,
        name: 'Ipueiras',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2306009,
        name: 'Iracema',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2306108,
        name: 'Irauçuba',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2306207,
        name: 'Itaiçaba',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2306256,
        name: 'Itaitinga',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2306306,
        name: 'Itapajé',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2306405,
        name: 'Itapipoca',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2306504,
        name: 'Itapiúna',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2306553,
        name: 'Itarema',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2306603,
        name: 'Itatira',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2306702,
        name: 'Jaguaretama',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2306801,
        name: 'Jaguaribara',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2306900,
        name: 'Jaguaribe',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2307007,
        name: 'Jaguaruana',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2307106,
        name: 'Jardim',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2307205,
        name: 'Jati',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2307254,
        name: 'Jijoca de Jericoacoara',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2307304,
        name: 'Juazeiro do Norte',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2307403,
        name: 'Jucás',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2307502,
        name: 'Lavras da Mangabeira',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2307601,
        name: 'Limoeiro do Norte',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2307635,
        name: 'Madalena',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2307650,
        name: 'Maracanaú',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2307700,
        name: 'Maranguape',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2307809,
        name: 'Marco',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2307908,
        name: 'Martinópole',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2308005,
        name: 'Massapê',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2308104,
        name: 'Mauriti',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2308203,
        name: 'Meruoca',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2308302,
        name: 'Milagres',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2308351,
        name: 'Milhã',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2308377,
        name: 'Miraíma',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2308401,
        name: 'Missão Velha',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2308500,
        name: 'Mombaça',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2308609,
        name: 'Monsenhor Tabosa',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2308708,
        name: 'Morada Nova',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2308807,
        name: 'Moraújo',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2308906,
        name: 'Morrinhos',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2309003,
        name: 'Mucambo',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2309102,
        name: 'Mulungu',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2309201,
        name: 'Nova Olinda',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2309300,
        name: 'Nova Russas',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2309409,
        name: 'Novo Oriente',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2309458,
        name: 'Ocara',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2309508,
        name: 'Orós',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2309607,
        name: 'Pacajus',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2309706,
        name: 'Pacatuba',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2309805,
        name: 'Pacoti',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2309904,
        name: 'Pacujá',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2310001,
        name: 'Palhano',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2310100,
        name: 'Palmácia',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2310209,
        name: 'Paracuru',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2310258,
        name: 'Paraipaba',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2310308,
        name: 'Parambu',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2310407,
        name: 'Paramoti',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2310506,
        name: 'Pedra Branca',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2310605,
        name: 'Penaforte',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2310704,
        name: 'Pentecoste',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2310803,
        name: 'Pereiro',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2310852,
        name: 'Pindoretama',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2310902,
        name: 'Piquet Carneiro',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2310951,
        name: 'Pires Ferreira',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2311009,
        name: 'Poranga',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2311108,
        name: 'Porteiras',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2311207,
        name: 'Potengi',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2311231,
        name: 'Potiretama',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2311264,
        name: 'Quiterianópolis',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2311306,
        name: 'Quixadá',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2311355,
        name: 'Quixelô',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2311405,
        name: 'Quixeramobim',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2311504,
        name: 'Quixeré',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2311603,
        name: 'Redenção',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2311702,
        name: 'Reriutaba',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2311801,
        name: 'Russas',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2311900,
        name: 'Saboeiro',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2311959,
        name: 'Salitre',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2312007,
        name: 'Santana do Acaraú',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2312106,
        name: 'Santana do Cariri',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2312205,
        name: 'Santa Quitéria',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2312304,
        name: 'São Benedito',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2312403,
        name: 'São Gonçalo do Amarante',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2312502,
        name: 'São João do Jaguaribe',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2312601,
        name: 'São Luís do Curu',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2312700,
        name: 'Senador Pompeu',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2312809,
        name: 'Senador Sá',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2312908,
        name: 'Sobral',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2313005,
        name: 'Solonópole',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2313104,
        name: 'Tabuleiro do Norte',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2313203,
        name: 'Tamboril',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2313252,
        name: 'Tarrafas',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2313302,
        name: 'Tauá',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2313351,
        name: 'Tejuçuoca',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2313401,
        name: 'Tianguá',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2313500,
        name: 'Trairi',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2313559,
        name: 'Tururu',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2313609,
        name: 'Ubajara',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2313708,
        name: 'Umari',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2313757,
        name: 'Umirim',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2313807,
        name: 'Uruburetama',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2313906,
        name: 'Uruoca',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2313955,
        name: 'Varjota',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2314003,
        name: 'Várzea Alegre',
        ibge_state_id: 23,
      },
      {
        ibge_id: 2314102,
        name: 'Viçosa do Ceará',
        ibge_state_id: 23,
      },
    ],
  });

  await prisma.ibgeCity.createMany({
    data: [
      {
        ibge_id: 2400109,
        name: 'Acari',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2400208,
        name: 'Açu',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2400307,
        name: 'Afonso Bezerra',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2400406,
        name: 'Água Nova',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2400505,
        name: 'Alexandria',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2400604,
        name: 'Almino Afonso',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2400703,
        name: 'Alto do Rodrigues',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2400802,
        name: 'Angicos',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2400901,
        name: 'Antônio Martins',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2401008,
        name: 'Apodi',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2401107,
        name: 'Areia Branca',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2401206,
        name: 'Arês',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2401305,
        name: 'Campo Grande',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2401404,
        name: 'Baía Formosa',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2401453,
        name: 'Baraúna',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2401503,
        name: 'Barcelona',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2401602,
        name: 'Bento Fernandes',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2401651,
        name: 'Bodó',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2401701,
        name: 'Bom Jesus',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2401800,
        name: 'Brejinho',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2401859,
        name: 'Caiçara do Norte',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2401909,
        name: 'Caiçara do Rio do Vento',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2402006,
        name: 'Caicó',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2402105,
        name: 'Campo Redondo',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2402204,
        name: 'Canguaretama',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2402303,
        name: 'Caraúbas',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2402402,
        name: 'Carnaúba dos Dantas',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2402501,
        name: 'Carnaubais',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2402600,
        name: 'Ceará-Mirim',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2402709,
        name: 'Cerro Corá',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2402808,
        name: 'Coronel Ezequiel',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2402907,
        name: 'Coronel João Pessoa',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2403004,
        name: 'Cruzeta',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2403103,
        name: 'Currais Novos',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2403202,
        name: 'Doutor Severiano',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2403251,
        name: 'Parnamirim',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2403301,
        name: 'Encanto',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2403400,
        name: 'Equador',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2403509,
        name: 'Espírito Santo',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2403608,
        name: 'Extremoz',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2403707,
        name: 'Felipe Guerra',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2403756,
        name: 'Fernando Pedroza',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2403806,
        name: 'Florânia',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2403905,
        name: 'Francisco Dantas',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2404002,
        name: 'Frutuoso Gomes',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2404101,
        name: 'Galinhos',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2404200,
        name: 'Goianinha',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2404309,
        name: 'Governador Dix-Sept Rosado',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2404408,
        name: 'Grossos',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2404507,
        name: 'Guamaré',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2404606,
        name: 'Ielmo Marinho',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2404705,
        name: 'Ipanguaçu',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2404804,
        name: 'Ipueira',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2404853,
        name: 'Itajá',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2404903,
        name: 'Itaú',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2405009,
        name: 'Jaçanã',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2405108,
        name: 'Jandaíra',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2405207,
        name: 'Janduís',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2405306,
        name: 'Januário Cicco',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2405405,
        name: 'Japi',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2405504,
        name: 'Jardim de Angicos',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2405603,
        name: 'Jardim de Piranhas',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2405702,
        name: 'Jardim do Seridó',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2405801,
        name: 'João Câmara',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2405900,
        name: 'João Dias',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2406007,
        name: 'José da Penha',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2406106,
        name: 'Jucurutu',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2406155,
        name: 'Jundiá',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2406205,
        name: "Lagoa d'Anta",
        ibge_state_id: 24,
      },
      {
        ibge_id: 2406304,
        name: 'Lagoa de Pedras',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2406403,
        name: 'Lagoa de Velhos',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2406502,
        name: 'Lagoa Nova',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2406601,
        name: 'Lagoa Salgada',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2406700,
        name: 'Lajes',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2406809,
        name: 'Lajes Pintadas',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2406908,
        name: 'Lucrécia',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2407005,
        name: 'Luís Gomes',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2407104,
        name: 'Macaíba',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2407203,
        name: 'Macau',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2407252,
        name: 'Major Sales',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2407302,
        name: 'Marcelino Vieira',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2407401,
        name: 'Martins',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2407500,
        name: 'Maxaranguape',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2407609,
        name: 'Messias Targino',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2407708,
        name: 'Montanhas',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2407807,
        name: 'Monte Alegre',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2407906,
        name: 'Monte das Gameleiras',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2408003,
        name: 'Mossoró',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2408102,
        name: 'Natal',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2408201,
        name: 'Nísia Floresta',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2408300,
        name: 'Nova Cruz',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2408409,
        name: "Olho d'Água do Borges",
        ibge_state_id: 24,
      },
      {
        ibge_id: 2408508,
        name: 'Ouro Branco',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2408607,
        name: 'Paraná',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2408706,
        name: 'Paraú',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2408805,
        name: 'Parazinho',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2408904,
        name: 'Parelhas',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2408953,
        name: 'Rio do Fogo',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2409100,
        name: 'Passa e Fica',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2409209,
        name: 'Passagem',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2409308,
        name: 'Patu',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2409332,
        name: 'Santa Maria',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2409407,
        name: 'Pau dos Ferros',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2409506,
        name: 'Pedra Grande',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2409605,
        name: 'Pedra Preta',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2409704,
        name: 'Pedro Avelino',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2409803,
        name: 'Pedro Velho',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2409902,
        name: 'Pendências',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2410009,
        name: 'Pilões',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2410108,
        name: 'Poço Branco',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2410207,
        name: 'Portalegre',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2410256,
        name: 'Porto do Mangue',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2410306,
        name: 'Serra Caiada',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2410405,
        name: 'Pureza',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2410504,
        name: 'Rafael Fernandes',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2410603,
        name: 'Rafael Godeiro',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2410702,
        name: 'Riacho da Cruz',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2410801,
        name: 'Riacho de Santana',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2410900,
        name: 'Riachuelo',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2411007,
        name: 'Rodolfo Fernandes',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2411056,
        name: 'Tibau',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2411106,
        name: 'Ruy Barbosa',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2411205,
        name: 'Santa Cruz',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2411403,
        name: 'Santana do Matos',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2411429,
        name: 'Santana do Seridó',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2411502,
        name: 'Santo Antônio',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2411601,
        name: 'São Bento do Norte',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2411700,
        name: 'São Bento do Trairí',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2411809,
        name: 'São Fernando',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2411908,
        name: 'São Francisco do Oeste',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2412005,
        name: 'São Gonçalo do Amarante',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2412104,
        name: 'São João do Sabugi',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2412203,
        name: 'São José de Mipibu',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2412302,
        name: 'São José do Campestre',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2412401,
        name: 'São José do Seridó',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2412500,
        name: 'São Miguel',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2412559,
        name: 'São Miguel do Gostoso',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2412609,
        name: 'São Paulo do Potengi',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2412708,
        name: 'São Pedro',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2412807,
        name: 'São Rafael',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2412906,
        name: 'São Tomé',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2413003,
        name: 'São Vicente',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2413102,
        name: 'Senador Elói de Souza',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2413201,
        name: 'Senador Georgino Avelino',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2413300,
        name: 'Serra de São Bento',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2413359,
        name: 'Serra do Mel',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2413409,
        name: 'Serra Negra do Norte',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2413508,
        name: 'Serrinha',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2413557,
        name: 'Serrinha dos Pintos',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2413607,
        name: 'Severiano Melo',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2413706,
        name: 'Sítio Novo',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2413805,
        name: 'Taboleiro Grande',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2413904,
        name: 'Taipu',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2414001,
        name: 'Tangará',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2414100,
        name: 'Tenente Ananias',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2414159,
        name: 'Tenente Laurentino Cruz',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2414209,
        name: 'Tibau do Sul',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2414308,
        name: 'Timbaúba dos Batistas',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2414407,
        name: 'Touros',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2414456,
        name: 'Triunfo Potiguar',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2414506,
        name: 'Umarizal',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2414605,
        name: 'Upanema',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2414704,
        name: 'Várzea',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2414753,
        name: 'Venha-Ver',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2414803,
        name: 'Vera Cruz',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2414902,
        name: 'Viçosa',
        ibge_state_id: 24,
      },
      {
        ibge_id: 2415008,
        name: 'Vila Flor',
        ibge_state_id: 24,
      },
    ],
  });

  await prisma.ibgeCity.createMany({
    data: [
      {
        ibge_id: 2500106,
        name: 'Água Branca',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2500205,
        name: 'Aguiar',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2500304,
        name: 'Alagoa Grande',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2500403,
        name: 'Alagoa Nova',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2500502,
        name: 'Alagoinha',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2500536,
        name: 'Alcantil',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2500577,
        name: 'Algodão de Jandaíra',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2500601,
        name: 'Alhandra',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2500700,
        name: 'São João do Rio do Peixe',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2500734,
        name: 'Amparo',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2500775,
        name: 'Aparecida',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2500809,
        name: 'Araçagi',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2500908,
        name: 'Arara',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2501005,
        name: 'Araruna',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2501104,
        name: 'Areia',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2501153,
        name: 'Areia de Baraúnas',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2501203,
        name: 'Areial',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2501302,
        name: 'Aroeiras',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2501351,
        name: 'Assunção',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2501401,
        name: 'Baía da Traição',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2501500,
        name: 'Bananeiras',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2501534,
        name: 'Baraúna',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2501575,
        name: 'Barra de Santana',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2501609,
        name: 'Barra de Santa Rosa',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2501708,
        name: 'Barra de São Miguel',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2501807,
        name: 'Bayeux',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2501906,
        name: 'Belém',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2502003,
        name: 'Belém do Brejo do Cruz',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2502052,
        name: 'Bernardino Batista',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2502102,
        name: 'Boa Ventura',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2502151,
        name: 'Boa Vista',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2502201,
        name: 'Bom Jesus',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2502300,
        name: 'Bom Sucesso',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2502409,
        name: 'Bonito de Santa Fé',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2502508,
        name: 'Boqueirão',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2502607,
        name: 'Igaracy',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2502706,
        name: 'Borborema',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2502805,
        name: 'Brejo do Cruz',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2502904,
        name: 'Brejo dos Santos',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2503001,
        name: 'Caaporã',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2503100,
        name: 'Cabaceiras',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2503209,
        name: 'Cabedelo',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2503308,
        name: 'Cachoeira dos Índios',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2503407,
        name: 'Cacimba de Areia',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2503506,
        name: 'Cacimba de Dentro',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2503555,
        name: 'Cacimbas',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2503605,
        name: 'Caiçara',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2503704,
        name: 'Cajazeiras',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2503753,
        name: 'Cajazeirinhas',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2503803,
        name: 'Caldas Brandão',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2503902,
        name: 'Camalaú',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2504009,
        name: 'Campina Grande',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2504033,
        name: 'Capim',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2504074,
        name: 'Caraúbas',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2504108,
        name: 'Carrapateira',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2504157,
        name: 'Casserengue',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2504207,
        name: 'Catingueira',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2504306,
        name: 'Catolé do Rocha',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2504355,
        name: 'Caturité',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2504405,
        name: 'Conceição',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2504504,
        name: 'Condado',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2504603,
        name: 'Conde',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2504702,
        name: 'Congo',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2504801,
        name: 'Coremas',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2504850,
        name: 'Coxixola',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2504900,
        name: 'Cruz do Espírito Santo',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2505006,
        name: 'Cubati',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2505105,
        name: 'Cuité',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2505204,
        name: 'Cuitegi',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2505238,
        name: 'Cuité de Mamanguape',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2505279,
        name: 'Curral de Cima',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2505303,
        name: 'Curral Velho',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2505352,
        name: 'Damião',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2505402,
        name: 'Desterro',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2505501,
        name: 'Vista Serrana',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2505600,
        name: 'Diamante',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2505709,
        name: 'Dona Inês',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2505808,
        name: 'Duas Estradas',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2505907,
        name: 'Emas',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2506004,
        name: 'Esperança',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2506103,
        name: 'Fagundes',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2506202,
        name: 'Frei Martinho',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2506251,
        name: 'Gado Bravo',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2506301,
        name: 'Guarabira',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2506400,
        name: 'Gurinhém',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2506509,
        name: 'Gurjão',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2506608,
        name: 'Ibiara',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2506707,
        name: 'Imaculada',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2506806,
        name: 'Ingá',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2506905,
        name: 'Itabaiana',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2507002,
        name: 'Itaporanga',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2507101,
        name: 'Itapororoca',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2507200,
        name: 'Itatuba',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2507309,
        name: 'Jacaraú',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2507408,
        name: 'Jericó',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2507507,
        name: 'João Pessoa',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2507606,
        name: 'Juarez Távora',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2507705,
        name: 'Juazeirinho',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2507804,
        name: 'Junco do Seridó',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2507903,
        name: 'Juripiranga',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2508000,
        name: 'Juru',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2508109,
        name: 'Lagoa',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2508208,
        name: 'Lagoa de Dentro',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2508307,
        name: 'Lagoa Seca',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2508406,
        name: 'Lastro',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2508505,
        name: 'Livramento',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2508554,
        name: 'Logradouro',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2508604,
        name: 'Lucena',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2508703,
        name: "Mãe d'Água",
        ibge_state_id: 25,
      },
      {
        ibge_id: 2508802,
        name: 'Malta',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2508901,
        name: 'Mamanguape',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2509008,
        name: 'Manaíra',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2509057,
        name: 'Marcação',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2509107,
        name: 'Mari',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2509156,
        name: 'Marizópolis',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2509206,
        name: 'Massaranduba',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2509305,
        name: 'Mataraca',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2509339,
        name: 'Matinhas',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2509370,
        name: 'Mato Grosso',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2509396,
        name: 'Maturéia',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2509404,
        name: 'Mogeiro',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2509503,
        name: 'Montadas',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2509602,
        name: 'Monte Horebe',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2509701,
        name: 'Monteiro',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2509800,
        name: 'Mulungu',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2509909,
        name: 'Natuba',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2510006,
        name: 'Nazarezinho',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2510105,
        name: 'Nova Floresta',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2510204,
        name: 'Nova Olinda',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2510303,
        name: 'Nova Palmeira',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2510402,
        name: "Olho d'Água",
        ibge_state_id: 25,
      },
      {
        ibge_id: 2510501,
        name: 'Olivedos',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2510600,
        name: 'Ouro Velho',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2510659,
        name: 'Parari',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2510709,
        name: 'Passagem',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2510808,
        name: 'Patos',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2510907,
        name: 'Paulista',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2511004,
        name: 'Pedra Branca',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2511103,
        name: 'Pedra Lavrada',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2511202,
        name: 'Pedras de Fogo',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2511301,
        name: 'Piancó',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2511400,
        name: 'Picuí',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2511509,
        name: 'Pilar',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2511608,
        name: 'Pilões',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2511707,
        name: 'Pilõezinhos',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2511806,
        name: 'Pirpirituba',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2511905,
        name: 'Pitimbu',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2512002,
        name: 'Pocinhos',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2512036,
        name: 'Poço Dantas',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2512077,
        name: 'Poço de José de Moura',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2512101,
        name: 'Pombal',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2512200,
        name: 'Prata',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2512309,
        name: 'Princesa Isabel',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2512408,
        name: 'Puxinanã',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2512507,
        name: 'Queimadas',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2512606,
        name: 'Quixaba',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2512705,
        name: 'Remígio',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2512721,
        name: 'Pedro Régis',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2512747,
        name: 'Riachão',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2512754,
        name: 'Riachão do Bacamarte',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2512762,
        name: 'Riachão do Poço',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2512788,
        name: 'Riacho de Santo Antônio',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2512804,
        name: 'Riacho dos Cavalos',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2512903,
        name: 'Rio Tinto',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2513000,
        name: 'Salgadinho',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2513109,
        name: 'Salgado de São Félix',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2513158,
        name: 'Santa Cecília',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2513208,
        name: 'Santa Cruz',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2513307,
        name: 'Santa Helena',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2513356,
        name: 'Santa Inês',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2513406,
        name: 'Santa Luzia',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2513505,
        name: 'Santana de Mangueira',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2513604,
        name: 'Santana dos Garrotes',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2513653,
        name: 'Joca Claudino',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2513703,
        name: 'Santa Rita',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2513802,
        name: 'Santa Teresinha',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2513851,
        name: 'Santo André',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2513901,
        name: 'São Bento',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2513927,
        name: 'São Bentinho',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2513943,
        name: 'São Domingos do Cariri',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2513968,
        name: 'São Domingos',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2513984,
        name: 'São Francisco',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2514008,
        name: 'São João do Cariri',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2514107,
        name: 'São João do Tigre',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2514206,
        name: 'São José da Lagoa Tapada',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2514305,
        name: 'São José de Caiana',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2514404,
        name: 'São José de Espinharas',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2514453,
        name: 'São José dos Ramos',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2514503,
        name: 'São José de Piranhas',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2514552,
        name: 'São José de Princesa',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2514602,
        name: 'São José do Bonfim',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2514651,
        name: 'São José do Brejo do Cruz',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2514701,
        name: 'São José do Sabugi',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2514800,
        name: 'São José dos Cordeiros',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2514909,
        name: 'São Mamede',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2515005,
        name: 'São Miguel de Taipu',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2515104,
        name: 'São Sebastião de Lagoa de Roça',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2515203,
        name: 'São Sebastião do Umbuzeiro',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2515302,
        name: 'Sapé',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2515401,
        name: 'São Vicente do Seridó',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2515500,
        name: 'Serra Branca',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2515609,
        name: 'Serra da Raiz',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2515708,
        name: 'Serra Grande',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2515807,
        name: 'Serra Redonda',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2515906,
        name: 'Serraria',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2515930,
        name: 'Sertãozinho',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2515971,
        name: 'Sobrado',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2516003,
        name: 'Solânea',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2516102,
        name: 'Soledade',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2516151,
        name: 'Sossêgo',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2516201,
        name: 'Sousa',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2516300,
        name: 'Sumé',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2516409,
        name: 'Tacima',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2516508,
        name: 'Taperoá',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2516607,
        name: 'Tavares',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2516706,
        name: 'Teixeira',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2516755,
        name: 'Tenório',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2516805,
        name: 'Triunfo',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2516904,
        name: 'Uiraúna',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2517001,
        name: 'Umbuzeiro',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2517100,
        name: 'Várzea',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2517209,
        name: 'Vieirópolis',
        ibge_state_id: 25,
      },
      {
        ibge_id: 2517407,
        name: 'Zabelê',
        ibge_state_id: 25,
      },
    ],
  });

  await prisma.ibgeCity.createMany({
    data: [
      {
        ibge_id: 2600054,
        name: 'Abreu e Lima',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2600104,
        name: 'Afogados da Ingazeira',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2600203,
        name: 'Afrânio',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2600302,
        name: 'Agrestina',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2600401,
        name: 'Água Preta',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2600500,
        name: 'Águas Belas',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2600609,
        name: 'Alagoinha',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2600708,
        name: 'Aliança',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2600807,
        name: 'Altinho',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2600906,
        name: 'Amaraji',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2601003,
        name: 'Angelim',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2601052,
        name: 'Araçoiaba',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2601102,
        name: 'Araripina',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2601201,
        name: 'Arcoverde',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2601300,
        name: 'Barra de Guabiraba',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2601409,
        name: 'Barreiros',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2601508,
        name: 'Belém de Maria',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2601607,
        name: 'Belém do São Francisco',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2601706,
        name: 'Belo Jardim',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2601805,
        name: 'Betânia',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2601904,
        name: 'Bezerros',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2602001,
        name: 'Bodocó',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2602100,
        name: 'Bom Conselho',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2602209,
        name: 'Bom Jardim',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2602308,
        name: 'Bonito',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2602407,
        name: 'Brejão',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2602506,
        name: 'Brejinho',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2602605,
        name: 'Brejo da Madre de Deus',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2602704,
        name: 'Buenos Aires',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2602803,
        name: 'Buíque',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2602902,
        name: 'Cabo de Santo Agostinho',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2603009,
        name: 'Cabrobó',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2603108,
        name: 'Cachoeirinha',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2603207,
        name: 'Caetés',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2603306,
        name: 'Calçado',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2603405,
        name: 'Calumbi',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2603454,
        name: 'Camaragibe',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2603504,
        name: 'Camocim de São Félix',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2603603,
        name: 'Camutanga',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2603702,
        name: 'Canhotinho',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2603801,
        name: 'Capoeiras',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2603900,
        name: 'Carnaíba',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2603926,
        name: 'Carnaubeira da Penha',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2604007,
        name: 'Carpina',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2604106,
        name: 'Caruaru',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2604155,
        name: 'Casinhas',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2604205,
        name: 'Catende',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2604304,
        name: 'Cedro',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2604403,
        name: 'Chã de Alegria',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2604502,
        name: 'Chã Grande',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2604601,
        name: 'Condado',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2604700,
        name: 'Correntes',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2604809,
        name: 'Cortês',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2604908,
        name: 'Cumaru',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2605004,
        name: 'Cupira',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2605103,
        name: 'Custódia',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2605152,
        name: 'Dormentes',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2605202,
        name: 'Escada',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2605301,
        name: 'Exu',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2605400,
        name: 'Feira Nova',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2605459,
        name: 'Fernando de Noronha',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2605509,
        name: 'Ferreiros',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2605608,
        name: 'Flores',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2605707,
        name: 'Floresta',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2605806,
        name: 'Frei Miguelinho',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2605905,
        name: 'Gameleira',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2606002,
        name: 'Garanhuns',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2606101,
        name: 'Glória do Goitá',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2606200,
        name: 'Goiana',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2606309,
        name: 'Granito',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2606408,
        name: 'Gravatá',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2606507,
        name: 'Iati',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2606606,
        name: 'Ibimirim',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2606705,
        name: 'Ibirajuba',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2606804,
        name: 'Igarassu',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2606903,
        name: 'Iguaracy',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2607000,
        name: 'Inajá',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2607109,
        name: 'Ingazeira',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2607208,
        name: 'Ipojuca',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2607307,
        name: 'Ipubi',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2607406,
        name: 'Itacuruba',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2607505,
        name: 'Itaíba',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2607604,
        name: 'Ilha de Itamaracá',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2607653,
        name: 'Itambé',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2607703,
        name: 'Itapetim',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2607752,
        name: 'Itapissuma',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2607802,
        name: 'Itaquitinga',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2607901,
        name: 'Jaboatão dos Guararapes',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2607950,
        name: 'Jaqueira',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2608008,
        name: 'Jataúba',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2608057,
        name: 'Jatobá',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2608107,
        name: 'João Alfredo',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2608206,
        name: 'Joaquim Nabuco',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2608255,
        name: 'Jucati',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2608305,
        name: 'Jupi',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2608404,
        name: 'Jurema',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2608453,
        name: 'Lagoa do Carro',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2608503,
        name: 'Lagoa de Itaenga',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2608602,
        name: 'Lagoa do Ouro',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2608701,
        name: 'Lagoa dos Gatos',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2608750,
        name: 'Lagoa Grande',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2608800,
        name: 'Lajedo',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2608909,
        name: 'Limoeiro',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2609006,
        name: 'Macaparana',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2609105,
        name: 'Machados',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2609154,
        name: 'Manari',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2609204,
        name: 'Maraial',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2609303,
        name: 'Mirandiba',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2609402,
        name: 'Moreno',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2609501,
        name: 'Nazaré da Mata',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2609600,
        name: 'Olinda',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2609709,
        name: 'Orobó',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2609808,
        name: 'Orocó',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2609907,
        name: 'Ouricuri',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2610004,
        name: 'Palmares',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2610103,
        name: 'Palmeirina',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2610202,
        name: 'Panelas',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2610301,
        name: 'Paranatama',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2610400,
        name: 'Parnamirim',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2610509,
        name: 'Passira',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2610608,
        name: 'Paudalho',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2610707,
        name: 'Paulista',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2610806,
        name: 'Pedra',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2610905,
        name: 'Pesqueira',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2611002,
        name: 'Petrolândia',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2611101,
        name: 'Petrolina',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2611200,
        name: 'Poção',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2611309,
        name: 'Pombos',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2611408,
        name: 'Primavera',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2611507,
        name: 'Quipapá',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2611533,
        name: 'Quixaba',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2611606,
        name: 'Recife',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2611705,
        name: 'Riacho das Almas',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2611804,
        name: 'Ribeirão',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2611903,
        name: 'Rio Formoso',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2612000,
        name: 'Sairé',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2612109,
        name: 'Salgadinho',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2612208,
        name: 'Salgueiro',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2612307,
        name: 'Saloá',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2612406,
        name: 'Sanharó',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2612455,
        name: 'Santa Cruz',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2612471,
        name: 'Santa Cruz da Baixa Verde',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2612505,
        name: 'Santa Cruz do Capibaribe',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2612554,
        name: 'Santa Filomena',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2612604,
        name: 'Santa Maria da Boa Vista',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2612703,
        name: 'Santa Maria do Cambucá',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2612802,
        name: 'Santa Terezinha',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2612901,
        name: 'São Benedito do Sul',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2613008,
        name: 'São Bento do Una',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2613107,
        name: 'São Caitano',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2613206,
        name: 'São João',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2613305,
        name: 'São Joaquim do Monte',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2613404,
        name: 'São José da Coroa Grande',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2613503,
        name: 'São José do Belmonte',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2613602,
        name: 'São José do Egito',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2613701,
        name: 'São Lourenço da Mata',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2613800,
        name: 'São Vicente Férrer',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2613909,
        name: 'Serra Talhada',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2614006,
        name: 'Serrita',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2614105,
        name: 'Sertânia',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2614204,
        name: 'Sirinhaém',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2614303,
        name: 'Moreilândia',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2614402,
        name: 'Solidão',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2614501,
        name: 'Surubim',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2614600,
        name: 'Tabira',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2614709,
        name: 'Tacaimbó',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2614808,
        name: 'Tacaratu',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2614857,
        name: 'Tamandaré',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2615003,
        name: 'Taquaritinga do Norte',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2615102,
        name: 'Terezinha',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2615201,
        name: 'Terra Nova',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2615300,
        name: 'Timbaúba',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2615409,
        name: 'Toritama',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2615508,
        name: 'Tracunhaém',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2615607,
        name: 'Trindade',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2615706,
        name: 'Triunfo',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2615805,
        name: 'Tupanatinga',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2615904,
        name: 'Tuparetama',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2616001,
        name: 'Venturosa',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2616100,
        name: 'Verdejante',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2616183,
        name: 'Vertente do Lério',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2616209,
        name: 'Vertentes',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2616308,
        name: 'Vicência',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2616407,
        name: 'Vitória de Santo Antão',
        ibge_state_id: 26,
      },
      {
        ibge_id: 2616506,
        name: 'Xexéu',
        ibge_state_id: 26,
      },
    ],
  });

  await prisma.ibgeCity.createMany({
    data: [
      {
        ibge_id: 2700102,
        name: 'Água Branca',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2700201,
        name: 'Anadia',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2700300,
        name: 'Arapiraca',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2700409,
        name: 'Atalaia',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2700508,
        name: 'Barra de Santo Antônio',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2700607,
        name: 'Barra de São Miguel',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2700706,
        name: 'Batalha',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2700805,
        name: 'Belém',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2700904,
        name: 'Belo Monte',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2701001,
        name: 'Boca da Mata',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2701100,
        name: 'Branquinha',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2701209,
        name: 'Cacimbinhas',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2701308,
        name: 'Cajueiro',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2701357,
        name: 'Campestre',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2701407,
        name: 'Campo Alegre',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2701506,
        name: 'Campo Grande',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2701605,
        name: 'Canapi',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2701704,
        name: 'Capela',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2701803,
        name: 'Carneiros',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2701902,
        name: 'Chã Preta',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2702009,
        name: 'Coité do Nóia',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2702108,
        name: 'Colônia Leopoldina',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2702207,
        name: 'Coqueiro Seco',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2702306,
        name: 'Coruripe',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2702355,
        name: 'Craíbas',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2702405,
        name: 'Delmiro Gouveia',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2702504,
        name: 'Dois Riachos',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2702553,
        name: 'Estrela de Alagoas',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2702603,
        name: 'Feira Grande',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2702702,
        name: 'Feliz Deserto',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2702801,
        name: 'Flexeiras',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2702900,
        name: 'Girau do Ponciano',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2703007,
        name: 'Ibateguara',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2703106,
        name: 'Igaci',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2703205,
        name: 'Igreja Nova',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2703304,
        name: 'Inhapi',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2703403,
        name: 'Jacaré dos Homens',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2703502,
        name: 'Jacuípe',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2703601,
        name: 'Japaratinga',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2703700,
        name: 'Jaramataia',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2703759,
        name: 'Jequiá da Praia',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2703809,
        name: 'Joaquim Gomes',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2703908,
        name: 'Jundiá',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2704005,
        name: 'Junqueiro',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2704104,
        name: 'Lagoa da Canoa',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2704203,
        name: 'Limoeiro de Anadia',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2704302,
        name: 'Maceió',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2704401,
        name: 'Major Isidoro',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2704500,
        name: 'Maragogi',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2704609,
        name: 'Maravilha',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2704708,
        name: 'Marechal Deodoro',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2704807,
        name: 'Maribondo',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2704906,
        name: 'Mar Vermelho',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2705002,
        name: 'Mata Grande',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2705101,
        name: 'Matriz de Camaragibe',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2705200,
        name: 'Messias',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2705309,
        name: 'Minador do Negrão',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2705408,
        name: 'Monteirópolis',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2705507,
        name: 'Murici',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2705606,
        name: 'Novo Lino',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2705705,
        name: "Olho d'Água das Flores",
        ibge_state_id: 27,
      },
      {
        ibge_id: 2705804,
        name: "Olho d'Água do Casado",
        ibge_state_id: 27,
      },
      {
        ibge_id: 2705903,
        name: "Olho d'Água Grande",
        ibge_state_id: 27,
      },
      {
        ibge_id: 2706000,
        name: 'Olivença',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2706109,
        name: 'Ouro Branco',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2706208,
        name: 'Palestina',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2706307,
        name: 'Palmeira dos Índios',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2706406,
        name: 'Pão de Açúcar',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2706422,
        name: 'Pariconha',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2706448,
        name: 'Paripueira',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2706505,
        name: 'Passo de Camaragibe',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2706604,
        name: 'Paulo Jacinto',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2706703,
        name: 'Penedo',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2706802,
        name: 'Piaçabuçu',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2706901,
        name: 'Pilar',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2707008,
        name: 'Pindoba',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2707107,
        name: 'Piranhas',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2707206,
        name: 'Poço das Trincheiras',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2707305,
        name: 'Porto Calvo',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2707404,
        name: 'Porto de Pedras',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2707503,
        name: 'Porto Real do Colégio',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2707602,
        name: 'Quebrangulo',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2707701,
        name: 'Rio Largo',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2707800,
        name: 'Roteiro',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2707909,
        name: 'Santa Luzia do Norte',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2708006,
        name: 'Santana do Ipanema',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2708105,
        name: 'Santana do Mundaú',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2708204,
        name: 'São Brás',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2708303,
        name: 'São José da Laje',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2708402,
        name: 'São José da Tapera',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2708501,
        name: 'São Luís do Quitunde',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2708600,
        name: 'São Miguel dos Campos',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2708709,
        name: 'São Miguel dos Milagres',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2708808,
        name: 'São Sebastião',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2708907,
        name: 'Satuba',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2708956,
        name: 'Senador Rui Palmeira',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2709004,
        name: "Tanque d'Arca",
        ibge_state_id: 27,
      },
      {
        ibge_id: 2709103,
        name: 'Taquarana',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2709152,
        name: 'Teotônio Vilela',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2709202,
        name: 'Traipu',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2709301,
        name: 'União dos Palmares',
        ibge_state_id: 27,
      },
      {
        ibge_id: 2709400,
        name: 'Viçosa',
        ibge_state_id: 27,
      },
    ],
  });

  await prisma.ibgeCity.createMany({
    data: [
      {
        ibge_id: 2800100,
        name: 'Amparo do São Francisco',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2800209,
        name: 'Aquidabã',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2800308,
        name: 'Aracaju',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2800407,
        name: 'Arauá',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2800506,
        name: 'Areia Branca',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2800605,
        name: 'Barra dos Coqueiros',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2800670,
        name: 'Boquim',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2800704,
        name: 'Brejo Grande',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2801009,
        name: 'Campo do Brito',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2801108,
        name: 'Canhoba',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2801207,
        name: 'Canindé de São Francisco',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2801306,
        name: 'Capela',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2801405,
        name: 'Carira',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2801504,
        name: 'Carmópolis',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2801603,
        name: 'Cedro de São João',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2801702,
        name: 'Cristinápolis',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2801900,
        name: 'Cumbe',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2802007,
        name: 'Divina Pastora',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2802106,
        name: 'Estância',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2802205,
        name: 'Feira Nova',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2802304,
        name: 'Frei Paulo',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2802403,
        name: 'Gararu',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2802502,
        name: 'General Maynard',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2802601,
        name: 'Gracho Cardoso',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2802700,
        name: 'Ilha das Flores',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2802809,
        name: 'Indiaroba',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2802908,
        name: 'Itabaiana',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2803005,
        name: 'Itabaianinha',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2803104,
        name: 'Itabi',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2803203,
        name: "Itaporanga d'Ajuda",
        ibge_state_id: 28,
      },
      {
        ibge_id: 2803302,
        name: 'Japaratuba',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2803401,
        name: 'Japoatã',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2803500,
        name: 'Lagarto',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2803609,
        name: 'Laranjeiras',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2803708,
        name: 'Macambira',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2803807,
        name: 'Malhada dos Bois',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2803906,
        name: 'Malhador',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2804003,
        name: 'Maruim',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2804102,
        name: 'Moita Bonita',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2804201,
        name: 'Monte Alegre de Sergipe',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2804300,
        name: 'Muribeca',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2804409,
        name: 'Neópolis',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2804458,
        name: 'Nossa Senhora Aparecida',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2804508,
        name: 'Nossa Senhora da Glória',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2804607,
        name: 'Nossa Senhora das Dores',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2804706,
        name: 'Nossa Senhora de Lourdes',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2804805,
        name: 'Nossa Senhora do Socorro',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2804904,
        name: 'Pacatuba',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2805000,
        name: 'Pedra Mole',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2805109,
        name: 'Pedrinhas',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2805208,
        name: 'Pinhão',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2805307,
        name: 'Pirambu',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2805406,
        name: 'Poço Redondo',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2805505,
        name: 'Poço Verde',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2805604,
        name: 'Porto da Folha',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2805703,
        name: 'Propriá',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2805802,
        name: 'Riachão do Dantas',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2805901,
        name: 'Riachuelo',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2806008,
        name: 'Ribeirópolis',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2806107,
        name: 'Rosário do Catete',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2806206,
        name: 'Salgado',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2806305,
        name: 'Santa Luzia do Itanhy',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2806404,
        name: 'Santana do São Francisco',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2806503,
        name: 'Santa Rosa de Lima',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2806602,
        name: 'Santo Amaro das Brotas',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2806701,
        name: 'São Cristóvão',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2806800,
        name: 'São Domingos',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2806909,
        name: 'São Francisco',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2807006,
        name: 'São Miguel do Aleixo',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2807105,
        name: 'Simão Dias',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2807204,
        name: 'Siriri',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2807303,
        name: 'Telha',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2807402,
        name: 'Tobias Barreto',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2807501,
        name: 'Tomar do Geru',
        ibge_state_id: 28,
      },
      {
        ibge_id: 2807600,
        name: 'Umbaúba',
        ibge_state_id: 28,
      },
    ],
  });

  await prisma.ibgeCity.createMany({
    data: [
      {
        ibge_id: 2900108,
        name: 'Abaíra',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2900207,
        name: 'Abaré',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2900306,
        name: 'Acajutiba',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2900355,
        name: 'Adustina',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2900405,
        name: 'Água Fria',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2900504,
        name: 'Érico Cardoso',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2900603,
        name: 'Aiquara',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2900702,
        name: 'Alagoinhas',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2900801,
        name: 'Alcobaça',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2900900,
        name: 'Almadina',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2901007,
        name: 'Amargosa',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2901106,
        name: 'Amélia Rodrigues',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2901155,
        name: 'América Dourada',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2901205,
        name: 'Anagé',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2901304,
        name: 'Andaraí',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2901353,
        name: 'Andorinha',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2901403,
        name: 'Angical',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2901502,
        name: 'Anguera',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2901601,
        name: 'Antas',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2901700,
        name: 'Antônio Cardoso',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2901809,
        name: 'Antônio Gonçalves',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2901908,
        name: 'Aporá',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2901957,
        name: 'Apuarema',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2902005,
        name: 'Aracatu',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2902054,
        name: 'Araçás',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2902104,
        name: 'Araci',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2902203,
        name: 'Aramari',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2902252,
        name: 'Arataca',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2902302,
        name: 'Aratuípe',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2902401,
        name: 'Aurelino Leal',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2902500,
        name: 'Baianópolis',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2902609,
        name: 'Baixa Grande',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2902658,
        name: 'Banzaê',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2902708,
        name: 'Barra',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2902807,
        name: 'Barra da Estiva',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2902906,
        name: 'Barra do Choça',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2903003,
        name: 'Barra do Mendes',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2903102,
        name: 'Barra do Rocha',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2903201,
        name: 'Barreiras',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2903235,
        name: 'Barro Alto',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2903276,
        name: 'Barrocas',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2903300,
        name: 'Barro Preto',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2903409,
        name: 'Belmonte',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2903508,
        name: 'Belo Campo',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2903607,
        name: 'Biritinga',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2903706,
        name: 'Boa Nova',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2903805,
        name: 'Boa Vista do Tupim',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2903904,
        name: 'Bom Jesus da Lapa',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2903953,
        name: 'Bom Jesus da Serra',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2904001,
        name: 'Boninal',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2904050,
        name: 'Bonito',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2904100,
        name: 'Boquira',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2904209,
        name: 'Botuporã',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2904308,
        name: 'Brejões',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2904407,
        name: 'Brejolândia',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2904506,
        name: 'Brotas de Macaúbas',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2904605,
        name: 'Brumado',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2904704,
        name: 'Buerarema',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2904753,
        name: 'Buritirama',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2904803,
        name: 'Caatiba',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2904852,
        name: 'Cabaceiras do Paraguaçu',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2904902,
        name: 'Cachoeira',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2905008,
        name: 'Caculé',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2905107,
        name: 'Caém',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2905156,
        name: 'Caetanos',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2905206,
        name: 'Caetité',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2905305,
        name: 'Cafarnaum',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2905404,
        name: 'Cairu',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2905503,
        name: 'Caldeirão Grande',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2905602,
        name: 'Camacan',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2905701,
        name: 'Camaçari',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2905800,
        name: 'Camamu',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2905909,
        name: 'Campo Alegre de Lourdes',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2906006,
        name: 'Campo Formoso',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2906105,
        name: 'Canápolis',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2906204,
        name: 'Canarana',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2906303,
        name: 'Canavieiras',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2906402,
        name: 'Candeal',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2906501,
        name: 'Candeias',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2906600,
        name: 'Candiba',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2906709,
        name: 'Cândido Sales',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2906808,
        name: 'Cansanção',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2906824,
        name: 'Canudos',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2906857,
        name: 'Capela do Alto Alegre',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2906873,
        name: 'Capim Grosso',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2906899,
        name: 'Caraíbas',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2906907,
        name: 'Caravelas',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2907004,
        name: 'Cardeal da Silva',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2907103,
        name: 'Carinhanha',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2907202,
        name: 'Casa Nova',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2907301,
        name: 'Castro Alves',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2907400,
        name: 'Catolândia',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2907509,
        name: 'Catu',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2907558,
        name: 'Caturama',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2907608,
        name: 'Central',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2907707,
        name: 'Chorrochó',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2907806,
        name: 'Cícero Dantas',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2907905,
        name: 'Cipó',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2908002,
        name: 'Coaraci',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2908101,
        name: 'Cocos',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2908200,
        name: 'Conceição da Feira',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2908309,
        name: 'Conceição do Almeida',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2908408,
        name: 'Conceição do Coité',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2908507,
        name: 'Conceição do Jacuípe',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2908606,
        name: 'Conde',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2908705,
        name: 'Condeúba',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2908804,
        name: 'Contendas do Sincorá',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2908903,
        name: 'Coração de Maria',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2909000,
        name: 'Cordeiros',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2909109,
        name: 'Coribe',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2909208,
        name: 'Coronel João Sá',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2909307,
        name: 'Correntina',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2909406,
        name: 'Cotegipe',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2909505,
        name: 'Cravolândia',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2909604,
        name: 'Crisópolis',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2909703,
        name: 'Cristópolis',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2909802,
        name: 'Cruz das Almas',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2909901,
        name: 'Curaçá',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2910008,
        name: 'Dário Meira',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2910057,
        name: "Dias d'Ávila",
        ibge_state_id: 29,
      },
      {
        ibge_id: 2910107,
        name: 'Dom Basílio',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2910206,
        name: 'Dom Macedo Costa',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2910305,
        name: 'Elísio Medrado',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2910404,
        name: 'Encruzilhada',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2910503,
        name: 'Entre Rios',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2910602,
        name: 'Esplanada',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2910701,
        name: 'Euclides da Cunha',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2910727,
        name: 'Eunápolis',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2910750,
        name: 'Fátima',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2910776,
        name: 'Feira da Mata',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2910800,
        name: 'Feira de Santana',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2910859,
        name: 'Filadélfia',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2910909,
        name: 'Firmino Alves',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2911006,
        name: 'Floresta Azul',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2911105,
        name: 'Formosa do Rio Preto',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2911204,
        name: 'Gandu',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2911253,
        name: 'Gavião',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2911303,
        name: 'Gentio do Ouro',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2911402,
        name: 'Glória',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2911501,
        name: 'Gongogi',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2911600,
        name: 'Governador Mangabeira',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2911659,
        name: 'Guajeru',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2911709,
        name: 'Guanambi',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2911808,
        name: 'Guaratinga',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2911857,
        name: 'Heliópolis',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2911907,
        name: 'Iaçu',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2912004,
        name: 'Ibiassucê',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2912103,
        name: 'Ibicaraí',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2912202,
        name: 'Ibicoara',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2912301,
        name: 'Ibicuí',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2912400,
        name: 'Ibipeba',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2912509,
        name: 'Ibipitanga',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2912608,
        name: 'Ibiquera',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2912707,
        name: 'Ibirapitanga',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2912806,
        name: 'Ibirapuã',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2912905,
        name: 'Ibirataia',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2913002,
        name: 'Ibitiara',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2913101,
        name: 'Ibititá',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2913200,
        name: 'Ibotirama',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2913309,
        name: 'Ichu',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2913408,
        name: 'Igaporã',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2913457,
        name: 'Igrapiúna',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2913507,
        name: 'Iguaí',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2913606,
        name: 'Ilhéus',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2913705,
        name: 'Inhambupe',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2913804,
        name: 'Ipecaetá',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2913903,
        name: 'Ipiaú',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2914000,
        name: 'Ipirá',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2914109,
        name: 'Ipupiara',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2914208,
        name: 'Irajuba',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2914307,
        name: 'Iramaia',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2914406,
        name: 'Iraquara',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2914505,
        name: 'Irará',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2914604,
        name: 'Irecê',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2914653,
        name: 'Itabela',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2914703,
        name: 'Itaberaba',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2914802,
        name: 'Itabuna',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2914901,
        name: 'Itacaré',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2915007,
        name: 'Itaeté',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2915106,
        name: 'Itagi',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2915205,
        name: 'Itagibá',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2915304,
        name: 'Itagimirim',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2915353,
        name: 'Itaguaçu da Bahia',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2915403,
        name: 'Itaju do Colônia',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2915502,
        name: 'Itajuípe',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2915601,
        name: 'Itamaraju',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2915700,
        name: 'Itamari',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2915809,
        name: 'Itambé',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2915908,
        name: 'Itanagra',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2916005,
        name: 'Itanhém',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2916104,
        name: 'Itaparica',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2916203,
        name: 'Itapé',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2916302,
        name: 'Itapebi',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2916401,
        name: 'Itapetinga',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2916500,
        name: 'Itapicuru',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2916609,
        name: 'Itapitanga',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2916708,
        name: 'Itaquara',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2916807,
        name: 'Itarantim',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2916856,
        name: 'Itatim',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2916906,
        name: 'Itiruçu',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2917003,
        name: 'Itiúba',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2917102,
        name: 'Itororó',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2917201,
        name: 'Ituaçu',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2917300,
        name: 'Ituberá',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2917334,
        name: 'Iuiu',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2917359,
        name: 'Jaborandi',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2917409,
        name: 'Jacaraci',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2917508,
        name: 'Jacobina',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2917607,
        name: 'Jaguaquara',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2917706,
        name: 'Jaguarari',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2917805,
        name: 'Jaguaripe',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2917904,
        name: 'Jandaíra',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2918001,
        name: 'Jequié',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2918100,
        name: 'Jeremoabo',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2918209,
        name: 'Jiquiriçá',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2918308,
        name: 'Jitaúna',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2918357,
        name: 'João Dourado',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2918407,
        name: 'Juazeiro',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2918456,
        name: 'Jucuruçu',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2918506,
        name: 'Jussara',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2918555,
        name: 'Jussari',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2918605,
        name: 'Jussiape',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2918704,
        name: 'Lafaiete Coutinho',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2918753,
        name: 'Lagoa Real',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2918803,
        name: 'Laje',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2918902,
        name: 'Lajedão',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2919009,
        name: 'Lajedinho',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2919058,
        name: 'Lajedo do Tabocal',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2919108,
        name: 'Lamarão',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2919157,
        name: 'Lapão',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2919207,
        name: 'Lauro de Freitas',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2919306,
        name: 'Lençóis',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2919405,
        name: 'Licínio de Almeida',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2919504,
        name: 'Livramento de Nossa Senhora',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2919553,
        name: 'Luís Eduardo Magalhães',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2919603,
        name: 'Macajuba',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2919702,
        name: 'Macarani',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2919801,
        name: 'Macaúbas',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2919900,
        name: 'Macururé',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2919926,
        name: 'Madre de Deus',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2919959,
        name: 'Maetinga',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2920007,
        name: 'Maiquinique',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2920106,
        name: 'Mairi',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2920205,
        name: 'Malhada',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2920304,
        name: 'Malhada de Pedras',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2920403,
        name: 'Manoel Vitorino',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2920452,
        name: 'Mansidão',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2920502,
        name: 'Maracás',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2920601,
        name: 'Maragogipe',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2920700,
        name: 'Maraú',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2920809,
        name: 'Marcionílio Souza',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2920908,
        name: 'Mascote',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2921005,
        name: 'Mata de São João',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2921054,
        name: 'Matina',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2921104,
        name: 'Medeiros Neto',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2921203,
        name: 'Miguel Calmon',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2921302,
        name: 'Milagres',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2921401,
        name: 'Mirangaba',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2921450,
        name: 'Mirante',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2921500,
        name: 'Monte Santo',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2921609,
        name: 'Morpará',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2921708,
        name: 'Morro do Chapéu',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2921807,
        name: 'Mortugaba',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2921906,
        name: 'Mucugê',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2922003,
        name: 'Mucuri',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2922052,
        name: 'Mulungu do Morro',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2922102,
        name: 'Mundo Novo',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2922201,
        name: 'Muniz Ferreira',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2922250,
        name: 'Muquém do São Francisco',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2922300,
        name: 'Muritiba',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2922409,
        name: 'Mutuípe',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2922508,
        name: 'Nazaré',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2922607,
        name: 'Nilo Peçanha',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2922656,
        name: 'Nordestina',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2922706,
        name: 'Nova Canaã',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2922730,
        name: 'Nova Fátima',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2922755,
        name: 'Nova Ibiá',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2922805,
        name: 'Nova Itarana',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2922854,
        name: 'Nova Redenção',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2922904,
        name: 'Nova Soure',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2923001,
        name: 'Nova Viçosa',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2923035,
        name: 'Novo Horizonte',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2923050,
        name: 'Novo Triunfo',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2923100,
        name: 'Olindina',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2923209,
        name: 'Oliveira dos Brejinhos',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2923308,
        name: 'Ouriçangas',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2923357,
        name: 'Ourolândia',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2923407,
        name: 'Palmas de Monte Alto',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2923506,
        name: 'Palmeiras',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2923605,
        name: 'Paramirim',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2923704,
        name: 'Paratinga',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2923803,
        name: 'Paripiranga',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2923902,
        name: 'Pau Brasil',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2924009,
        name: 'Paulo Afonso',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2924058,
        name: 'Pé de Serra',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2924108,
        name: 'Pedrão',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2924207,
        name: 'Pedro Alexandre',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2924306,
        name: 'Piatã',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2924405,
        name: 'Pilão Arcado',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2924504,
        name: 'Pindaí',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2924603,
        name: 'Pindobaçu',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2924652,
        name: 'Pintadas',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2924678,
        name: 'Piraí do Norte',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2924702,
        name: 'Piripá',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2924801,
        name: 'Piritiba',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2924900,
        name: 'Planaltino',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2925006,
        name: 'Planalto',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2925105,
        name: 'Poções',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2925204,
        name: 'Pojuca',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2925253,
        name: 'Ponto Novo',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2925303,
        name: 'Porto Seguro',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2925402,
        name: 'Potiraguá',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2925501,
        name: 'Prado',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2925600,
        name: 'Presidente Dutra',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2925709,
        name: 'Presidente Jânio Quadros',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2925758,
        name: 'Presidente Tancredo Neves',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2925808,
        name: 'Queimadas',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2925907,
        name: 'Quijingue',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2925931,
        name: 'Quixabeira',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2925956,
        name: 'Rafael Jambeiro',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2926004,
        name: 'Remanso',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2926103,
        name: 'Retirolândia',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2926202,
        name: 'Riachão das Neves',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2926301,
        name: 'Riachão do Jacuípe',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2926400,
        name: 'Riacho de Santana',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2926509,
        name: 'Ribeira do Amparo',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2926608,
        name: 'Ribeira do Pombal',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2926657,
        name: 'Ribeirão do Largo',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2926707,
        name: 'Rio de Contas',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2926806,
        name: 'Rio do Antônio',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2926905,
        name: 'Rio do Pires',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2927002,
        name: 'Rio Real',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2927101,
        name: 'Rodelas',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2927200,
        name: 'Ruy Barbosa',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2927309,
        name: 'Salinas da Margarida',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2927408,
        name: 'Salvador',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2927507,
        name: 'Santa Bárbara',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2927606,
        name: 'Santa Brígida',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2927705,
        name: 'Santa Cruz Cabrália',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2927804,
        name: 'Santa Cruz da Vitória',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2927903,
        name: 'Santa Inês',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2928000,
        name: 'Santaluz',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2928059,
        name: 'Santa Luzia',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2928109,
        name: 'Santa Maria da Vitória',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2928208,
        name: 'Santana',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2928307,
        name: 'Santanópolis',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2928406,
        name: 'Santa Rita de Cássia',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2928505,
        name: 'Santa Terezinha',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2928604,
        name: 'Santo Amaro',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2928703,
        name: 'Santo Antônio de Jesus',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2928802,
        name: 'Santo Estêvão',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2928901,
        name: 'São Desidério',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2928950,
        name: 'São Domingos',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2929008,
        name: 'São Félix',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2929057,
        name: 'São Félix do Coribe',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2929107,
        name: 'São Felipe',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2929206,
        name: 'São Francisco do Conde',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2929255,
        name: 'São Gabriel',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2929305,
        name: 'São Gonçalo dos Campos',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2929354,
        name: 'São José da Vitória',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2929370,
        name: 'São José do Jacuípe',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2929404,
        name: 'São Miguel das Matas',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2929503,
        name: 'São Sebastião do Passé',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2929602,
        name: 'Sapeaçu',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2929701,
        name: 'Sátiro Dias',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2929750,
        name: 'Saubara',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2929800,
        name: 'Saúde',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2929909,
        name: 'Seabra',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2930006,
        name: 'Sebastião Laranjeiras',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2930105,
        name: 'Senhor do Bonfim',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2930154,
        name: 'Serra do Ramalho',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2930204,
        name: 'Sento Sé',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2930303,
        name: 'Serra Dourada',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2930402,
        name: 'Serra Preta',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2930501,
        name: 'Serrinha',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2930600,
        name: 'Serrolândia',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2930709,
        name: 'Simões Filho',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2930758,
        name: 'Sítio do Mato',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2930766,
        name: 'Sítio do Quinto',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2930774,
        name: 'Sobradinho',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2930808,
        name: 'Souto Soares',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2930907,
        name: 'Tabocas do Brejo Velho',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2931004,
        name: 'Tanhaçu',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2931053,
        name: 'Tanque Novo',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2931103,
        name: 'Tanquinho',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2931202,
        name: 'Taperoá',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2931301,
        name: 'Tapiramutá',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2931350,
        name: 'Teixeira de Freitas',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2931400,
        name: 'Teodoro Sampaio',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2931509,
        name: 'Teofilândia',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2931608,
        name: 'Teolândia',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2931707,
        name: 'Terra Nova',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2931806,
        name: 'Tremedal',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2931905,
        name: 'Tucano',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2932002,
        name: 'Uauá',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2932101,
        name: 'Ubaíra',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2932200,
        name: 'Ubaitaba',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2932309,
        name: 'Ubatã',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2932408,
        name: 'Uibaí',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2932457,
        name: 'Umburanas',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2932507,
        name: 'Una',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2932606,
        name: 'Urandi',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2932705,
        name: 'Uruçuca',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2932804,
        name: 'Utinga',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2932903,
        name: 'Valença',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2933000,
        name: 'Valente',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2933059,
        name: 'Várzea da Roça',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2933109,
        name: 'Várzea do Poço',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2933158,
        name: 'Várzea Nova',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2933174,
        name: 'Varzedo',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2933208,
        name: 'Vera Cruz',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2933257,
        name: 'Vereda',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2933307,
        name: 'Vitória da Conquista',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2933406,
        name: 'Wagner',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2933455,
        name: 'Wanderley',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2933505,
        name: 'Wenceslau Guimarães',
        ibge_state_id: 29,
      },
      {
        ibge_id: 2933604,
        name: 'Xique-Xique',
        ibge_state_id: 29,
      },
    ],
  });

  await prisma.ibgeCity.createMany({
    data: [
      {
        ibge_id: 3100104,
        name: 'Abadia dos Dourados',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3100203,
        name: 'Abaeté',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3100302,
        name: 'Abre Campo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3100401,
        name: 'Acaiaca',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3100500,
        name: 'Açucena',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3100609,
        name: 'Água Boa',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3100708,
        name: 'Água Comprida',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3100807,
        name: 'Aguanil',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3100906,
        name: 'Águas Formosas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3101003,
        name: 'Águas Vermelhas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3101102,
        name: 'Aimorés',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3101201,
        name: 'Aiuruoca',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3101300,
        name: 'Alagoa',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3101409,
        name: 'Albertina',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3101508,
        name: 'Além Paraíba',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3101607,
        name: 'Alfenas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3101631,
        name: 'Alfredo Vasconcelos',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3101706,
        name: 'Almenara',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3101805,
        name: 'Alpercata',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3101904,
        name: 'Alpinópolis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3102001,
        name: 'Alterosa',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3102050,
        name: 'Alto Caparaó',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3102100,
        name: 'Alto Rio Doce',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3102209,
        name: 'Alvarenga',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3102308,
        name: 'Alvinópolis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3102407,
        name: 'Alvorada de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3102506,
        name: 'Amparo do Serra',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3102605,
        name: 'Andradas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3102704,
        name: 'Cachoeira de Pajeú',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3102803,
        name: 'Andrelândia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3102852,
        name: 'Angelândia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3102902,
        name: 'Antônio Carlos',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3103009,
        name: 'Antônio Dias',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3103108,
        name: 'Antônio Prado de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3103207,
        name: 'Araçaí',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3103306,
        name: 'Aracitaba',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3103405,
        name: 'Araçuaí',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3103504,
        name: 'Araguari',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3103603,
        name: 'Arantina',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3103702,
        name: 'Araponga',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3103751,
        name: 'Araporã',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3103801,
        name: 'Arapuá',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3103900,
        name: 'Araújos',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3104007,
        name: 'Araxá',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3104106,
        name: 'Arceburgo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3104205,
        name: 'Arcos',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3104304,
        name: 'Areado',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3104403,
        name: 'Argirita',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3104452,
        name: 'Aricanduva',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3104502,
        name: 'Arinos',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3104601,
        name: 'Astolfo Dutra',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3104700,
        name: 'Ataléia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3104809,
        name: 'Augusto de Lima',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3104908,
        name: 'Baependi',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3105004,
        name: 'Baldim',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3105103,
        name: 'Bambuí',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3105202,
        name: 'Bandeira',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3105301,
        name: 'Bandeira do Sul',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3105400,
        name: 'Barão de Cocais',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3105509,
        name: 'Barão de Monte Alto',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3105608,
        name: 'Barbacena',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3105707,
        name: 'Barra Longa',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3105905,
        name: 'Barroso',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3106002,
        name: 'Bela Vista de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3106101,
        name: 'Belmiro Braga',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3106200,
        name: 'Belo Horizonte',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3106309,
        name: 'Belo Oriente',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3106408,
        name: 'Belo Vale',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3106507,
        name: 'Berilo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3106606,
        name: 'Bertópolis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3106655,
        name: 'Berizal',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3106705,
        name: 'Betim',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3106804,
        name: 'Bias Fortes',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3106903,
        name: 'Bicas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3107000,
        name: 'Biquinhas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3107109,
        name: 'Boa Esperança',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3107208,
        name: 'Bocaina de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3107307,
        name: 'Bocaiúva',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3107406,
        name: 'Bom Despacho',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3107505,
        name: 'Bom Jardim de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3107604,
        name: 'Bom Jesus da Penha',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3107703,
        name: 'Bom Jesus do Amparo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3107802,
        name: 'Bom Jesus do Galho',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3107901,
        name: 'Bom Repouso',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3108008,
        name: 'Bom Sucesso',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3108107,
        name: 'Bonfim',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3108206,
        name: 'Bonfinópolis de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3108255,
        name: 'Bonito de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3108305,
        name: 'Borda da Mata',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3108404,
        name: 'Botelhos',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3108503,
        name: 'Botumirim',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3108552,
        name: 'Brasilândia de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3108602,
        name: 'Brasília de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3108701,
        name: 'Brás Pires',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3108800,
        name: 'Braúnas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3108909,
        name: 'Brazópolis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3109006,
        name: 'Brumadinho',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3109105,
        name: 'Bueno Brandão',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3109204,
        name: 'Buenópolis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3109253,
        name: 'Bugre',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3109303,
        name: 'Buritis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3109402,
        name: 'Buritizeiro',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3109451,
        name: 'Cabeceira Grande',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3109501,
        name: 'Cabo Verde',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3109600,
        name: 'Cachoeira da Prata',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3109709,
        name: 'Cachoeira de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3109808,
        name: 'Cachoeira Dourada',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3109907,
        name: 'Caetanópolis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3110004,
        name: 'Caeté',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3110103,
        name: 'Caiana',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3110202,
        name: 'Cajuri',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3110301,
        name: 'Caldas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3110400,
        name: 'Camacho',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3110509,
        name: 'Camanducaia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3110608,
        name: 'Cambuí',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3110707,
        name: 'Cambuquira',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3110806,
        name: 'Campanário',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3110905,
        name: 'Campanha',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3111002,
        name: 'Campestre',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3111101,
        name: 'Campina Verde',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3111150,
        name: 'Campo Azul',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3111200,
        name: 'Campo Belo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3111309,
        name: 'Campo do Meio',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3111408,
        name: 'Campo Florido',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3111507,
        name: 'Campos Altos',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3111606,
        name: 'Campos Gerais',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3111705,
        name: 'Canaã',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3111804,
        name: 'Canápolis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3111903,
        name: 'Cana Verde',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3112000,
        name: 'Candeias',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3112059,
        name: 'Cantagalo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3112109,
        name: 'Caparaó',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3112208,
        name: 'Capela Nova',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3112307,
        name: 'Capelinha',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3112406,
        name: 'Capetinga',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3112505,
        name: 'Capim Branco',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3112604,
        name: 'Capinópolis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3112653,
        name: 'Capitão Andrade',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3112703,
        name: 'Capitão Enéas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3112802,
        name: 'Capitólio',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3112901,
        name: 'Caputira',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3113008,
        name: 'Caraí',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3113107,
        name: 'Caranaíba',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3113206,
        name: 'Carandaí',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3113305,
        name: 'Carangola',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3113404,
        name: 'Caratinga',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3113503,
        name: 'Carbonita',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3113602,
        name: 'Careaçu',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3113701,
        name: 'Carlos Chagas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3113800,
        name: 'Carmésia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3113909,
        name: 'Carmo da Cachoeira',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3114006,
        name: 'Carmo da Mata',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3114105,
        name: 'Carmo de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3114204,
        name: 'Carmo do Cajuru',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3114303,
        name: 'Carmo do Paranaíba',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3114402,
        name: 'Carmo do Rio Claro',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3114501,
        name: 'Carmópolis de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3114550,
        name: 'Carneirinho',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3114600,
        name: 'Carrancas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3114709,
        name: 'Carvalhópolis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3114808,
        name: 'Carvalhos',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3114907,
        name: 'Casa Grande',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3115003,
        name: 'Cascalho Rico',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3115102,
        name: 'Cássia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3115201,
        name: 'Conceição da Barra de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3115300,
        name: 'Cataguases',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3115359,
        name: 'Catas Altas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3115409,
        name: 'Catas Altas da Noruega',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3115458,
        name: 'Catuji',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3115474,
        name: 'Catuti',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3115508,
        name: 'Caxambu',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3115607,
        name: 'Cedro do Abaeté',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3115706,
        name: 'Central de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3115805,
        name: 'Centralina',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3115904,
        name: 'Chácara',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3116001,
        name: 'Chalé',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3116100,
        name: 'Chapada do Norte',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3116159,
        name: 'Chapada Gaúcha',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3116209,
        name: 'Chiador',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3116308,
        name: 'Cipotânea',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3116407,
        name: 'Claraval',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3116506,
        name: 'Claro dos Poções',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3116605,
        name: 'Cláudio',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3116704,
        name: 'Coimbra',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3116803,
        name: 'Coluna',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3116902,
        name: 'Comendador Gomes',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3117009,
        name: 'Comercinho',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3117108,
        name: 'Conceição da Aparecida',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3117207,
        name: 'Conceição das Pedras',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3117306,
        name: 'Conceição das Alagoas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3117405,
        name: 'Conceição de Ipanema',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3117504,
        name: 'Conceição do Mato Dentro',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3117603,
        name: 'Conceição do Pará',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3117702,
        name: 'Conceição do Rio Verde',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3117801,
        name: 'Conceição dos Ouros',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3117836,
        name: 'Cônego Marinho',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3117876,
        name: 'Confins',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3117900,
        name: 'Congonhal',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3118007,
        name: 'Congonhas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3118106,
        name: 'Congonhas do Norte',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3118205,
        name: 'Conquista',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3118304,
        name: 'Conselheiro Lafaiete',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3118403,
        name: 'Conselheiro Pena',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3118502,
        name: 'Consolação',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3118601,
        name: 'Contagem',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3118700,
        name: 'Coqueiral',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3118809,
        name: 'Coração de Jesus',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3118908,
        name: 'Cordisburgo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3119005,
        name: 'Cordislândia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3119104,
        name: 'Corinto',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3119203,
        name: 'Coroaci',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3119302,
        name: 'Coromandel',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3119401,
        name: 'Coronel Fabriciano',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3119500,
        name: 'Coronel Murta',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3119609,
        name: 'Coronel Pacheco',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3119708,
        name: 'Coronel Xavier Chaves',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3119807,
        name: 'Córrego Danta',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3119906,
        name: 'Córrego do Bom Jesus',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3119955,
        name: 'Córrego Fundo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3120003,
        name: 'Córrego Novo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3120102,
        name: 'Couto de Magalhães de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3120151,
        name: 'Crisólita',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3120201,
        name: 'Cristais',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3120300,
        name: 'Cristália',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3120409,
        name: 'Cristiano Otoni',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3120508,
        name: 'Cristina',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3120607,
        name: 'Crucilândia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3120706,
        name: 'Cruzeiro da Fortaleza',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3120805,
        name: 'Cruzília',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3120839,
        name: 'Cuparaque',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3120870,
        name: 'Curral de Dentro',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3120904,
        name: 'Curvelo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3121001,
        name: 'Datas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3121100,
        name: 'Delfim Moreira',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3121209,
        name: 'Delfinópolis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3121258,
        name: 'Delta',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3121308,
        name: 'Descoberto',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3121407,
        name: 'Desterro de Entre Rios',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3121506,
        name: 'Desterro do Melo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3121605,
        name: 'Diamantina',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3121704,
        name: 'Diogo de Vasconcelos',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3121803,
        name: 'Dionísio',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3121902,
        name: 'Divinésia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3122009,
        name: 'Divino',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3122108,
        name: 'Divino das Laranjeiras',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3122207,
        name: 'Divinolândia de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3122306,
        name: 'Divinópolis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3122355,
        name: 'Divisa Alegre',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3122405,
        name: 'Divisa Nova',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3122454,
        name: 'Divisópolis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3122470,
        name: 'Dom Bosco',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3122504,
        name: 'Dom Cavati',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3122603,
        name: 'Dom Joaquim',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3122702,
        name: 'Dom Silvério',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3122801,
        name: 'Dom Viçoso',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3122900,
        name: 'Dona Euzébia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3123007,
        name: 'Dores de Campos',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3123106,
        name: 'Dores de Guanhães',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3123205,
        name: 'Dores do Indaiá',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3123304,
        name: 'Dores do Turvo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3123403,
        name: 'Doresópolis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3123502,
        name: 'Douradoquara',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3123528,
        name: 'Durandé',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3123601,
        name: 'Elói Mendes',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3123700,
        name: 'Engenheiro Caldas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3123809,
        name: 'Engenheiro Navarro',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3123858,
        name: 'Entre Folhas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3123908,
        name: 'Entre Rios de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3124005,
        name: 'Ervália',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3124104,
        name: 'Esmeraldas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3124203,
        name: 'Espera Feliz',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3124302,
        name: 'Espinosa',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3124401,
        name: 'Espírito Santo do Dourado',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3124500,
        name: 'Estiva',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3124609,
        name: 'Estrela Dalva',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3124708,
        name: 'Estrela do Indaiá',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3124807,
        name: 'Estrela do Sul',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3124906,
        name: 'Eugenópolis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3125002,
        name: 'Ewbank da Câmara',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3125101,
        name: 'Extrema',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3125200,
        name: 'Fama',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3125309,
        name: 'Faria Lemos',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3125408,
        name: 'Felício dos Santos',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3125507,
        name: 'São Gonçalo do Rio Preto',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3125606,
        name: 'Felisburgo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3125705,
        name: 'Felixlândia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3125804,
        name: 'Fernandes Tourinho',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3125903,
        name: 'Ferros',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3125952,
        name: 'Fervedouro',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3126000,
        name: 'Florestal',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3126109,
        name: 'Formiga',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3126208,
        name: 'Formoso',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3126307,
        name: 'Fortaleza de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3126406,
        name: 'Fortuna de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3126505,
        name: 'Francisco Badaró',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3126604,
        name: 'Francisco Dumont',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3126703,
        name: 'Francisco Sá',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3126752,
        name: 'Franciscópolis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3126802,
        name: 'Frei Gaspar',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3126901,
        name: 'Frei Inocêncio',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3126950,
        name: 'Frei Lagonegro',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3127008,
        name: 'Fronteira',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3127057,
        name: 'Fronteira dos Vales',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3127073,
        name: 'Fruta de Leite',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3127107,
        name: 'Frutal',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3127206,
        name: 'Funilândia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3127305,
        name: 'Galiléia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3127339,
        name: 'Gameleiras',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3127354,
        name: 'Glaucilândia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3127370,
        name: 'Goiabeira',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3127388,
        name: 'Goianá',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3127404,
        name: 'Gonçalves',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3127503,
        name: 'Gonzaga',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3127602,
        name: 'Gouveia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3127701,
        name: 'Governador Valadares',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3127800,
        name: 'Grão Mogol',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3127909,
        name: 'Grupiara',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3128006,
        name: 'Guanhães',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3128105,
        name: 'Guapé',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3128204,
        name: 'Guaraciaba',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3128253,
        name: 'Guaraciama',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3128303,
        name: 'Guaranésia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3128402,
        name: 'Guarani',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3128501,
        name: 'Guarará',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3128600,
        name: 'Guarda-Mor',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3128709,
        name: 'Guaxupé',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3128808,
        name: 'Guidoval',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3128907,
        name: 'Guimarânia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3129004,
        name: 'Guiricema',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3129103,
        name: 'Gurinhatã',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3129202,
        name: 'Heliodora',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3129301,
        name: 'Iapu',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3129400,
        name: 'Ibertioga',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3129509,
        name: 'Ibiá',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3129608,
        name: 'Ibiaí',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3129657,
        name: 'Ibiracatu',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3129707,
        name: 'Ibiraci',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3129806,
        name: 'Ibirité',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3129905,
        name: 'Ibitiúra de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3130002,
        name: 'Ibituruna',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3130051,
        name: 'Icaraí de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3130101,
        name: 'Igarapé',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3130200,
        name: 'Igaratinga',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3130309,
        name: 'Iguatama',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3130408,
        name: 'Ijaci',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3130507,
        name: 'Ilicínea',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3130556,
        name: 'Imbé de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3130606,
        name: 'Inconfidentes',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3130655,
        name: 'Indaiabira',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3130705,
        name: 'Indianópolis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3130804,
        name: 'Ingaí',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3130903,
        name: 'Inhapim',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3131000,
        name: 'Inhaúma',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3131109,
        name: 'Inimutaba',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3131158,
        name: 'Ipaba',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3131208,
        name: 'Ipanema',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3131307,
        name: 'Ipatinga',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3131406,
        name: 'Ipiaçu',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3131505,
        name: 'Ipuiúna',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3131604,
        name: 'Iraí de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3131703,
        name: 'Itabira',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3131802,
        name: 'Itabirinha',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3131901,
        name: 'Itabirito',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3132008,
        name: 'Itacambira',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3132107,
        name: 'Itacarambi',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3132206,
        name: 'Itaguara',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3132305,
        name: 'Itaipé',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3132404,
        name: 'Itajubá',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3132503,
        name: 'Itamarandiba',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3132602,
        name: 'Itamarati de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3132701,
        name: 'Itambacuri',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3132800,
        name: 'Itambé do Mato Dentro',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3132909,
        name: 'Itamogi',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3133006,
        name: 'Itamonte',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3133105,
        name: 'Itanhandu',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3133204,
        name: 'Itanhomi',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3133303,
        name: 'Itaobim',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3133402,
        name: 'Itapagipe',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3133501,
        name: 'Itapecerica',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3133600,
        name: 'Itapeva',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3133709,
        name: 'Itatiaiuçu',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3133758,
        name: 'Itaú de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3133808,
        name: 'Itaúna',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3133907,
        name: 'Itaverava',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3134004,
        name: 'Itinga',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3134103,
        name: 'Itueta',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3134202,
        name: 'Ituiutaba',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3134301,
        name: 'Itumirim',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3134400,
        name: 'Iturama',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3134509,
        name: 'Itutinga',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3134608,
        name: 'Jaboticatubas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3134707,
        name: 'Jacinto',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3134806,
        name: 'Jacuí',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3134905,
        name: 'Jacutinga',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3135001,
        name: 'Jaguaraçu',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3135050,
        name: 'Jaíba',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3135076,
        name: 'Jampruca',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3135100,
        name: 'Janaúba',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3135209,
        name: 'Januária',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3135308,
        name: 'Japaraíba',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3135357,
        name: 'Japonvar',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3135407,
        name: 'Jeceaba',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3135456,
        name: 'Jenipapo de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3135506,
        name: 'Jequeri',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3135605,
        name: 'Jequitaí',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3135704,
        name: 'Jequitibá',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3135803,
        name: 'Jequitinhonha',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3135902,
        name: 'Jesuânia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3136009,
        name: 'Joaíma',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3136108,
        name: 'Joanésia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3136207,
        name: 'João Monlevade',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3136306,
        name: 'João Pinheiro',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3136405,
        name: 'Joaquim Felício',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3136504,
        name: 'Jordânia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3136520,
        name: 'José Gonçalves de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3136553,
        name: 'José Raydan',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3136579,
        name: 'Josenópolis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3136603,
        name: 'Nova União',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3136652,
        name: 'Juatuba',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3136702,
        name: 'Juiz de Fora',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3136801,
        name: 'Juramento',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3136900,
        name: 'Juruaia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3136959,
        name: 'Juvenília',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3137007,
        name: 'Ladainha',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3137106,
        name: 'Lagamar',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3137205,
        name: 'Lagoa da Prata',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3137304,
        name: 'Lagoa dos Patos',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3137403,
        name: 'Lagoa Dourada',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3137502,
        name: 'Lagoa Formosa',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3137536,
        name: 'Lagoa Grande',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3137601,
        name: 'Lagoa Santa',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3137700,
        name: 'Lajinha',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3137809,
        name: 'Lambari',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3137908,
        name: 'Lamim',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3138005,
        name: 'Laranjal',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3138104,
        name: 'Lassance',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3138203,
        name: 'Lavras',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3138302,
        name: 'Leandro Ferreira',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3138351,
        name: 'Leme do Prado',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3138401,
        name: 'Leopoldina',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3138500,
        name: 'Liberdade',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3138609,
        name: 'Lima Duarte',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3138625,
        name: 'Limeira do Oeste',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3138658,
        name: 'Lontra',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3138674,
        name: 'Luisburgo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3138682,
        name: 'Luislândia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3138708,
        name: 'Luminárias',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3138807,
        name: 'Luz',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3138906,
        name: 'Machacalis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3139003,
        name: 'Machado',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3139102,
        name: 'Madre de Deus de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3139201,
        name: 'Malacacheta',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3139250,
        name: 'Mamonas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3139300,
        name: 'Manga',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3139409,
        name: 'Manhuaçu',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3139508,
        name: 'Manhumirim',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3139607,
        name: 'Mantena',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3139706,
        name: 'Maravilhas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3139805,
        name: 'Mar de Espanha',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3139904,
        name: 'Maria da Fé',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3140001,
        name: 'Mariana',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3140100,
        name: 'Marilac',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3140159,
        name: 'Mário Campos',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3140209,
        name: 'Maripá de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3140308,
        name: 'Marliéria',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3140407,
        name: 'Marmelópolis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3140506,
        name: 'Martinho Campos',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3140530,
        name: 'Martins Soares',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3140555,
        name: 'Mata Verde',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3140605,
        name: 'Materlândia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3140704,
        name: 'Mateus Leme',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3140803,
        name: 'Matias Barbosa',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3140852,
        name: 'Matias Cardoso',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3140902,
        name: 'Matipó',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3141009,
        name: 'Mato Verde',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3141108,
        name: 'Matozinhos',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3141207,
        name: 'Matutina',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3141306,
        name: 'Medeiros',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3141405,
        name: 'Medina',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3141504,
        name: 'Mendes Pimentel',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3141603,
        name: 'Mercês',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3141702,
        name: 'Mesquita',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3141801,
        name: 'Minas Novas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3141900,
        name: 'Minduri',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3142007,
        name: 'Mirabela',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3142106,
        name: 'Miradouro',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3142205,
        name: 'Miraí',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3142254,
        name: 'Miravânia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3142304,
        name: 'Moeda',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3142403,
        name: 'Moema',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3142502,
        name: 'Monjolos',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3142601,
        name: 'Monsenhor Paulo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3142700,
        name: 'Montalvânia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3142809,
        name: 'Monte Alegre de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3142908,
        name: 'Monte Azul',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3143005,
        name: 'Monte Belo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3143104,
        name: 'Monte Carmelo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3143153,
        name: 'Monte Formoso',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3143203,
        name: 'Monte Santo de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3143302,
        name: 'Montes Claros',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3143401,
        name: 'Monte Sião',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3143450,
        name: 'Montezuma',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3143500,
        name: 'Morada Nova de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3143609,
        name: 'Morro da Garça',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3143708,
        name: 'Morro do Pilar',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3143807,
        name: 'Munhoz',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3143906,
        name: 'Muriaé',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3144003,
        name: 'Mutum',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3144102,
        name: 'Muzambinho',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3144201,
        name: 'Nacip Raydan',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3144300,
        name: 'Nanuque',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3144359,
        name: 'Naque',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3144375,
        name: 'Natalândia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3144409,
        name: 'Natércia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3144508,
        name: 'Nazareno',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3144607,
        name: 'Nepomuceno',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3144656,
        name: 'Ninheira',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3144672,
        name: 'Nova Belém',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3144706,
        name: 'Nova Era',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3144805,
        name: 'Nova Lima',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3144904,
        name: 'Nova Módica',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3145000,
        name: 'Nova Ponte',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3145059,
        name: 'Nova Porteirinha',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3145109,
        name: 'Nova Resende',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3145208,
        name: 'Nova Serrana',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3145307,
        name: 'Novo Cruzeiro',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3145356,
        name: 'Novo Oriente de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3145372,
        name: 'Novorizonte',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3145406,
        name: 'Olaria',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3145455,
        name: "Olhos-d'Água",
        ibge_state_id: 31,
      },
      {
        ibge_id: 3145505,
        name: 'Olímpio Noronha',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3145604,
        name: 'Oliveira',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3145703,
        name: 'Oliveira Fortes',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3145802,
        name: 'Onça de Pitangui',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3145851,
        name: 'Oratórios',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3145877,
        name: 'Orizânia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3145901,
        name: 'Ouro Branco',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3146008,
        name: 'Ouro Fino',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3146107,
        name: 'Ouro Preto',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3146206,
        name: 'Ouro Verde de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3146255,
        name: 'Padre Carvalho',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3146305,
        name: 'Padre Paraíso',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3146404,
        name: 'Paineiras',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3146503,
        name: 'Pains',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3146552,
        name: 'Pai Pedro',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3146602,
        name: 'Paiva',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3146701,
        name: 'Palma',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3146750,
        name: 'Palmópolis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3146909,
        name: 'Papagaios',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3147006,
        name: 'Paracatu',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3147105,
        name: 'Pará de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3147204,
        name: 'Paraguaçu',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3147303,
        name: 'Paraisópolis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3147402,
        name: 'Paraopeba',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3147501,
        name: 'Passabém',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3147600,
        name: 'Passa Quatro',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3147709,
        name: 'Passa Tempo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3147808,
        name: 'Passa Vinte',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3147907,
        name: 'Passos',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3147956,
        name: 'Patis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3148004,
        name: 'Patos de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3148103,
        name: 'Patrocínio',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3148202,
        name: 'Patrocínio do Muriaé',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3148301,
        name: 'Paula Cândido',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3148400,
        name: 'Paulistas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3148509,
        name: 'Pavão',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3148608,
        name: 'Peçanha',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3148707,
        name: 'Pedra Azul',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3148756,
        name: 'Pedra Bonita',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3148806,
        name: 'Pedra do Anta',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3148905,
        name: 'Pedra do Indaiá',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3149002,
        name: 'Pedra Dourada',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3149101,
        name: 'Pedralva',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3149150,
        name: 'Pedras de Maria da Cruz',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3149200,
        name: 'Pedrinópolis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3149309,
        name: 'Pedro Leopoldo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3149408,
        name: 'Pedro Teixeira',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3149507,
        name: 'Pequeri',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3149606,
        name: 'Pequi',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3149705,
        name: 'Perdigão',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3149804,
        name: 'Perdizes',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3149903,
        name: 'Perdões',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3149952,
        name: 'Periquito',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3150000,
        name: 'Pescador',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3150109,
        name: 'Piau',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3150158,
        name: 'Piedade de Caratinga',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3150208,
        name: 'Piedade de Ponte Nova',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3150307,
        name: 'Piedade do Rio Grande',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3150406,
        name: 'Piedade dos Gerais',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3150505,
        name: 'Pimenta',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3150539,
        name: "Pingo-d'Água",
        ibge_state_id: 31,
      },
      {
        ibge_id: 3150570,
        name: 'Pintópolis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3150604,
        name: 'Piracema',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3150703,
        name: 'Pirajuba',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3150802,
        name: 'Piranga',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3150901,
        name: 'Piranguçu',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3151008,
        name: 'Piranguinho',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3151107,
        name: 'Pirapetinga',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3151206,
        name: 'Pirapora',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3151305,
        name: 'Piraúba',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3151404,
        name: 'Pitangui',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3151503,
        name: 'Piumhi',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3151602,
        name: 'Planura',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3151701,
        name: 'Poço Fundo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3151800,
        name: 'Poços de Caldas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3151909,
        name: 'Pocrane',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3152006,
        name: 'Pompéu',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3152105,
        name: 'Ponte Nova',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3152131,
        name: 'Ponto Chique',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3152170,
        name: 'Ponto dos Volantes',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3152204,
        name: 'Porteirinha',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3152303,
        name: 'Porto Firme',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3152402,
        name: 'Poté',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3152501,
        name: 'Pouso Alegre',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3152600,
        name: 'Pouso Alto',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3152709,
        name: 'Prados',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3152808,
        name: 'Prata',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3152907,
        name: 'Pratápolis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3153004,
        name: 'Pratinha',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3153103,
        name: 'Presidente Bernardes',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3153202,
        name: 'Presidente Juscelino',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3153301,
        name: 'Presidente Kubitschek',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3153400,
        name: 'Presidente Olegário',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3153509,
        name: 'Alto Jequitibá',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3153608,
        name: 'Prudente de Morais',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3153707,
        name: 'Quartel Geral',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3153806,
        name: 'Queluzito',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3153905,
        name: 'Raposos',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3154002,
        name: 'Raul Soares',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3154101,
        name: 'Recreio',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3154150,
        name: 'Reduto',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3154200,
        name: 'Resende Costa',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3154309,
        name: 'Resplendor',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3154408,
        name: 'Ressaquinha',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3154457,
        name: 'Riachinho',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3154507,
        name: 'Riacho dos Machados',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3154606,
        name: 'Ribeirão das Neves',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3154705,
        name: 'Ribeirão Vermelho',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3154804,
        name: 'Rio Acima',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3154903,
        name: 'Rio Casca',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3155009,
        name: 'Rio Doce',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3155108,
        name: 'Rio do Prado',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3155207,
        name: 'Rio Espera',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3155306,
        name: 'Rio Manso',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3155405,
        name: 'Rio Novo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3155504,
        name: 'Rio Paranaíba',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3155603,
        name: 'Rio Pardo de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3155702,
        name: 'Rio Piracicaba',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3155801,
        name: 'Rio Pomba',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3155900,
        name: 'Rio Preto',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3156007,
        name: 'Rio Vermelho',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3156106,
        name: 'Ritápolis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3156205,
        name: 'Rochedo de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3156304,
        name: 'Rodeiro',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3156403,
        name: 'Romaria',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3156452,
        name: 'Rosário da Limeira',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3156502,
        name: 'Rubelita',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3156601,
        name: 'Rubim',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3156700,
        name: 'Sabará',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3156809,
        name: 'Sabinópolis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3156908,
        name: 'Sacramento',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3157005,
        name: 'Salinas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3157104,
        name: 'Salto da Divisa',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3157203,
        name: 'Santa Bárbara',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3157252,
        name: 'Santa Bárbara do Leste',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3157278,
        name: 'Santa Bárbara do Monte Verde',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3157302,
        name: 'Santa Bárbara do Tugúrio',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3157336,
        name: 'Santa Cruz de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3157377,
        name: 'Santa Cruz de Salinas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3157401,
        name: 'Santa Cruz do Escalvado',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3157500,
        name: 'Santa Efigênia de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3157609,
        name: 'Santa Fé de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3157658,
        name: 'Santa Helena de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3157708,
        name: 'Santa Juliana',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3157807,
        name: 'Santa Luzia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3157906,
        name: 'Santa Margarida',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3158003,
        name: 'Santa Maria de Itabira',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3158102,
        name: 'Santa Maria do Salto',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3158201,
        name: 'Santa Maria do Suaçuí',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3158300,
        name: 'Santana da Vargem',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3158409,
        name: 'Santana de Cataguases',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3158508,
        name: 'Santana de Pirapama',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3158607,
        name: 'Santana do Deserto',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3158706,
        name: 'Santana do Garambéu',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3158805,
        name: 'Santana do Jacaré',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3158904,
        name: 'Santana do Manhuaçu',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3158953,
        name: 'Santana do Paraíso',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3159001,
        name: 'Santana do Riacho',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3159100,
        name: 'Santana dos Montes',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3159209,
        name: 'Santa Rita de Caldas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3159308,
        name: 'Santa Rita de Jacutinga',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3159357,
        name: 'Santa Rita de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3159407,
        name: 'Santa Rita de Ibitipoca',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3159506,
        name: 'Santa Rita do Itueto',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3159605,
        name: 'Santa Rita do Sapucaí',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3159704,
        name: 'Santa Rosa da Serra',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3159803,
        name: 'Santa Vitória',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3159902,
        name: 'Santo Antônio do Amparo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3160009,
        name: 'Santo Antônio do Aventureiro',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3160108,
        name: 'Santo Antônio do Grama',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3160207,
        name: 'Santo Antônio do Itambé',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3160306,
        name: 'Santo Antônio do Jacinto',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3160405,
        name: 'Santo Antônio do Monte',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3160454,
        name: 'Santo Antônio do Retiro',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3160504,
        name: 'Santo Antônio do Rio Abaixo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3160603,
        name: 'Santo Hipólito',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3160702,
        name: 'Santos Dumont',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3160801,
        name: 'São Bento Abade',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3160900,
        name: 'São Brás do Suaçuí',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3160959,
        name: 'São Domingos das Dores',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3161007,
        name: 'São Domingos do Prata',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3161056,
        name: 'São Félix de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3161106,
        name: 'São Francisco',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3161205,
        name: 'São Francisco de Paula',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3161304,
        name: 'São Francisco de Sales',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3161403,
        name: 'São Francisco do Glória',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3161502,
        name: 'São Geraldo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3161601,
        name: 'São Geraldo da Piedade',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3161650,
        name: 'São Geraldo do Baixio',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3161700,
        name: 'São Gonçalo do Abaeté',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3161809,
        name: 'São Gonçalo do Pará',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3161908,
        name: 'São Gonçalo do Rio Abaixo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3162005,
        name: 'São Gonçalo do Sapucaí',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3162104,
        name: 'São Gotardo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3162203,
        name: 'São João Batista do Glória',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3162252,
        name: 'São João da Lagoa',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3162302,
        name: 'São João da Mata',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3162401,
        name: 'São João da Ponte',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3162450,
        name: 'São João das Missões',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3162500,
        name: 'São João del Rei',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3162559,
        name: 'São João do Manhuaçu',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3162575,
        name: 'São João do Manteninha',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3162609,
        name: 'São João do Oriente',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3162658,
        name: 'São João do Pacuí',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3162708,
        name: 'São João do Paraíso',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3162807,
        name: 'São João Evangelista',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3162906,
        name: 'São João Nepomuceno',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3162922,
        name: 'São Joaquim de Bicas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3162948,
        name: 'São José da Barra',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3162955,
        name: 'São José da Lapa',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3163003,
        name: 'São José da Safira',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3163102,
        name: 'São José da Varginha',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3163201,
        name: 'São José do Alegre',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3163300,
        name: 'São José do Divino',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3163409,
        name: 'São José do Goiabal',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3163508,
        name: 'São José do Jacuri',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3163607,
        name: 'São José do Mantimento',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3163706,
        name: 'São Lourenço',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3163805,
        name: 'São Miguel do Anta',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3163904,
        name: 'São Pedro da União',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3164001,
        name: 'São Pedro dos Ferros',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3164100,
        name: 'São Pedro do Suaçuí',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3164209,
        name: 'São Romão',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3164308,
        name: 'São Roque de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3164407,
        name: 'São Sebastião da Bela Vista',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3164431,
        name: 'São Sebastião da Vargem Alegre',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3164472,
        name: 'São Sebastião do Anta',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3164506,
        name: 'São Sebastião do Maranhão',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3164605,
        name: 'São Sebastião do Oeste',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3164704,
        name: 'São Sebastião do Paraíso',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3164803,
        name: 'São Sebastião do Rio Preto',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3164902,
        name: 'São Sebastião do Rio Verde',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3165008,
        name: 'São Tiago',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3165107,
        name: 'São Tomás de Aquino',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3165206,
        name: 'São Tomé das Letras',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3165305,
        name: 'São Vicente de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3165404,
        name: 'Sapucaí-Mirim',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3165503,
        name: 'Sardoá',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3165537,
        name: 'Sarzedo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3165552,
        name: 'Setubinha',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3165560,
        name: 'Sem-Peixe',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3165578,
        name: 'Senador Amaral',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3165602,
        name: 'Senador Cortes',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3165701,
        name: 'Senador Firmino',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3165800,
        name: 'Senador José Bento',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3165909,
        name: 'Senador Modestino Gonçalves',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3166006,
        name: 'Senhora de Oliveira',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3166105,
        name: 'Senhora do Porto',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3166204,
        name: 'Senhora dos Remédios',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3166303,
        name: 'Sericita',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3166402,
        name: 'Seritinga',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3166501,
        name: 'Serra Azul de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3166600,
        name: 'Serra da Saudade',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3166709,
        name: 'Serra dos Aimorés',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3166808,
        name: 'Serra do Salitre',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3166907,
        name: 'Serrania',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3166956,
        name: 'Serranópolis de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3167004,
        name: 'Serranos',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3167103,
        name: 'Serro',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3167202,
        name: 'Sete Lagoas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3167301,
        name: 'Silveirânia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3167400,
        name: 'Silvianópolis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3167509,
        name: 'Simão Pereira',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3167608,
        name: 'Simonésia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3167707,
        name: 'Sobrália',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3167806,
        name: 'Soledade de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3167905,
        name: 'Tabuleiro',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3168002,
        name: 'Taiobeiras',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3168051,
        name: 'Taparuba',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3168101,
        name: 'Tapira',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3168200,
        name: 'Tapiraí',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3168309,
        name: 'Taquaraçu de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3168408,
        name: 'Tarumirim',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3168507,
        name: 'Teixeiras',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3168606,
        name: 'Teófilo Otoni',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3168705,
        name: 'Timóteo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3168804,
        name: 'Tiradentes',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3168903,
        name: 'Tiros',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3169000,
        name: 'Tocantins',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3169059,
        name: 'Tocos do Moji',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3169109,
        name: 'Toledo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3169208,
        name: 'Tombos',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3169307,
        name: 'Três Corações',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3169356,
        name: 'Três Marias',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3169406,
        name: 'Três Pontas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3169505,
        name: 'Tumiritinga',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3169604,
        name: 'Tupaciguara',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3169703,
        name: 'Turmalina',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3169802,
        name: 'Turvolândia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3169901,
        name: 'Ubá',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3170008,
        name: 'Ubaí',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3170057,
        name: 'Ubaporanga',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3170107,
        name: 'Uberaba',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3170206,
        name: 'Uberlândia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3170305,
        name: 'Umburatiba',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3170404,
        name: 'Unaí',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3170438,
        name: 'União de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3170479,
        name: 'Uruana de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3170503,
        name: 'Urucânia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3170529,
        name: 'Urucuia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3170578,
        name: 'Vargem Alegre',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3170602,
        name: 'Vargem Bonita',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3170651,
        name: 'Vargem Grande do Rio Pardo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3170701,
        name: 'Varginha',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3170750,
        name: 'Varjão de Minas',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3170800,
        name: 'Várzea da Palma',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3170909,
        name: 'Varzelândia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3171006,
        name: 'Vazante',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3171030,
        name: 'Verdelândia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3171071,
        name: 'Veredinha',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3171105,
        name: 'Veríssimo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3171154,
        name: 'Vermelho Novo',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3171204,
        name: 'Vespasiano',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3171303,
        name: 'Viçosa',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3171402,
        name: 'Vieiras',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3171501,
        name: 'Mathias Lobato',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3171600,
        name: 'Virgem da Lapa',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3171709,
        name: 'Virgínia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3171808,
        name: 'Virginópolis',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3171907,
        name: 'Virgolândia',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3172004,
        name: 'Visconde do Rio Branco',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3172103,
        name: 'Volta Grande',
        ibge_state_id: 31,
      },
      {
        ibge_id: 3172202,
        name: 'Wenceslau Braz',
        ibge_state_id: 31,
      },
    ],
  });

  await prisma.ibgeCity.createMany({
    data: [
      {
        ibge_id: 3200102,
        name: 'Afonso Cláudio',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3200136,
        name: 'Águia Branca',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3200169,
        name: 'Água Doce do Norte',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3200201,
        name: 'Alegre',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3200300,
        name: 'Alfredo Chaves',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3200359,
        name: 'Alto Rio Novo',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3200409,
        name: 'Anchieta',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3200508,
        name: 'Apiacá',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3200607,
        name: 'Aracruz',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3200706,
        name: 'Atílio Vivácqua',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3200805,
        name: 'Baixo Guandu',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3200904,
        name: 'Barra de São Francisco',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3201001,
        name: 'Boa Esperança',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3201100,
        name: 'Bom Jesus do Norte',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3201159,
        name: 'Brejetuba',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3201209,
        name: 'Cachoeiro de Itapemirim',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3201308,
        name: 'Cariacica',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3201407,
        name: 'Castelo',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3201506,
        name: 'Colatina',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3201605,
        name: 'Conceição da Barra',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3201704,
        name: 'Conceição do Castelo',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3201803,
        name: 'Divino de São Lourenço',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3201902,
        name: 'Domingos Martins',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3202009,
        name: 'Dores do Rio Preto',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3202108,
        name: 'Ecoporanga',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3202207,
        name: 'Fundão',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3202256,
        name: 'Governador Lindenberg',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3202306,
        name: 'Guaçuí',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3202405,
        name: 'Guarapari',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3202454,
        name: 'Ibatiba',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3202504,
        name: 'Ibiraçu',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3202553,
        name: 'Ibitirama',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3202603,
        name: 'Iconha',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3202652,
        name: 'Irupi',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3202702,
        name: 'Itaguaçu',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3202801,
        name: 'Itapemirim',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3202900,
        name: 'Itarana',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3203007,
        name: 'Iúna',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3203056,
        name: 'Jaguaré',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3203106,
        name: 'Jerônimo Monteiro',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3203130,
        name: 'João Neiva',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3203163,
        name: 'Laranja da Terra',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3203205,
        name: 'Linhares',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3203304,
        name: 'Mantenópolis',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3203320,
        name: 'Marataízes',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3203346,
        name: 'Marechal Floriano',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3203353,
        name: 'Marilândia',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3203403,
        name: 'Mimoso do Sul',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3203502,
        name: 'Montanha',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3203601,
        name: 'Mucurici',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3203700,
        name: 'Muniz Freire',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3203809,
        name: 'Muqui',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3203908,
        name: 'Nova Venécia',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3204005,
        name: 'Pancas',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3204054,
        name: 'Pedro Canário',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3204104,
        name: 'Pinheiros',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3204203,
        name: 'Piúma',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3204252,
        name: 'Ponto Belo',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3204302,
        name: 'Presidente Kennedy',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3204351,
        name: 'Rio Bananal',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3204401,
        name: 'Rio Novo do Sul',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3204500,
        name: 'Santa Leopoldina',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3204559,
        name: 'Santa Maria de Jetibá',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3204609,
        name: 'Santa Teresa',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3204658,
        name: 'São Domingos do Norte',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3204708,
        name: 'São Gabriel da Palha',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3204807,
        name: 'São José do Calçado',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3204906,
        name: 'São Mateus',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3204955,
        name: 'São Roque do Canaã',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3205002,
        name: 'Serra',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3205010,
        name: 'Sooretama',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3205036,
        name: 'Vargem Alta',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3205069,
        name: 'Venda Nova do Imigrante',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3205101,
        name: 'Viana',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3205150,
        name: 'Vila Pavão',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3205176,
        name: 'Vila Valério',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3205200,
        name: 'Vila Velha',
        ibge_state_id: 32,
      },
      {
        ibge_id: 3205309,
        name: 'Vitória',
        ibge_state_id: 32,
      },
    ],
  });

  await prisma.ibgeCity.createMany({
    data: [
      {
        ibge_id: 3300100,
        name: 'Angra dos Reis',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3300159,
        name: 'Aperibé',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3300209,
        name: 'Araruama',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3300225,
        name: 'Areal',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3300233,
        name: 'Armação dos Búzios',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3300258,
        name: 'Arraial do Cabo',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3300308,
        name: 'Barra do Piraí',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3300407,
        name: 'Barra Mansa',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3300456,
        name: 'Belford Roxo',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3300506,
        name: 'Bom Jardim',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3300605,
        name: 'Bom Jesus do Itabapoana',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3300704,
        name: 'Cabo Frio',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3300803,
        name: 'Cachoeiras de Macacu',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3300902,
        name: 'Cambuci',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3300936,
        name: 'Carapebus',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3300951,
        name: 'Comendador Levy Gasparian',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3301009,
        name: 'Campos dos Goytacazes',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3301108,
        name: 'Cantagalo',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3301157,
        name: 'Cardoso Moreira',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3301207,
        name: 'Carmo',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3301306,
        name: 'Casimiro de Abreu',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3301405,
        name: 'Conceição de Macabu',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3301504,
        name: 'Cordeiro',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3301603,
        name: 'Duas Barras',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3301702,
        name: 'Duque de Caxias',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3301801,
        name: 'Engenheiro Paulo de Frontin',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3301850,
        name: 'Guapimirim',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3301876,
        name: 'Iguaba Grande',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3301900,
        name: 'Itaboraí',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3302007,
        name: 'Itaguaí',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3302056,
        name: 'Italva',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3302106,
        name: 'Itaocara',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3302205,
        name: 'Itaperuna',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3302254,
        name: 'Itatiaia',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3302270,
        name: 'Japeri',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3302304,
        name: 'Laje do Muriaé',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3302403,
        name: 'Macaé',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3302452,
        name: 'Macuco',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3302502,
        name: 'Magé',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3302601,
        name: 'Mangaratiba',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3302700,
        name: 'Maricá',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3302809,
        name: 'Mendes',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3302858,
        name: 'Mesquita',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3302908,
        name: 'Miguel Pereira',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3303005,
        name: 'Miracema',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3303104,
        name: 'Natividade',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3303203,
        name: 'Nilópolis',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3303302,
        name: 'Niterói',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3303401,
        name: 'Nova Friburgo',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3303500,
        name: 'Nova Iguaçu',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3303609,
        name: 'Paracambi',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3303708,
        name: 'Paraíba do Sul',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3303807,
        name: 'Paraty',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3303856,
        name: 'Paty do Alferes',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3303906,
        name: 'Petrópolis',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3303955,
        name: 'Pinheiral',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3304003,
        name: 'Piraí',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3304102,
        name: 'Porciúncula',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3304110,
        name: 'Porto Real',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3304128,
        name: 'Quatis',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3304144,
        name: 'Queimados',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3304151,
        name: 'Quissamã',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3304201,
        name: 'Resende',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3304300,
        name: 'Rio Bonito',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3304409,
        name: 'Rio Claro',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3304508,
        name: 'Rio das Flores',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3304524,
        name: 'Rio das Ostras',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3304557,
        name: 'Rio de Janeiro',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3304607,
        name: 'Santa Maria Madalena',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3304706,
        name: 'Santo Antônio de Pádua',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3304755,
        name: 'São Francisco de Itabapoana',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3304805,
        name: 'São Fidélis',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3304904,
        name: 'São Gonçalo',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3305000,
        name: 'São João da Barra',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3305109,
        name: 'São João de Meriti',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3305133,
        name: 'São José de Ubá',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3305158,
        name: 'São José do Vale do Rio Preto',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3305208,
        name: 'São Pedro da Aldeia',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3305307,
        name: 'São Sebastião do Alto',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3305406,
        name: 'Sapucaia',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3305505,
        name: 'Saquarema',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3305554,
        name: 'Seropédica',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3305604,
        name: 'Silva Jardim',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3305703,
        name: 'Sumidouro',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3305752,
        name: 'Tanguá',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3305802,
        name: 'Teresópolis',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3305901,
        name: 'Trajano de Moraes',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3306008,
        name: 'Três Rios',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3306107,
        name: 'Valença',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3306156,
        name: 'Varre-Sai',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3306206,
        name: 'Vassouras',
        ibge_state_id: 33,
      },
      {
        ibge_id: 3306305,
        name: 'Volta Redonda',
        ibge_state_id: 33,
      },
    ],
  });

  await prisma.ibgeCity.createMany({
    data: [
      {
        ibge_id: 3500105,
        name: 'Adamantina',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3500204,
        name: 'Adolfo',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3500303,
        name: 'Aguaí',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3500402,
        name: 'Águas da Prata',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3500501,
        name: 'Águas de Lindóia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3500550,
        name: 'Águas de Santa Bárbara',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3500600,
        name: 'Águas de São Pedro',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3500709,
        name: 'Agudos',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3500758,
        name: 'Alambari',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3500808,
        name: 'Alfredo Marcondes',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3500907,
        name: 'Altair',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3501004,
        name: 'Altinópolis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3501103,
        name: 'Alto Alegre',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3501152,
        name: 'Alumínio',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3501202,
        name: 'Álvares Florence',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3501301,
        name: 'Álvares Machado',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3501400,
        name: 'Álvaro de Carvalho',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3501509,
        name: 'Alvinlândia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3501608,
        name: 'Americana',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3501707,
        name: 'Américo Brasiliense',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3501806,
        name: 'Américo de Campos',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3501905,
        name: 'Amparo',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3502002,
        name: 'Analândia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3502101,
        name: 'Andradina',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3502200,
        name: 'Angatuba',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3502309,
        name: 'Anhembi',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3502408,
        name: 'Anhumas',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3502507,
        name: 'Aparecida',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3502606,
        name: "Aparecida d'Oeste",
        ibge_state_id: 35,
      },
      {
        ibge_id: 3502705,
        name: 'Apiaí',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3502754,
        name: 'Araçariguama',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3502804,
        name: 'Araçatuba',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3502903,
        name: 'Araçoiaba da Serra',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3503000,
        name: 'Aramina',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3503109,
        name: 'Arandu',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3503158,
        name: 'Arapeí',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3503208,
        name: 'Araraquara',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3503307,
        name: 'Araras',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3503356,
        name: 'Arco-Íris',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3503406,
        name: 'Arealva',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3503505,
        name: 'Areias',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3503604,
        name: 'Areiópolis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3503703,
        name: 'Ariranha',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3503802,
        name: 'Artur Nogueira',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3503901,
        name: 'Arujá',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3503950,
        name: 'Aspásia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3504008,
        name: 'Assis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3504107,
        name: 'Atibaia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3504206,
        name: 'Auriflama',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3504305,
        name: 'Avaí',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3504404,
        name: 'Avanhandava',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3504503,
        name: 'Avaré',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3504602,
        name: 'Bady Bassitt',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3504701,
        name: 'Balbinos',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3504800,
        name: 'Bálsamo',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3504909,
        name: 'Bananal',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3505005,
        name: 'Barão de Antonina',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3505104,
        name: 'Barbosa',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3505203,
        name: 'Bariri',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3505302,
        name: 'Barra Bonita',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3505351,
        name: 'Barra do Chapéu',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3505401,
        name: 'Barra do Turvo',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3505500,
        name: 'Barretos',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3505609,
        name: 'Barrinha',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3505708,
        name: 'Barueri',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3505807,
        name: 'Bastos',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3505906,
        name: 'Batatais',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3506003,
        name: 'Bauru',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3506102,
        name: 'Bebedouro',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3506201,
        name: 'Bento de Abreu',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3506300,
        name: 'Bernardino de Campos',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3506359,
        name: 'Bertioga',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3506409,
        name: 'Bilac',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3506508,
        name: 'Birigui',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3506607,
        name: 'Biritiba Mirim',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3506706,
        name: 'Boa Esperança do Sul',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3506805,
        name: 'Bocaina',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3506904,
        name: 'Bofete',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3507001,
        name: 'Boituva',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3507100,
        name: 'Bom Jesus dos Perdões',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3507159,
        name: 'Bom Sucesso de Itararé',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3507209,
        name: 'Borá',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3507308,
        name: 'Boracéia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3507407,
        name: 'Borborema',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3507456,
        name: 'Borebi',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3507506,
        name: 'Botucatu',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3507605,
        name: 'Bragança Paulista',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3507704,
        name: 'Braúna',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3507753,
        name: 'Brejo Alegre',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3507803,
        name: 'Brodowski',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3507902,
        name: 'Brotas',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3508009,
        name: 'Buri',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3508108,
        name: 'Buritama',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3508207,
        name: 'Buritizal',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3508306,
        name: 'Cabrália Paulista',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3508405,
        name: 'Cabreúva',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3508504,
        name: 'Caçapava',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3508603,
        name: 'Cachoeira Paulista',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3508702,
        name: 'Caconde',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3508801,
        name: 'Cafelândia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3508900,
        name: 'Caiabu',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3509007,
        name: 'Caieiras',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3509106,
        name: 'Caiuá',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3509205,
        name: 'Cajamar',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3509254,
        name: 'Cajati',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3509304,
        name: 'Cajobi',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3509403,
        name: 'Cajuru',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3509452,
        name: 'Campina do Monte Alegre',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3509502,
        name: 'Campinas',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3509601,
        name: 'Campo Limpo Paulista',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3509700,
        name: 'Campos do Jordão',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3509809,
        name: 'Campos Novos Paulista',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3509908,
        name: 'Cananéia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3509957,
        name: 'Canas',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3510005,
        name: 'Cândido Mota',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3510104,
        name: 'Cândido Rodrigues',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3510153,
        name: 'Canitar',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3510203,
        name: 'Capão Bonito',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3510302,
        name: 'Capela do Alto',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3510401,
        name: 'Capivari',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3510500,
        name: 'Caraguatatuba',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3510609,
        name: 'Carapicuíba',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3510708,
        name: 'Cardoso',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3510807,
        name: 'Casa Branca',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3510906,
        name: 'Cássia dos Coqueiros',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3511003,
        name: 'Castilho',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3511102,
        name: 'Catanduva',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3511201,
        name: 'Catiguá',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3511300,
        name: 'Cedral',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3511409,
        name: 'Cerqueira César',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3511508,
        name: 'Cerquilho',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3511607,
        name: 'Cesário Lange',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3511706,
        name: 'Charqueada',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3511904,
        name: 'Clementina',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3512001,
        name: 'Colina',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3512100,
        name: 'Colômbia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3512209,
        name: 'Conchal',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3512308,
        name: 'Conchas',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3512407,
        name: 'Cordeirópolis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3512506,
        name: 'Coroados',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3512605,
        name: 'Coronel Macedo',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3512704,
        name: 'Corumbataí',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3512803,
        name: 'Cosmópolis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3512902,
        name: 'Cosmorama',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3513009,
        name: 'Cotia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3513108,
        name: 'Cravinhos',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3513207,
        name: 'Cristais Paulista',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3513306,
        name: 'Cruzália',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3513405,
        name: 'Cruzeiro',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3513504,
        name: 'Cubatão',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3513603,
        name: 'Cunha',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3513702,
        name: 'Descalvado',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3513801,
        name: 'Diadema',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3513850,
        name: 'Dirce Reis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3513900,
        name: 'Divinolândia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3514007,
        name: 'Dobrada',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3514106,
        name: 'Dois Córregos',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3514205,
        name: 'Dolcinópolis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3514304,
        name: 'Dourado',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3514403,
        name: 'Dracena',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3514502,
        name: 'Duartina',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3514601,
        name: 'Dumont',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3514700,
        name: 'Echaporã',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3514809,
        name: 'Eldorado',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3514908,
        name: 'Elias Fausto',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3514924,
        name: 'Elisiário',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3514957,
        name: 'Embaúba',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3515004,
        name: 'Embu das Artes',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3515103,
        name: 'Embu-Guaçu',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3515129,
        name: 'Emilianópolis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3515152,
        name: 'Engenheiro Coelho',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3515186,
        name: 'Espírito Santo do Pinhal',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3515194,
        name: 'Espírito Santo do Turvo',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3515202,
        name: "Estrela d'Oeste",
        ibge_state_id: 35,
      },
      {
        ibge_id: 3515301,
        name: 'Estrela do Norte',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3515350,
        name: 'Euclides da Cunha Paulista',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3515400,
        name: 'Fartura',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3515509,
        name: 'Fernandópolis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3515608,
        name: 'Fernando Prestes',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3515657,
        name: 'Fernão',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3515707,
        name: 'Ferraz de Vasconcelos',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3515806,
        name: 'Flora Rica',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3515905,
        name: 'Floreal',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3516002,
        name: 'Flórida Paulista',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3516101,
        name: 'Florínea',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3516200,
        name: 'Franca',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3516309,
        name: 'Francisco Morato',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3516408,
        name: 'Franco da Rocha',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3516507,
        name: 'Gabriel Monteiro',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3516606,
        name: 'Gália',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3516705,
        name: 'Garça',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3516804,
        name: 'Gastão Vidigal',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3516853,
        name: 'Gavião Peixoto',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3516903,
        name: 'General Salgado',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3517000,
        name: 'Getulina',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3517109,
        name: 'Glicério',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3517208,
        name: 'Guaiçara',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3517307,
        name: 'Guaimbê',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3517406,
        name: 'Guaíra',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3517505,
        name: 'Guapiaçu',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3517604,
        name: 'Guapiara',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3517703,
        name: 'Guará',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3517802,
        name: 'Guaraçaí',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3517901,
        name: 'Guaraci',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3518008,
        name: "Guarani d'Oeste",
        ibge_state_id: 35,
      },
      {
        ibge_id: 3518107,
        name: 'Guarantã',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3518206,
        name: 'Guararapes',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3518305,
        name: 'Guararema',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3518404,
        name: 'Guaratinguetá',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3518503,
        name: 'Guareí',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3518602,
        name: 'Guariba',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3518701,
        name: 'Guarujá',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3518800,
        name: 'Guarulhos',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3518859,
        name: 'Guatapará',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3518909,
        name: 'Guzolândia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3519006,
        name: 'Herculândia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3519055,
        name: 'Holambra',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3519071,
        name: 'Hortolândia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3519105,
        name: 'Iacanga',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3519204,
        name: 'Iacri',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3519253,
        name: 'Iaras',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3519303,
        name: 'Ibaté',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3519402,
        name: 'Ibirá',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3519501,
        name: 'Ibirarema',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3519600,
        name: 'Ibitinga',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3519709,
        name: 'Ibiúna',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3519808,
        name: 'Icém',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3519907,
        name: 'Iepê',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3520004,
        name: 'Igaraçu do Tietê',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3520103,
        name: 'Igarapava',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3520202,
        name: 'Igaratá',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3520301,
        name: 'Iguape',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3520400,
        name: 'Ilhabela',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3520426,
        name: 'Ilha Comprida',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3520442,
        name: 'Ilha Solteira',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3520509,
        name: 'Indaiatuba',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3520608,
        name: 'Indiana',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3520707,
        name: 'Indiaporã',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3520806,
        name: 'Inúbia Paulista',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3520905,
        name: 'Ipaussu',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3521002,
        name: 'Iperó',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3521101,
        name: 'Ipeúna',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3521150,
        name: 'Ipiguá',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3521200,
        name: 'Iporanga',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3521309,
        name: 'Ipuã',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3521408,
        name: 'Iracemápolis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3521507,
        name: 'Irapuã',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3521606,
        name: 'Irapuru',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3521705,
        name: 'Itaberá',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3521804,
        name: 'Itaí',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3521903,
        name: 'Itajobi',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3522000,
        name: 'Itaju',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3522109,
        name: 'Itanhaém',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3522158,
        name: 'Itaoca',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3522208,
        name: 'Itapecerica da Serra',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3522307,
        name: 'Itapetininga',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3522406,
        name: 'Itapeva',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3522505,
        name: 'Itapevi',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3522604,
        name: 'Itapira',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3522653,
        name: 'Itapirapuã Paulista',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3522703,
        name: 'Itápolis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3522802,
        name: 'Itaporanga',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3522901,
        name: 'Itapuí',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3523008,
        name: 'Itapura',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3523107,
        name: 'Itaquaquecetuba',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3523206,
        name: 'Itararé',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3523305,
        name: 'Itariri',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3523404,
        name: 'Itatiba',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3523503,
        name: 'Itatinga',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3523602,
        name: 'Itirapina',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3523701,
        name: 'Itirapuã',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3523800,
        name: 'Itobi',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3523909,
        name: 'Itu',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3524006,
        name: 'Itupeva',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3524105,
        name: 'Ituverava',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3524204,
        name: 'Jaborandi',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3524303,
        name: 'Jaboticabal',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3524402,
        name: 'Jacareí',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3524501,
        name: 'Jaci',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3524600,
        name: 'Jacupiranga',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3524709,
        name: 'Jaguariúna',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3524808,
        name: 'Jales',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3524907,
        name: 'Jambeiro',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3525003,
        name: 'Jandira',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3525102,
        name: 'Jardinópolis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3525201,
        name: 'Jarinu',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3525300,
        name: 'Jaú',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3525409,
        name: 'Jeriquara',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3525508,
        name: 'Joanópolis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3525607,
        name: 'João Ramalho',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3525706,
        name: 'José Bonifácio',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3525805,
        name: 'Júlio Mesquita',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3525854,
        name: 'Jumirim',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3525904,
        name: 'Jundiaí',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3526001,
        name: 'Junqueirópolis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3526100,
        name: 'Juquiá',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3526209,
        name: 'Juquitiba',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3526308,
        name: 'Lagoinha',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3526407,
        name: 'Laranjal Paulista',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3526506,
        name: 'Lavínia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3526605,
        name: 'Lavrinhas',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3526704,
        name: 'Leme',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3526803,
        name: 'Lençóis Paulista',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3526902,
        name: 'Limeira',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3527009,
        name: 'Lindóia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3527108,
        name: 'Lins',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3527207,
        name: 'Lorena',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3527256,
        name: 'Lourdes',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3527306,
        name: 'Louveira',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3527405,
        name: 'Lucélia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3527504,
        name: 'Lucianópolis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3527603,
        name: 'Luís Antônio',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3527702,
        name: 'Luiziânia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3527801,
        name: 'Lupércio',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3527900,
        name: 'Lutécia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3528007,
        name: 'Macatuba',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3528106,
        name: 'Macaubal',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3528205,
        name: 'Macedônia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3528304,
        name: 'Magda',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3528403,
        name: 'Mairinque',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3528502,
        name: 'Mairiporã',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3528601,
        name: 'Manduri',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3528700,
        name: 'Marabá Paulista',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3528809,
        name: 'Maracaí',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3528858,
        name: 'Marapoama',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3528908,
        name: 'Mariápolis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3529005,
        name: 'Marília',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3529104,
        name: 'Marinópolis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3529203,
        name: 'Martinópolis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3529302,
        name: 'Matão',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3529401,
        name: 'Mauá',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3529500,
        name: 'Mendonça',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3529609,
        name: 'Meridiano',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3529658,
        name: 'Mesópolis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3529708,
        name: 'Miguelópolis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3529807,
        name: 'Mineiros do Tietê',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3529906,
        name: 'Miracatu',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3530003,
        name: 'Mira Estrela',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3530102,
        name: 'Mirandópolis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3530201,
        name: 'Mirante do Paranapanema',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3530300,
        name: 'Mirassol',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3530409,
        name: 'Mirassolândia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3530508,
        name: 'Mococa',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3530607,
        name: 'Mogi das Cruzes',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3530706,
        name: 'Mogi Guaçu',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3530805,
        name: 'Mogi Mirim',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3530904,
        name: 'Mombuca',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3531001,
        name: 'Monções',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3531100,
        name: 'Mongaguá',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3531209,
        name: 'Monte Alegre do Sul',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3531308,
        name: 'Monte Alto',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3531407,
        name: 'Monte Aprazível',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3531506,
        name: 'Monte Azul Paulista',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3531605,
        name: 'Monte Castelo',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3531704,
        name: 'Monteiro Lobato',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3531803,
        name: 'Monte Mor',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3531902,
        name: 'Morro Agudo',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3532009,
        name: 'Morungaba',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3532058,
        name: 'Motuca',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3532108,
        name: 'Murutinga do Sul',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3532157,
        name: 'Nantes',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3532207,
        name: 'Narandiba',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3532306,
        name: 'Natividade da Serra',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3532405,
        name: 'Nazaré Paulista',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3532504,
        name: 'Neves Paulista',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3532603,
        name: 'Nhandeara',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3532702,
        name: 'Nipoã',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3532801,
        name: 'Nova Aliança',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3532827,
        name: 'Nova Campina',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3532843,
        name: 'Nova Canaã Paulista',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3532868,
        name: 'Nova Castilho',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3532900,
        name: 'Nova Europa',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3533007,
        name: 'Nova Granada',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3533106,
        name: 'Nova Guataporanga',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3533205,
        name: 'Nova Independência',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3533254,
        name: 'Novais',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3533304,
        name: 'Nova Luzitânia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3533403,
        name: 'Nova Odessa',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3533502,
        name: 'Novo Horizonte',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3533601,
        name: 'Nuporanga',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3533700,
        name: 'Ocauçu',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3533809,
        name: 'Óleo',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3533908,
        name: 'Olímpia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3534005,
        name: 'Onda Verde',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3534104,
        name: 'Oriente',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3534203,
        name: 'Orindiúva',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3534302,
        name: 'Orlândia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3534401,
        name: 'Osasco',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3534500,
        name: 'Oscar Bressane',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3534609,
        name: 'Osvaldo Cruz',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3534708,
        name: 'Ourinhos',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3534757,
        name: 'Ouroeste',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3534807,
        name: 'Ouro Verde',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3534906,
        name: 'Pacaembu',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3535002,
        name: 'Palestina',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3535101,
        name: 'Palmares Paulista',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3535200,
        name: "Palmeira d'Oeste",
        ibge_state_id: 35,
      },
      {
        ibge_id: 3535309,
        name: 'Palmital',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3535408,
        name: 'Panorama',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3535507,
        name: 'Paraguaçu Paulista',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3535606,
        name: 'Paraibuna',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3535705,
        name: 'Paraíso',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3535804,
        name: 'Paranapanema',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3535903,
        name: 'Paranapuã',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3536000,
        name: 'Parapuã',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3536109,
        name: 'Pardinho',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3536208,
        name: 'Pariquera-Açu',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3536257,
        name: 'Parisi',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3536307,
        name: 'Patrocínio Paulista',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3536406,
        name: 'Paulicéia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3536505,
        name: 'Paulínia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3536570,
        name: 'Paulistânia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3536604,
        name: 'Paulo de Faria',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3536703,
        name: 'Pederneiras',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3536802,
        name: 'Pedra Bela',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3536901,
        name: 'Pedranópolis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3537008,
        name: 'Pedregulho',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3537107,
        name: 'Pedreira',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3537156,
        name: 'Pedrinhas Paulista',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3537206,
        name: 'Pedro de Toledo',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3537305,
        name: 'Penápolis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3537404,
        name: 'Pereira Barreto',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3537503,
        name: 'Pereiras',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3537602,
        name: 'Peruíbe',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3537701,
        name: 'Piacatu',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3537800,
        name: 'Piedade',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3537909,
        name: 'Pilar do Sul',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3538006,
        name: 'Pindamonhangaba',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3538105,
        name: 'Pindorama',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3538204,
        name: 'Pinhalzinho',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3538303,
        name: 'Piquerobi',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3538501,
        name: 'Piquete',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3538600,
        name: 'Piracaia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3538709,
        name: 'Piracicaba',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3538808,
        name: 'Piraju',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3538907,
        name: 'Pirajuí',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3539004,
        name: 'Pirangi',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3539103,
        name: 'Pirapora do Bom Jesus',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3539202,
        name: 'Pirapozinho',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3539301,
        name: 'Pirassununga',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3539400,
        name: 'Piratininga',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3539509,
        name: 'Pitangueiras',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3539608,
        name: 'Planalto',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3539707,
        name: 'Platina',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3539806,
        name: 'Poá',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3539905,
        name: 'Poloni',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3540002,
        name: 'Pompéia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3540101,
        name: 'Pongaí',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3540200,
        name: 'Pontal',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3540259,
        name: 'Pontalinda',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3540309,
        name: 'Pontes Gestal',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3540408,
        name: 'Populina',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3540507,
        name: 'Porangaba',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3540606,
        name: 'Porto Feliz',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3540705,
        name: 'Porto Ferreira',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3540754,
        name: 'Potim',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3540804,
        name: 'Potirendaba',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3540853,
        name: 'Pracinha',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3540903,
        name: 'Pradópolis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3541000,
        name: 'Praia Grande',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3541059,
        name: 'Pratânia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3541109,
        name: 'Presidente Alves',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3541208,
        name: 'Presidente Bernardes',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3541307,
        name: 'Presidente Epitácio',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3541406,
        name: 'Presidente Prudente',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3541505,
        name: 'Presidente Venceslau',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3541604,
        name: 'Promissão',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3541653,
        name: 'Quadra',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3541703,
        name: 'Quatá',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3541802,
        name: 'Queiroz',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3541901,
        name: 'Queluz',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3542008,
        name: 'Quintana',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3542107,
        name: 'Rafard',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3542206,
        name: 'Rancharia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3542305,
        name: 'Redenção da Serra',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3542404,
        name: 'Regente Feijó',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3542503,
        name: 'Reginópolis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3542602,
        name: 'Registro',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3542701,
        name: 'Restinga',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3542800,
        name: 'Ribeira',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3542909,
        name: 'Ribeirão Bonito',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3543006,
        name: 'Ribeirão Branco',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3543105,
        name: 'Ribeirão Corrente',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3543204,
        name: 'Ribeirão do Sul',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3543238,
        name: 'Ribeirão dos Índios',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3543253,
        name: 'Ribeirão Grande',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3543303,
        name: 'Ribeirão Pires',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3543402,
        name: 'Ribeirão Preto',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3543501,
        name: 'Riversul',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3543600,
        name: 'Rifaina',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3543709,
        name: 'Rincão',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3543808,
        name: 'Rinópolis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3543907,
        name: 'Rio Claro',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3544004,
        name: 'Rio das Pedras',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3544103,
        name: 'Rio Grande da Serra',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3544202,
        name: 'Riolândia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3544251,
        name: 'Rosana',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3544301,
        name: 'Roseira',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3544400,
        name: 'Rubiácea',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3544509,
        name: 'Rubinéia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3544608,
        name: 'Sabino',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3544707,
        name: 'Sagres',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3544806,
        name: 'Sales',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3544905,
        name: 'Sales Oliveira',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3545001,
        name: 'Salesópolis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3545100,
        name: 'Salmourão',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3545159,
        name: 'Saltinho',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3545209,
        name: 'Salto',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3545308,
        name: 'Salto de Pirapora',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3545407,
        name: 'Salto Grande',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3545506,
        name: 'Sandovalina',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3545605,
        name: 'Santa Adélia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3545704,
        name: 'Santa Albertina',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3545803,
        name: "Santa Bárbara d'Oeste",
        ibge_state_id: 35,
      },
      {
        ibge_id: 3546009,
        name: 'Santa Branca',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3546108,
        name: "Santa Clara d'Oeste",
        ibge_state_id: 35,
      },
      {
        ibge_id: 3546207,
        name: 'Santa Cruz da Conceição',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3546256,
        name: 'Santa Cruz da Esperança',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3546306,
        name: 'Santa Cruz das Palmeiras',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3546405,
        name: 'Santa Cruz do Rio Pardo',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3546504,
        name: 'Santa Ernestina',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3546603,
        name: 'Santa Fé do Sul',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3546702,
        name: 'Santa Gertrudes',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3546801,
        name: 'Santa Isabel',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3546900,
        name: 'Santa Lúcia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3547007,
        name: 'Santa Maria da Serra',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3547106,
        name: 'Santa Mercedes',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3547205,
        name: 'Santana da Ponte Pensa',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3547304,
        name: 'Santana de Parnaíba',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3547403,
        name: "Santa Rita d'Oeste",
        ibge_state_id: 35,
      },
      {
        ibge_id: 3547502,
        name: 'Santa Rita do Passa Quatro',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3547601,
        name: 'Santa Rosa de Viterbo',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3547650,
        name: 'Santa Salete',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3547700,
        name: 'Santo Anastácio',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3547809,
        name: 'Santo André',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3547908,
        name: 'Santo Antônio da Alegria',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3548005,
        name: 'Santo Antônio de Posse',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3548054,
        name: 'Santo Antônio do Aracanguá',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3548104,
        name: 'Santo Antônio do Jardim',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3548203,
        name: 'Santo Antônio do Pinhal',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3548302,
        name: 'Santo Expedito',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3548401,
        name: 'Santópolis do Aguapeí',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3548500,
        name: 'Santos',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3548609,
        name: 'São Bento do Sapucaí',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3548708,
        name: 'São Bernardo do Campo',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3548807,
        name: 'São Caetano do Sul',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3548906,
        name: 'São Carlos',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3549003,
        name: 'São Francisco',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3549102,
        name: 'São João da Boa Vista',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3549201,
        name: 'São João das Duas Pontes',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3549250,
        name: 'São João de Iracema',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3549300,
        name: "São João do Pau d'Alho",
        ibge_state_id: 35,
      },
      {
        ibge_id: 3549409,
        name: 'São Joaquim da Barra',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3549508,
        name: 'São José da Bela Vista',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3549607,
        name: 'São José do Barreiro',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3549706,
        name: 'São José do Rio Pardo',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3549805,
        name: 'São José do Rio Preto',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3549904,
        name: 'São José dos Campos',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3549953,
        name: 'São Lourenço da Serra',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3550001,
        name: 'São Luiz do Paraitinga',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3550100,
        name: 'São Manuel',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3550209,
        name: 'São Miguel Arcanjo',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3550308,
        name: 'São Paulo',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3550407,
        name: 'São Pedro',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3550506,
        name: 'São Pedro do Turvo',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3550605,
        name: 'São Roque',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3550704,
        name: 'São Sebastião',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3550803,
        name: 'São Sebastião da Grama',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3550902,
        name: 'São Simão',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3551009,
        name: 'São Vicente',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3551108,
        name: 'Sarapuí',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3551207,
        name: 'Sarutaiá',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3551306,
        name: 'Sebastianópolis do Sul',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3551405,
        name: 'Serra Azul',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3551504,
        name: 'Serrana',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3551603,
        name: 'Serra Negra',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3551702,
        name: 'Sertãozinho',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3551801,
        name: 'Sete Barras',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3551900,
        name: 'Severínia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3552007,
        name: 'Silveiras',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3552106,
        name: 'Socorro',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3552205,
        name: 'Sorocaba',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3552304,
        name: 'Sud Mennucci',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3552403,
        name: 'Sumaré',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3552502,
        name: 'Suzano',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3552551,
        name: 'Suzanápolis',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3552601,
        name: 'Tabapuã',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3552700,
        name: 'Tabatinga',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3552809,
        name: 'Taboão da Serra',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3552908,
        name: 'Taciba',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3553005,
        name: 'Taguaí',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3553104,
        name: 'Taiaçu',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3553203,
        name: 'Taiúva',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3553302,
        name: 'Tambaú',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3553401,
        name: 'Tanabi',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3553500,
        name: 'Tapiraí',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3553609,
        name: 'Tapiratiba',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3553658,
        name: 'Taquaral',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3553708,
        name: 'Taquaritinga',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3553807,
        name: 'Taquarituba',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3553856,
        name: 'Taquarivaí',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3553906,
        name: 'Tarabai',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3553955,
        name: 'Tarumã',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3554003,
        name: 'Tatuí',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3554102,
        name: 'Taubaté',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3554201,
        name: 'Tejupá',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3554300,
        name: 'Teodoro Sampaio',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3554409,
        name: 'Terra Roxa',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3554508,
        name: 'Tietê',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3554607,
        name: 'Timburi',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3554656,
        name: 'Torre de Pedra',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3554706,
        name: 'Torrinha',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3554755,
        name: 'Trabiju',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3554805,
        name: 'Tremembé',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3554904,
        name: 'Três Fronteiras',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3554953,
        name: 'Tuiuti',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3555000,
        name: 'Tupã',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3555109,
        name: 'Tupi Paulista',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3555208,
        name: 'Turiúba',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3555307,
        name: 'Turmalina',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3555356,
        name: 'Ubarana',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3555406,
        name: 'Ubatuba',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3555505,
        name: 'Ubirajara',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3555604,
        name: 'Uchoa',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3555703,
        name: 'União Paulista',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3555802,
        name: 'Urânia',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3555901,
        name: 'Uru',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3556008,
        name: 'Urupês',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3556107,
        name: 'Valentim Gentil',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3556206,
        name: 'Valinhos',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3556305,
        name: 'Valparaíso',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3556354,
        name: 'Vargem',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3556404,
        name: 'Vargem Grande do Sul',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3556453,
        name: 'Vargem Grande Paulista',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3556503,
        name: 'Várzea Paulista',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3556602,
        name: 'Vera Cruz',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3556701,
        name: 'Vinhedo',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3556800,
        name: 'Viradouro',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3556909,
        name: 'Vista Alegre do Alto',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3556958,
        name: 'Vitória Brasil',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3557006,
        name: 'Votorantim',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3557105,
        name: 'Votuporanga',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3557154,
        name: 'Zacarias',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3557204,
        name: 'Chavantes',
        ibge_state_id: 35,
      },
      {
        ibge_id: 3557303,
        name: 'Estiva Gerbi',
        ibge_state_id: 35,
      },
    ],
  });

  await prisma.ibgeCity.createMany({
    data: [
      {
        ibge_id: 4100103,
        name: 'Abatiá',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4100202,
        name: 'Adrianópolis',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4100301,
        name: 'Agudos do Sul',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4100400,
        name: 'Almirante Tamandaré',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4100459,
        name: 'Altamira do Paraná',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4100509,
        name: 'Altônia',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4100608,
        name: 'Alto Paraná',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4100707,
        name: 'Alto Piquiri',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4100806,
        name: 'Alvorada do Sul',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4100905,
        name: 'Amaporã',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4101002,
        name: 'Ampére',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4101051,
        name: 'Anahy',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4101101,
        name: 'Andirá',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4101150,
        name: 'Ângulo',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4101200,
        name: 'Antonina',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4101309,
        name: 'Antônio Olinto',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4101408,
        name: 'Apucarana',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4101507,
        name: 'Arapongas',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4101606,
        name: 'Arapoti',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4101655,
        name: 'Arapuã',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4101705,
        name: 'Araruna',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4101804,
        name: 'Araucária',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4101853,
        name: 'Ariranha do Ivaí',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4101903,
        name: 'Assaí',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4102000,
        name: 'Assis Chateaubriand',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4102109,
        name: 'Astorga',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4102208,
        name: 'Atalaia',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4102307,
        name: 'Balsa Nova',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4102406,
        name: 'Bandeirantes',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4102505,
        name: 'Barbosa Ferraz',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4102604,
        name: 'Barracão',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4102703,
        name: 'Barra do Jacaré',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4102752,
        name: 'Bela Vista da Caroba',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4102802,
        name: 'Bela Vista do Paraíso',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4102901,
        name: 'Bituruna',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4103008,
        name: 'Boa Esperança',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4103024,
        name: 'Boa Esperança do Iguaçu',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4103040,
        name: 'Boa Ventura de São Roque',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4103057,
        name: 'Boa Vista da Aparecida',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4103107,
        name: 'Bocaiúva do Sul',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4103156,
        name: 'Bom Jesus do Sul',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4103206,
        name: 'Bom Sucesso',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4103222,
        name: 'Bom Sucesso do Sul',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4103305,
        name: 'Borrazópolis',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4103354,
        name: 'Braganey',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4103370,
        name: 'Brasilândia do Sul',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4103404,
        name: 'Cafeara',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4103453,
        name: 'Cafelândia',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4103479,
        name: 'Cafezal do Sul',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4103503,
        name: 'Califórnia',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4103602,
        name: 'Cambará',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4103701,
        name: 'Cambé',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4103800,
        name: 'Cambira',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4103909,
        name: 'Campina da Lagoa',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4103958,
        name: 'Campina do Simão',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4104006,
        name: 'Campina Grande do Sul',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4104055,
        name: 'Campo Bonito',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4104105,
        name: 'Campo do Tenente',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4104204,
        name: 'Campo Largo',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4104253,
        name: 'Campo Magro',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4104303,
        name: 'Campo Mourão',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4104402,
        name: 'Cândido de Abreu',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4104428,
        name: 'Candói',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4104451,
        name: 'Cantagalo',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4104501,
        name: 'Capanema',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4104600,
        name: 'Capitão Leônidas Marques',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4104659,
        name: 'Carambeí',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4104709,
        name: 'Carlópolis',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4104808,
        name: 'Cascavel',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4104907,
        name: 'Castro',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4105003,
        name: 'Catanduvas',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4105102,
        name: 'Centenário do Sul',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4105201,
        name: 'Cerro Azul',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4105300,
        name: 'Céu Azul',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4105409,
        name: 'Chopinzinho',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4105508,
        name: 'Cianorte',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4105607,
        name: 'Cidade Gaúcha',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4105706,
        name: 'Clevelândia',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4105805,
        name: 'Colombo',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4105904,
        name: 'Colorado',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4106001,
        name: 'Congonhinhas',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4106100,
        name: 'Conselheiro Mairinck',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4106209,
        name: 'Contenda',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4106308,
        name: 'Corbélia',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4106407,
        name: 'Cornélio Procópio',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4106456,
        name: 'Coronel Domingos Soares',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4106506,
        name: 'Coronel Vivida',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4106555,
        name: 'Corumbataí do Sul',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4106571,
        name: 'Cruzeiro do Iguaçu',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4106605,
        name: 'Cruzeiro do Oeste',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4106704,
        name: 'Cruzeiro do Sul',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4106803,
        name: 'Cruz Machado',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4106852,
        name: 'Cruzmaltina',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4106902,
        name: 'Curitiba',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4107009,
        name: 'Curiúva',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4107108,
        name: 'Diamante do Norte',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4107124,
        name: 'Diamante do Sul',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4107157,
        name: "Diamante D'Oeste",
        ibge_state_id: 41,
      },
      {
        ibge_id: 4107207,
        name: 'Dois Vizinhos',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4107256,
        name: 'Douradina',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4107306,
        name: 'Doutor Camargo',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4107405,
        name: 'Enéas Marques',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4107504,
        name: 'Engenheiro Beltrão',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4107520,
        name: 'Esperança Nova',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4107538,
        name: 'Entre Rios do Oeste',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4107546,
        name: 'Espigão Alto do Iguaçu',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4107553,
        name: 'Farol',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4107603,
        name: 'Faxinal',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4107652,
        name: 'Fazenda Rio Grande',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4107702,
        name: 'Fênix',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4107736,
        name: 'Fernandes Pinheiro',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4107751,
        name: 'Figueira',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4107801,
        name: 'Floraí',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4107850,
        name: 'Flor da Serra do Sul',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4107900,
        name: 'Floresta',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4108007,
        name: 'Florestópolis',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4108106,
        name: 'Flórida',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4108205,
        name: 'Formosa do Oeste',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4108304,
        name: 'Foz do Iguaçu',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4108320,
        name: 'Francisco Alves',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4108403,
        name: 'Francisco Beltrão',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4108452,
        name: 'Foz do Jordão',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4108502,
        name: 'General Carneiro',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4108551,
        name: 'Godoy Moreira',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4108601,
        name: 'Goioerê',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4108650,
        name: 'Goioxim',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4108700,
        name: 'Grandes Rios',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4108809,
        name: 'Guaíra',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4108908,
        name: 'Guairaçá',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4108957,
        name: 'Guamiranga',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4109005,
        name: 'Guapirama',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4109104,
        name: 'Guaporema',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4109203,
        name: 'Guaraci',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4109302,
        name: 'Guaraniaçu',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4109401,
        name: 'Guarapuava',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4109500,
        name: 'Guaraqueçaba',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4109609,
        name: 'Guaratuba',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4109658,
        name: 'Honório Serpa',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4109708,
        name: 'Ibaiti',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4109757,
        name: 'Ibema',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4109807,
        name: 'Ibiporã',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4109906,
        name: 'Icaraíma',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4110003,
        name: 'Iguaraçu',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4110052,
        name: 'Iguatu',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4110078,
        name: 'Imbaú',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4110102,
        name: 'Imbituva',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4110201,
        name: 'Inácio Martins',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4110300,
        name: 'Inajá',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4110409,
        name: 'Indianópolis',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4110508,
        name: 'Ipiranga',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4110607,
        name: 'Iporã',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4110656,
        name: 'Iracema do Oeste',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4110706,
        name: 'Irati',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4110805,
        name: 'Iretama',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4110904,
        name: 'Itaguajé',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4110953,
        name: 'Itaipulândia',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4111001,
        name: 'Itambaracá',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4111100,
        name: 'Itambé',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4111209,
        name: "Itapejara d'Oeste",
        ibge_state_id: 41,
      },
      {
        ibge_id: 4111258,
        name: 'Itaperuçu',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4111308,
        name: 'Itaúna do Sul',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4111407,
        name: 'Ivaí',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4111506,
        name: 'Ivaiporã',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4111555,
        name: 'Ivaté',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4111605,
        name: 'Ivatuba',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4111704,
        name: 'Jaboti',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4111803,
        name: 'Jacarezinho',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4111902,
        name: 'Jaguapitã',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4112009,
        name: 'Jaguariaíva',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4112108,
        name: 'Jandaia do Sul',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4112207,
        name: 'Janiópolis',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4112306,
        name: 'Japira',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4112405,
        name: 'Japurá',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4112504,
        name: 'Jardim Alegre',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4112603,
        name: 'Jardim Olinda',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4112702,
        name: 'Jataizinho',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4112751,
        name: 'Jesuítas',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4112801,
        name: 'Joaquim Távora',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4112900,
        name: 'Jundiaí do Sul',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4112959,
        name: 'Juranda',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4113007,
        name: 'Jussara',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4113106,
        name: 'Kaloré',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4113205,
        name: 'Lapa',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4113254,
        name: 'Laranjal',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4113304,
        name: 'Laranjeiras do Sul',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4113403,
        name: 'Leópolis',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4113429,
        name: 'Lidianópolis',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4113452,
        name: 'Lindoeste',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4113502,
        name: 'Loanda',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4113601,
        name: 'Lobato',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4113700,
        name: 'Londrina',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4113734,
        name: 'Luiziana',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4113759,
        name: 'Lunardelli',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4113809,
        name: 'Lupionópolis',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4113908,
        name: 'Mallet',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4114005,
        name: 'Mamborê',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4114104,
        name: 'Mandaguaçu',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4114203,
        name: 'Mandaguari',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4114302,
        name: 'Mandirituba',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4114351,
        name: 'Manfrinópolis',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4114401,
        name: 'Mangueirinha',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4114500,
        name: 'Manoel Ribas',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4114609,
        name: 'Marechal Cândido Rondon',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4114708,
        name: 'Maria Helena',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4114807,
        name: 'Marialva',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4114906,
        name: 'Marilândia do Sul',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4115002,
        name: 'Marilena',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4115101,
        name: 'Mariluz',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4115200,
        name: 'Maringá',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4115309,
        name: 'Mariópolis',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4115358,
        name: 'Maripá',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4115408,
        name: 'Marmeleiro',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4115457,
        name: 'Marquinho',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4115507,
        name: 'Marumbi',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4115606,
        name: 'Matelândia',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4115705,
        name: 'Matinhos',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4115739,
        name: 'Mato Rico',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4115754,
        name: 'Mauá da Serra',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4115804,
        name: 'Medianeira',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4115853,
        name: 'Mercedes',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4115903,
        name: 'Mirador',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4116000,
        name: 'Miraselva',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4116059,
        name: 'Missal',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4116109,
        name: 'Moreira Sales',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4116208,
        name: 'Morretes',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4116307,
        name: 'Munhoz de Melo',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4116406,
        name: 'Nossa Senhora das Graças',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4116505,
        name: 'Nova Aliança do Ivaí',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4116604,
        name: 'Nova América da Colina',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4116703,
        name: 'Nova Aurora',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4116802,
        name: 'Nova Cantu',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4116901,
        name: 'Nova Esperança',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4116950,
        name: 'Nova Esperança do Sudoeste',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4117008,
        name: 'Nova Fátima',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4117057,
        name: 'Nova Laranjeiras',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4117107,
        name: 'Nova Londrina',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4117206,
        name: 'Nova Olímpia',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4117214,
        name: 'Nova Santa Bárbara',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4117222,
        name: 'Nova Santa Rosa',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4117255,
        name: 'Nova Prata do Iguaçu',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4117271,
        name: 'Nova Tebas',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4117297,
        name: 'Novo Itacolomi',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4117305,
        name: 'Ortigueira',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4117404,
        name: 'Ourizona',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4117453,
        name: 'Ouro Verde do Oeste',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4117503,
        name: 'Paiçandu',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4117602,
        name: 'Palmas',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4117701,
        name: 'Palmeira',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4117800,
        name: 'Palmital',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4117909,
        name: 'Palotina',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4118006,
        name: 'Paraíso do Norte',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4118105,
        name: 'Paranacity',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4118204,
        name: 'Paranaguá',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4118303,
        name: 'Paranapoema',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4118402,
        name: 'Paranavaí',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4118451,
        name: 'Pato Bragado',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4118501,
        name: 'Pato Branco',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4118600,
        name: 'Paula Freitas',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4118709,
        name: 'Paulo Frontin',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4118808,
        name: 'Peabiru',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4118857,
        name: 'Perobal',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4118907,
        name: 'Pérola',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4119004,
        name: "Pérola d'Oeste",
        ibge_state_id: 41,
      },
      {
        ibge_id: 4119103,
        name: 'Piên',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4119152,
        name: 'Pinhais',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4119202,
        name: 'Pinhalão',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4119251,
        name: 'Pinhal de São Bento',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4119301,
        name: 'Pinhão',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4119400,
        name: 'Piraí do Sul',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4119509,
        name: 'Piraquara',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4119608,
        name: 'Pitanga',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4119657,
        name: 'Pitangueiras',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4119707,
        name: 'Planaltina do Paraná',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4119806,
        name: 'Planalto',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4119905,
        name: 'Ponta Grossa',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4119954,
        name: 'Pontal do Paraná',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4120002,
        name: 'Porecatu',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4120101,
        name: 'Porto Amazonas',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4120150,
        name: 'Porto Barreiro',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4120200,
        name: 'Porto Rico',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4120309,
        name: 'Porto Vitória',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4120333,
        name: 'Prado Ferreira',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4120358,
        name: 'Pranchita',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4120408,
        name: 'Presidente Castelo Branco',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4120507,
        name: 'Primeiro de Maio',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4120606,
        name: 'Prudentópolis',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4120655,
        name: 'Quarto Centenário',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4120705,
        name: 'Quatiguá',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4120804,
        name: 'Quatro Barras',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4120853,
        name: 'Quatro Pontes',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4120903,
        name: 'Quedas do Iguaçu',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4121000,
        name: 'Querência do Norte',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4121109,
        name: 'Quinta do Sol',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4121208,
        name: 'Quitandinha',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4121257,
        name: 'Ramilândia',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4121307,
        name: 'Rancho Alegre',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4121356,
        name: "Rancho Alegre D'Oeste",
        ibge_state_id: 41,
      },
      {
        ibge_id: 4121406,
        name: 'Realeza',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4121505,
        name: 'Rebouças',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4121604,
        name: 'Renascença',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4121703,
        name: 'Reserva',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4121752,
        name: 'Reserva do Iguaçu',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4121802,
        name: 'Ribeirão Claro',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4121901,
        name: 'Ribeirão do Pinhal',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4122008,
        name: 'Rio Azul',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4122107,
        name: 'Rio Bom',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4122156,
        name: 'Rio Bonito do Iguaçu',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4122172,
        name: 'Rio Branco do Ivaí',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4122206,
        name: 'Rio Branco do Sul',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4122305,
        name: 'Rio Negro',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4122404,
        name: 'Rolândia',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4122503,
        name: 'Roncador',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4122602,
        name: 'Rondon',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4122651,
        name: 'Rosário do Ivaí',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4122701,
        name: 'Sabáudia',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4122800,
        name: 'Salgado Filho',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4122909,
        name: 'Salto do Itararé',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4123006,
        name: 'Salto do Lontra',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4123105,
        name: 'Santa Amélia',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4123204,
        name: 'Santa Cecília do Pavão',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4123303,
        name: 'Santa Cruz de Monte Castelo',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4123402,
        name: 'Santa Fé',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4123501,
        name: 'Santa Helena',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4123600,
        name: 'Santa Inês',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4123709,
        name: 'Santa Isabel do Ivaí',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4123808,
        name: 'Santa Izabel do Oeste',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4123824,
        name: 'Santa Lúcia',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4123857,
        name: 'Santa Maria do Oeste',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4123907,
        name: 'Santa Mariana',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4123956,
        name: 'Santa Mônica',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4124004,
        name: 'Santana do Itararé',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4124020,
        name: 'Santa Tereza do Oeste',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4124053,
        name: 'Santa Terezinha de Itaipu',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4124103,
        name: 'Santo Antônio da Platina',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4124202,
        name: 'Santo Antônio do Caiuá',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4124301,
        name: 'Santo Antônio do Paraíso',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4124400,
        name: 'Santo Antônio do Sudoeste',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4124509,
        name: 'Santo Inácio',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4124608,
        name: 'São Carlos do Ivaí',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4124707,
        name: 'São Jerônimo da Serra',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4124806,
        name: 'São João',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4124905,
        name: 'São João do Caiuá',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4125001,
        name: 'São João do Ivaí',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4125100,
        name: 'São João do Triunfo',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4125209,
        name: "São Jorge d'Oeste",
        ibge_state_id: 41,
      },
      {
        ibge_id: 4125308,
        name: 'São Jorge do Ivaí',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4125357,
        name: 'São Jorge do Patrocínio',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4125407,
        name: 'São José da Boa Vista',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4125456,
        name: 'São José das Palmeiras',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4125506,
        name: 'São José dos Pinhais',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4125555,
        name: 'São Manoel do Paraná',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4125605,
        name: 'São Mateus do Sul',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4125704,
        name: 'São Miguel do Iguaçu',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4125753,
        name: 'São Pedro do Iguaçu',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4125803,
        name: 'São Pedro do Ivaí',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4125902,
        name: 'São Pedro do Paraná',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4126009,
        name: 'São Sebastião da Amoreira',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4126108,
        name: 'São Tomé',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4126207,
        name: 'Sapopema',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4126256,
        name: 'Sarandi',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4126272,
        name: 'Saudade do Iguaçu',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4126306,
        name: 'Sengés',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4126355,
        name: 'Serranópolis do Iguaçu',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4126405,
        name: 'Sertaneja',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4126504,
        name: 'Sertanópolis',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4126603,
        name: 'Siqueira Campos',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4126652,
        name: 'Sulina',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4126678,
        name: 'Tamarana',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4126702,
        name: 'Tamboara',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4126801,
        name: 'Tapejara',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4126900,
        name: 'Tapira',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4127007,
        name: 'Teixeira Soares',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4127106,
        name: 'Telêmaco Borba',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4127205,
        name: 'Terra Boa',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4127304,
        name: 'Terra Rica',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4127403,
        name: 'Terra Roxa',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4127502,
        name: 'Tibagi',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4127601,
        name: 'Tijucas do Sul',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4127700,
        name: 'Toledo',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4127809,
        name: 'Tomazina',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4127858,
        name: 'Três Barras do Paraná',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4127882,
        name: 'Tunas do Paraná',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4127908,
        name: 'Tuneiras do Oeste',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4127957,
        name: 'Tupãssi',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4127965,
        name: 'Turvo',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4128005,
        name: 'Ubiratã',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4128104,
        name: 'Umuarama',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4128203,
        name: 'União da Vitória',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4128302,
        name: 'Uniflor',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4128401,
        name: 'Uraí',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4128500,
        name: 'Wenceslau Braz',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4128534,
        name: 'Ventania',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4128559,
        name: 'Vera Cruz do Oeste',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4128609,
        name: 'Verê',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4128625,
        name: 'Alto Paraíso',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4128633,
        name: 'Doutor Ulysses',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4128658,
        name: 'Virmond',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4128708,
        name: 'Vitorino',
        ibge_state_id: 41,
      },
      {
        ibge_id: 4128807,
        name: 'Xambrê',
        ibge_state_id: 41,
      },
    ],
  });

  await prisma.ibgeCity.createMany({
    data: [
      {
        ibge_id: 4200051,
        name: 'Abdon Batista',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4200101,
        name: 'Abelardo Luz',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4200200,
        name: 'Agrolândia',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4200309,
        name: 'Agronômica',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4200408,
        name: 'Água Doce',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4200507,
        name: 'Águas de Chapecó',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4200556,
        name: 'Águas Frias',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4200606,
        name: 'Águas Mornas',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4200705,
        name: 'Alfredo Wagner',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4200754,
        name: 'Alto Bela Vista',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4200804,
        name: 'Anchieta',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4200903,
        name: 'Angelina',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4201000,
        name: 'Anita Garibaldi',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4201109,
        name: 'Anitápolis',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4201208,
        name: 'Antônio Carlos',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4201257,
        name: 'Apiúna',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4201273,
        name: 'Arabutã',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4201307,
        name: 'Araquari',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4201406,
        name: 'Araranguá',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4201505,
        name: 'Armazém',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4201604,
        name: 'Arroio Trinta',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4201653,
        name: 'Arvoredo',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4201703,
        name: 'Ascurra',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4201802,
        name: 'Atalanta',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4201901,
        name: 'Aurora',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4201950,
        name: 'Balneário Arroio do Silva',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4202008,
        name: 'Balneário Camboriú',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4202057,
        name: 'Balneário Barra do Sul',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4202073,
        name: 'Balneário Gaivota',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4202081,
        name: 'Bandeirante',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4202099,
        name: 'Barra Bonita',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4202107,
        name: 'Barra Velha',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4202131,
        name: 'Bela Vista do Toldo',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4202156,
        name: 'Belmonte',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4202206,
        name: 'Benedito Novo',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4202305,
        name: 'Biguaçu',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4202404,
        name: 'Blumenau',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4202438,
        name: 'Bocaina do Sul',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4202453,
        name: 'Bombinhas',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4202503,
        name: 'Bom Jardim da Serra',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4202537,
        name: 'Bom Jesus',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4202578,
        name: 'Bom Jesus do Oeste',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4202602,
        name: 'Bom Retiro',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4202701,
        name: 'Botuverá',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4202800,
        name: 'Braço do Norte',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4202859,
        name: 'Braço do Trombudo',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4202875,
        name: 'Brunópolis',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4202909,
        name: 'Brusque',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4203006,
        name: 'Caçador',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4203105,
        name: 'Caibi',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4203154,
        name: 'Calmon',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4203204,
        name: 'Camboriú',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4203253,
        name: 'Capão Alto',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4203303,
        name: 'Campo Alegre',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4203402,
        name: 'Campo Belo do Sul',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4203501,
        name: 'Campo Erê',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4203600,
        name: 'Campos Novos',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4203709,
        name: 'Canelinha',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4203808,
        name: 'Canoinhas',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4203907,
        name: 'Capinzal',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4203956,
        name: 'Capivari de Baixo',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4204004,
        name: 'Catanduvas',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4204103,
        name: 'Caxambu do Sul',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4204152,
        name: 'Celso Ramos',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4204178,
        name: 'Cerro Negro',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4204194,
        name: 'Chapadão do Lageado',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4204202,
        name: 'Chapecó',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4204251,
        name: 'Cocal do Sul',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4204301,
        name: 'Concórdia',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4204350,
        name: 'Cordilheira Alta',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4204400,
        name: 'Coronel Freitas',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4204459,
        name: 'Coronel Martins',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4204509,
        name: 'Corupá',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4204558,
        name: 'Correia Pinto',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4204608,
        name: 'Criciúma',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4204707,
        name: 'Cunha Porã',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4204756,
        name: 'Cunhataí',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4204806,
        name: 'Curitibanos',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4204905,
        name: 'Descanso',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4205001,
        name: 'Dionísio Cerqueira',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4205100,
        name: 'Dona Emma',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4205159,
        name: 'Doutor Pedrinho',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4205175,
        name: 'Entre Rios',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4205191,
        name: 'Ermo',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4205209,
        name: 'Erval Velho',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4205308,
        name: 'Faxinal dos Guedes',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4205357,
        name: 'Flor do Sertão',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4205407,
        name: 'Florianópolis',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4205431,
        name: 'Formosa do Sul',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4205456,
        name: 'Forquilhinha',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4205506,
        name: 'Fraiburgo',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4205555,
        name: 'Frei Rogério',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4205605,
        name: 'Galvão',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4205704,
        name: 'Garopaba',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4205803,
        name: 'Garuva',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4205902,
        name: 'Gaspar',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4206009,
        name: 'Governador Celso Ramos',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4206108,
        name: 'Grão-Pará',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4206207,
        name: 'Gravatal',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4206306,
        name: 'Guabiruba',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4206405,
        name: 'Guaraciaba',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4206504,
        name: 'Guaramirim',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4206603,
        name: 'Guarujá do Sul',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4206652,
        name: 'Guatambú',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4206702,
        name: "Herval d'Oeste",
        ibge_state_id: 42,
      },
      {
        ibge_id: 4206751,
        name: 'Ibiam',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4206801,
        name: 'Ibicaré',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4206900,
        name: 'Ibirama',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4207007,
        name: 'Içara',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4207106,
        name: 'Ilhota',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4207205,
        name: 'Imaruí',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4207304,
        name: 'Imbituba',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4207403,
        name: 'Imbuia',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4207502,
        name: 'Indaial',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4207577,
        name: 'Iomerê',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4207601,
        name: 'Ipira',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4207650,
        name: 'Iporã do Oeste',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4207684,
        name: 'Ipuaçu',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4207700,
        name: 'Ipumirim',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4207759,
        name: 'Iraceminha',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4207809,
        name: 'Irani',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4207858,
        name: 'Irati',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4207908,
        name: 'Irineópolis',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4208005,
        name: 'Itá',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4208104,
        name: 'Itaiópolis',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4208203,
        name: 'Itajaí',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4208302,
        name: 'Itapema',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4208401,
        name: 'Itapiranga',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4208450,
        name: 'Itapoá',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4208500,
        name: 'Ituporanga',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4208609,
        name: 'Jaborá',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4208708,
        name: 'Jacinto Machado',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4208807,
        name: 'Jaguaruna',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4208906,
        name: 'Jaraguá do Sul',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4208955,
        name: 'Jardinópolis',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4209003,
        name: 'Joaçaba',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4209102,
        name: 'Joinville',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4209151,
        name: 'José Boiteux',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4209177,
        name: 'Jupiá',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4209201,
        name: 'Lacerdópolis',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4209300,
        name: 'Lages',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4209409,
        name: 'Laguna',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4209458,
        name: 'Lajeado Grande',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4209508,
        name: 'Laurentino',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4209607,
        name: 'Lauro Müller',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4209706,
        name: 'Lebon Régis',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4209805,
        name: 'Leoberto Leal',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4209854,
        name: 'Lindóia do Sul',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4209904,
        name: 'Lontras',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4210001,
        name: 'Luiz Alves',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4210035,
        name: 'Luzerna',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4210050,
        name: 'Macieira',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4210100,
        name: 'Mafra',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4210209,
        name: 'Major Gercino',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4210308,
        name: 'Major Vieira',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4210407,
        name: 'Maracajá',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4210506,
        name: 'Maravilha',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4210555,
        name: 'Marema',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4210605,
        name: 'Massaranduba',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4210704,
        name: 'Matos Costa',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4210803,
        name: 'Meleiro',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4210852,
        name: 'Mirim Doce',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4210902,
        name: 'Modelo',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4211009,
        name: 'Mondaí',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4211058,
        name: 'Monte Carlo',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4211108,
        name: 'Monte Castelo',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4211207,
        name: 'Morro da Fumaça',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4211256,
        name: 'Morro Grande',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4211306,
        name: 'Navegantes',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4211405,
        name: 'Nova Erechim',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4211454,
        name: 'Nova Itaberaba',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4211504,
        name: 'Nova Trento',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4211603,
        name: 'Nova Veneza',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4211652,
        name: 'Novo Horizonte',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4211702,
        name: 'Orleans',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4211751,
        name: 'Otacílio Costa',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4211801,
        name: 'Ouro',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4211850,
        name: 'Ouro Verde',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4211876,
        name: 'Paial',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4211892,
        name: 'Painel',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4211900,
        name: 'Palhoça',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4212007,
        name: 'Palma Sola',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4212056,
        name: 'Palmeira',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4212106,
        name: 'Palmitos',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4212205,
        name: 'Papanduva',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4212239,
        name: 'Paraíso',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4212254,
        name: 'Passo de Torres',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4212270,
        name: 'Passos Maia',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4212304,
        name: 'Paulo Lopes',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4212403,
        name: 'Pedras Grandes',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4212502,
        name: 'Penha',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4212601,
        name: 'Peritiba',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4212650,
        name: 'Pescaria Brava',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4212700,
        name: 'Petrolândia',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4212809,
        name: 'Balneário Piçarras',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4212908,
        name: 'Pinhalzinho',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4213005,
        name: 'Pinheiro Preto',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4213104,
        name: 'Piratuba',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4213153,
        name: 'Planalto Alegre',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4213203,
        name: 'Pomerode',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4213302,
        name: 'Ponte Alta',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4213351,
        name: 'Ponte Alta do Norte',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4213401,
        name: 'Ponte Serrada',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4213500,
        name: 'Porto Belo',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4213609,
        name: 'Porto União',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4213708,
        name: 'Pouso Redondo',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4213807,
        name: 'Praia Grande',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4213906,
        name: 'Presidente Castello Branco',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4214003,
        name: 'Presidente Getúlio',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4214102,
        name: 'Presidente Nereu',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4214151,
        name: 'Princesa',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4214201,
        name: 'Quilombo',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4214300,
        name: 'Rancho Queimado',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4214409,
        name: 'Rio das Antas',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4214508,
        name: 'Rio do Campo',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4214607,
        name: 'Rio do Oeste',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4214706,
        name: 'Rio dos Cedros',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4214805,
        name: 'Rio do Sul',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4214904,
        name: 'Rio Fortuna',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4215000,
        name: 'Rio Negrinho',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4215059,
        name: 'Rio Rufino',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4215075,
        name: 'Riqueza',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4215109,
        name: 'Rodeio',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4215208,
        name: 'Romelândia',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4215307,
        name: 'Salete',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4215356,
        name: 'Saltinho',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4215406,
        name: 'Salto Veloso',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4215455,
        name: 'Sangão',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4215505,
        name: 'Santa Cecília',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4215554,
        name: 'Santa Helena',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4215604,
        name: 'Santa Rosa de Lima',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4215653,
        name: 'Santa Rosa do Sul',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4215679,
        name: 'Santa Terezinha',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4215687,
        name: 'Santa Terezinha do Progresso',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4215695,
        name: 'Santiago do Sul',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4215703,
        name: 'Santo Amaro da Imperatriz',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4215752,
        name: 'São Bernardino',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4215802,
        name: 'São Bento do Sul',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4215901,
        name: 'São Bonifácio',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4216008,
        name: 'São Carlos',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4216057,
        name: 'São Cristóvão do Sul',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4216107,
        name: 'São Domingos',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4216206,
        name: 'São Francisco do Sul',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4216255,
        name: 'São João do Oeste',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4216305,
        name: 'São João Batista',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4216354,
        name: 'São João do Itaperiú',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4216404,
        name: 'São João do Sul',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4216503,
        name: 'São Joaquim',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4216602,
        name: 'São José',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4216701,
        name: 'São José do Cedro',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4216800,
        name: 'São José do Cerrito',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4216909,
        name: 'São Lourenço do Oeste',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4217006,
        name: 'São Ludgero',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4217105,
        name: 'São Martinho',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4217154,
        name: 'São Miguel da Boa Vista',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4217204,
        name: 'São Miguel do Oeste',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4217253,
        name: 'São Pedro de Alcântara',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4217303,
        name: 'Saudades',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4217402,
        name: 'Schroeder',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4217501,
        name: 'Seara',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4217550,
        name: 'Serra Alta',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4217600,
        name: 'Siderópolis',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4217709,
        name: 'Sombrio',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4217758,
        name: 'Sul Brasil',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4217808,
        name: 'Taió',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4217907,
        name: 'Tangará',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4217956,
        name: 'Tigrinhos',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4218004,
        name: 'Tijucas',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4218103,
        name: 'Timbé do Sul',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4218202,
        name: 'Timbó',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4218251,
        name: 'Timbó Grande',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4218301,
        name: 'Três Barras',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4218350,
        name: 'Treviso',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4218400,
        name: 'Treze de Maio',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4218509,
        name: 'Treze Tílias',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4218608,
        name: 'Trombudo Central',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4218707,
        name: 'Tubarão',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4218756,
        name: 'Tunápolis',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4218806,
        name: 'Turvo',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4218855,
        name: 'União do Oeste',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4218905,
        name: 'Urubici',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4218954,
        name: 'Urupema',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4219002,
        name: 'Urussanga',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4219101,
        name: 'Vargeão',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4219150,
        name: 'Vargem',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4219176,
        name: 'Vargem Bonita',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4219200,
        name: 'Vidal Ramos',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4219309,
        name: 'Videira',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4219358,
        name: 'Vitor Meireles',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4219408,
        name: 'Witmarsum',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4219507,
        name: 'Xanxerê',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4219606,
        name: 'Xavantina',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4219705,
        name: 'Xaxim',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4219853,
        name: 'Zortéa',
        ibge_state_id: 42,
      },
      {
        ibge_id: 4220000,
        name: 'Balneário Rincão',
        ibge_state_id: 42,
      },
    ],
  });

  await prisma.ibgeCity.createMany({
    data: [
      {
        ibge_id: 4300034,
        name: 'Aceguá',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4300059,
        name: 'Água Santa',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4300109,
        name: 'Agudo',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4300208,
        name: 'Ajuricaba',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4300307,
        name: 'Alecrim',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4300406,
        name: 'Alegrete',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4300455,
        name: 'Alegria',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4300471,
        name: 'Almirante Tamandaré do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4300505,
        name: 'Alpestre',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4300554,
        name: 'Alto Alegre',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4300570,
        name: 'Alto Feliz',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4300604,
        name: 'Alvorada',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4300638,
        name: 'Amaral Ferrador',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4300646,
        name: 'Ametista do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4300661,
        name: 'André da Rocha',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4300703,
        name: 'Anta Gorda',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4300802,
        name: 'Antônio Prado',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4300851,
        name: 'Arambaré',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4300877,
        name: 'Araricá',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4300901,
        name: 'Aratiba',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4301008,
        name: 'Arroio do Meio',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4301057,
        name: 'Arroio do Sal',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4301073,
        name: 'Arroio do Padre',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4301107,
        name: 'Arroio dos Ratos',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4301206,
        name: 'Arroio do Tigre',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4301305,
        name: 'Arroio Grande',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4301404,
        name: 'Arvorezinha',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4301503,
        name: 'Augusto Pestana',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4301552,
        name: 'Áurea',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4301602,
        name: 'Bagé',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4301636,
        name: 'Balneário Pinhal',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4301651,
        name: 'Barão',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4301701,
        name: 'Barão de Cotegipe',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4301750,
        name: 'Barão do Triunfo',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4301800,
        name: 'Barracão',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4301859,
        name: 'Barra do Guarita',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4301875,
        name: 'Barra do Quaraí',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4301909,
        name: 'Barra do Ribeiro',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4301925,
        name: 'Barra do Rio Azul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4301958,
        name: 'Barra Funda',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4302006,
        name: 'Barros Cassal',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4302055,
        name: 'Benjamin Constant do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4302105,
        name: 'Bento Gonçalves',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4302154,
        name: 'Boa Vista das Missões',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4302204,
        name: 'Boa Vista do Buricá',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4302220,
        name: 'Boa Vista do Cadeado',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4302238,
        name: 'Boa Vista do Incra',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4302253,
        name: 'Boa Vista do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4302303,
        name: 'Bom Jesus',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4302352,
        name: 'Bom Princípio',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4302378,
        name: 'Bom Progresso',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4302402,
        name: 'Bom Retiro do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4302451,
        name: 'Boqueirão do Leão',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4302501,
        name: 'Bossoroca',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4302584,
        name: 'Bozano',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4302600,
        name: 'Braga',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4302659,
        name: 'Brochier',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4302709,
        name: 'Butiá',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4302808,
        name: 'Caçapava do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4302907,
        name: 'Cacequi',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4303004,
        name: 'Cachoeira do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4303103,
        name: 'Cachoeirinha',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4303202,
        name: 'Cacique Doble',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4303301,
        name: 'Caibaté',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4303400,
        name: 'Caiçara',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4303509,
        name: 'Camaquã',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4303558,
        name: 'Camargo',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4303608,
        name: 'Cambará do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4303673,
        name: 'Campestre da Serra',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4303707,
        name: 'Campina das Missões',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4303806,
        name: 'Campinas do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4303905,
        name: 'Campo Bom',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4304002,
        name: 'Campo Novo',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4304101,
        name: 'Campos Borges',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4304200,
        name: 'Candelária',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4304309,
        name: 'Cândido Godói',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4304358,
        name: 'Candiota',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4304408,
        name: 'Canela',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4304507,
        name: 'Canguçu',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4304606,
        name: 'Canoas',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4304614,
        name: 'Canudos do Vale',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4304622,
        name: 'Capão Bonito do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4304630,
        name: 'Capão da Canoa',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4304655,
        name: 'Capão do Cipó',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4304663,
        name: 'Capão do Leão',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4304671,
        name: 'Capivari do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4304689,
        name: 'Capela de Santana',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4304697,
        name: 'Capitão',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4304705,
        name: 'Carazinho',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4304713,
        name: 'Caraá',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4304804,
        name: 'Carlos Barbosa',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4304853,
        name: 'Carlos Gomes',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4304903,
        name: 'Casca',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4304952,
        name: 'Caseiros',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4305009,
        name: 'Catuípe',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4305108,
        name: 'Caxias do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4305116,
        name: 'Centenário',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4305124,
        name: 'Cerrito',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4305132,
        name: 'Cerro Branco',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4305157,
        name: 'Cerro Grande',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4305173,
        name: 'Cerro Grande do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4305207,
        name: 'Cerro Largo',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4305306,
        name: 'Chapada',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4305355,
        name: 'Charqueadas',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4305371,
        name: 'Charrua',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4305405,
        name: 'Chiapetta',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4305439,
        name: 'Chuí',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4305447,
        name: 'Chuvisca',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4305454,
        name: 'Cidreira',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4305504,
        name: 'Ciríaco',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4305587,
        name: 'Colinas',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4305603,
        name: 'Colorado',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4305702,
        name: 'Condor',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4305801,
        name: 'Constantina',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4305835,
        name: 'Coqueiro Baixo',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4305850,
        name: 'Coqueiros do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4305871,
        name: 'Coronel Barros',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4305900,
        name: 'Coronel Bicaco',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4305934,
        name: 'Coronel Pilar',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4305959,
        name: 'Cotiporã',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4305975,
        name: 'Coxilha',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4306007,
        name: 'Crissiumal',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4306056,
        name: 'Cristal',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4306072,
        name: 'Cristal do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4306106,
        name: 'Cruz Alta',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4306130,
        name: 'Cruzaltense',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4306205,
        name: 'Cruzeiro do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4306304,
        name: 'David Canabarro',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4306320,
        name: 'Derrubadas',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4306353,
        name: 'Dezesseis de Novembro',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4306379,
        name: 'Dilermando de Aguiar',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4306403,
        name: 'Dois Irmãos',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4306429,
        name: 'Dois Irmãos das Missões',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4306452,
        name: 'Dois Lajeados',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4306502,
        name: 'Dom Feliciano',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4306551,
        name: 'Dom Pedro de Alcântara',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4306601,
        name: 'Dom Pedrito',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4306700,
        name: 'Dona Francisca',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4306734,
        name: 'Doutor Maurício Cardoso',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4306759,
        name: 'Doutor Ricardo',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4306767,
        name: 'Eldorado do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4306809,
        name: 'Encantado',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4306908,
        name: 'Encruzilhada do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4306924,
        name: 'Engenho Velho',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4306932,
        name: 'Entre-Ijuís',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4306957,
        name: 'Entre Rios do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4306973,
        name: 'Erebango',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4307005,
        name: 'Erechim',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4307054,
        name: 'Ernestina',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4307104,
        name: 'Herval',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4307203,
        name: 'Erval Grande',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4307302,
        name: 'Erval Seco',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4307401,
        name: 'Esmeralda',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4307450,
        name: 'Esperança do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4307500,
        name: 'Espumoso',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4307559,
        name: 'Estação',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4307609,
        name: 'Estância Velha',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4307708,
        name: 'Esteio',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4307807,
        name: 'Estrela',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4307815,
        name: 'Estrela Velha',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4307831,
        name: 'Eugênio de Castro',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4307864,
        name: 'Fagundes Varela',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4307906,
        name: 'Farroupilha',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4308003,
        name: 'Faxinal do Soturno',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4308052,
        name: 'Faxinalzinho',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4308078,
        name: 'Fazenda Vilanova',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4308102,
        name: 'Feliz',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4308201,
        name: 'Flores da Cunha',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4308250,
        name: 'Floriano Peixoto',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4308300,
        name: 'Fontoura Xavier',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4308409,
        name: 'Formigueiro',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4308433,
        name: 'Forquetinha',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4308458,
        name: 'Fortaleza dos Valos',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4308508,
        name: 'Frederico Westphalen',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4308607,
        name: 'Garibaldi',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4308656,
        name: 'Garruchos',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4308706,
        name: 'Gaurama',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4308805,
        name: 'General Câmara',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4308854,
        name: 'Gentil',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4308904,
        name: 'Getúlio Vargas',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4309001,
        name: 'Giruá',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4309050,
        name: 'Glorinha',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4309100,
        name: 'Gramado',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4309126,
        name: 'Gramado dos Loureiros',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4309159,
        name: 'Gramado Xavier',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4309209,
        name: 'Gravataí',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4309258,
        name: 'Guabiju',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4309308,
        name: 'Guaíba',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4309407,
        name: 'Guaporé',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4309506,
        name: 'Guarani das Missões',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4309555,
        name: 'Harmonia',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4309571,
        name: 'Herveiras',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4309605,
        name: 'Horizontina',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4309654,
        name: 'Hulha Negra',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4309704,
        name: 'Humaitá',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4309753,
        name: 'Ibarama',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4309803,
        name: 'Ibiaçá',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4309902,
        name: 'Ibiraiaras',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4309951,
        name: 'Ibirapuitã',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4310009,
        name: 'Ibirubá',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4310108,
        name: 'Igrejinha',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4310207,
        name: 'Ijuí',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4310306,
        name: 'Ilópolis',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4310330,
        name: 'Imbé',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4310363,
        name: 'Imigrante',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4310405,
        name: 'Independência',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4310413,
        name: 'Inhacorá',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4310439,
        name: 'Ipê',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4310462,
        name: 'Ipiranga do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4310504,
        name: 'Iraí',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4310538,
        name: 'Itaara',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4310553,
        name: 'Itacurubi',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4310579,
        name: 'Itapuca',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4310603,
        name: 'Itaqui',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4310652,
        name: 'Itati',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4310702,
        name: 'Itatiba do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4310751,
        name: 'Ivorá',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4310801,
        name: 'Ivoti',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4310850,
        name: 'Jaboticaba',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4310876,
        name: 'Jacuizinho',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4310900,
        name: 'Jacutinga',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4311007,
        name: 'Jaguarão',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4311106,
        name: 'Jaguari',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4311122,
        name: 'Jaquirana',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4311130,
        name: 'Jari',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4311155,
        name: 'Jóia',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4311205,
        name: 'Júlio de Castilhos',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4311239,
        name: 'Lagoa Bonita do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4311254,
        name: 'Lagoão',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4311270,
        name: 'Lagoa dos Três Cantos',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4311304,
        name: 'Lagoa Vermelha',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4311403,
        name: 'Lajeado',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4311429,
        name: 'Lajeado do Bugre',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4311502,
        name: 'Lavras do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4311601,
        name: 'Liberato Salzano',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4311627,
        name: 'Lindolfo Collor',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4311643,
        name: 'Linha Nova',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4311700,
        name: 'Machadinho',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4311718,
        name: 'Maçambará',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4311734,
        name: 'Mampituba',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4311759,
        name: 'Manoel Viana',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4311775,
        name: 'Maquiné',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4311791,
        name: 'Maratá',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4311809,
        name: 'Marau',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4311908,
        name: 'Marcelino Ramos',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4311981,
        name: 'Mariana Pimentel',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312005,
        name: 'Mariano Moro',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312054,
        name: 'Marques de Souza',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312104,
        name: 'Mata',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312138,
        name: 'Mato Castelhano',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312153,
        name: 'Mato Leitão',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312179,
        name: 'Mato Queimado',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312203,
        name: 'Maximiliano de Almeida',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312252,
        name: 'Minas do Leão',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312302,
        name: 'Miraguaí',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312351,
        name: 'Montauri',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312377,
        name: 'Monte Alegre dos Campos',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312385,
        name: 'Monte Belo do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312401,
        name: 'Montenegro',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312427,
        name: 'Mormaço',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312443,
        name: 'Morrinhos do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312450,
        name: 'Morro Redondo',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312476,
        name: 'Morro Reuter',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312500,
        name: 'Mostardas',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312609,
        name: 'Muçum',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312617,
        name: 'Muitos Capões',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312625,
        name: 'Muliterno',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312658,
        name: 'Não-Me-Toque',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312674,
        name: 'Nicolau Vergueiro',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312708,
        name: 'Nonoai',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312757,
        name: 'Nova Alvorada',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312807,
        name: 'Nova Araçá',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312906,
        name: 'Nova Bassano',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4312955,
        name: 'Nova Boa Vista',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4313003,
        name: 'Nova Bréscia',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4313011,
        name: 'Nova Candelária',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4313037,
        name: 'Nova Esperança do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4313060,
        name: 'Nova Hartz',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4313086,
        name: 'Nova Pádua',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4313102,
        name: 'Nova Palma',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4313201,
        name: 'Nova Petrópolis',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4313300,
        name: 'Nova Prata',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4313334,
        name: 'Nova Ramada',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4313359,
        name: 'Nova Roma do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4313375,
        name: 'Nova Santa Rita',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4313391,
        name: 'Novo Cabrais',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4313409,
        name: 'Novo Hamburgo',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4313425,
        name: 'Novo Machado',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4313441,
        name: 'Novo Tiradentes',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4313466,
        name: 'Novo Xingu',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4313490,
        name: 'Novo Barreiro',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4313508,
        name: 'Osório',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4313607,
        name: 'Paim Filho',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4313656,
        name: 'Palmares do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4313706,
        name: 'Palmeira das Missões',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4313805,
        name: 'Palmitinho',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4313904,
        name: 'Panambi',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4313953,
        name: 'Pantano Grande',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314001,
        name: 'Paraí',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314027,
        name: 'Paraíso do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314035,
        name: 'Pareci Novo',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314050,
        name: 'Parobé',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314068,
        name: 'Passa Sete',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314076,
        name: 'Passo do Sobrado',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314100,
        name: 'Passo Fundo',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314134,
        name: 'Paulo Bento',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314159,
        name: 'Paverama',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314175,
        name: 'Pedras Altas',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314209,
        name: 'Pedro Osório',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314308,
        name: 'Pejuçara',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314407,
        name: 'Pelotas',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314423,
        name: 'Picada Café',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314456,
        name: 'Pinhal',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314464,
        name: 'Pinhal da Serra',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314472,
        name: 'Pinhal Grande',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314498,
        name: 'Pinheirinho do Vale',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314506,
        name: 'Pinheiro Machado',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314548,
        name: 'Pinto Bandeira',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314555,
        name: 'Pirapó',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314605,
        name: 'Piratini',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314704,
        name: 'Planalto',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314753,
        name: 'Poço das Antas',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314779,
        name: 'Pontão',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314787,
        name: 'Ponte Preta',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314803,
        name: 'Portão',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4314902,
        name: 'Porto Alegre',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4315008,
        name: 'Porto Lucena',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4315057,
        name: 'Porto Mauá',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4315073,
        name: 'Porto Vera Cruz',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4315107,
        name: 'Porto Xavier',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4315131,
        name: 'Pouso Novo',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4315149,
        name: 'Presidente Lucena',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4315156,
        name: 'Progresso',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4315172,
        name: 'Protásio Alves',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4315206,
        name: 'Putinga',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4315305,
        name: 'Quaraí',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4315313,
        name: 'Quatro Irmãos',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4315321,
        name: 'Quevedos',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4315354,
        name: 'Quinze de Novembro',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4315404,
        name: 'Redentora',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4315453,
        name: 'Relvado',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4315503,
        name: 'Restinga Sêca',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4315552,
        name: 'Rio dos Índios',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4315602,
        name: 'Rio Grande',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4315701,
        name: 'Rio Pardo',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4315750,
        name: 'Riozinho',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4315800,
        name: 'Roca Sales',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4315909,
        name: 'Rodeio Bonito',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4315958,
        name: 'Rolador',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4316006,
        name: 'Rolante',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4316105,
        name: 'Ronda Alta',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4316204,
        name: 'Rondinha',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4316303,
        name: 'Roque Gonzales',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4316402,
        name: 'Rosário do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4316428,
        name: 'Sagrada Família',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4316436,
        name: 'Saldanha Marinho',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4316451,
        name: 'Salto do Jacuí',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4316477,
        name: 'Salvador das Missões',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4316501,
        name: 'Salvador do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4316600,
        name: 'Sananduva',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4316709,
        name: 'Santa Bárbara do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4316733,
        name: 'Santa Cecília do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4316758,
        name: 'Santa Clara do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4316808,
        name: 'Santa Cruz do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4316907,
        name: 'Santa Maria',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4316956,
        name: 'Santa Maria do Herval',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4316972,
        name: 'Santa Margarida do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4317004,
        name: 'Santana da Boa Vista',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4317103,
        name: "Sant'Ana do Livramento",
        ibge_state_id: 43,
      },
      {
        ibge_id: 4317202,
        name: 'Santa Rosa',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4317251,
        name: 'Santa Tereza',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4317301,
        name: 'Santa Vitória do Palmar',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4317400,
        name: 'Santiago',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4317509,
        name: 'Santo Ângelo',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4317558,
        name: 'Santo Antônio do Palma',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4317608,
        name: 'Santo Antônio da Patrulha',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4317707,
        name: 'Santo Antônio das Missões',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4317756,
        name: 'Santo Antônio do Planalto',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4317806,
        name: 'Santo Augusto',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4317905,
        name: 'Santo Cristo',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4317954,
        name: 'Santo Expedito do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4318002,
        name: 'São Borja',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4318051,
        name: 'São Domingos do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4318101,
        name: 'São Francisco de Assis',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4318200,
        name: 'São Francisco de Paula',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4318309,
        name: 'São Gabriel',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4318408,
        name: 'São Jerônimo',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4318424,
        name: 'São João da Urtiga',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4318432,
        name: 'São João do Polêsine',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4318440,
        name: 'São Jorge',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4318457,
        name: 'São José das Missões',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4318465,
        name: 'São José do Herval',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4318481,
        name: 'São José do Hortêncio',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4318499,
        name: 'São José do Inhacorá',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4318507,
        name: 'São José do Norte',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4318606,
        name: 'São José do Ouro',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4318614,
        name: 'São José do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4318622,
        name: 'São José dos Ausentes',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4318705,
        name: 'São Leopoldo',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4318804,
        name: 'São Lourenço do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4318903,
        name: 'São Luiz Gonzaga',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4319000,
        name: 'São Marcos',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4319109,
        name: 'São Martinho',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4319125,
        name: 'São Martinho da Serra',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4319158,
        name: 'São Miguel das Missões',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4319208,
        name: 'São Nicolau',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4319307,
        name: 'São Paulo das Missões',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4319356,
        name: 'São Pedro da Serra',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4319364,
        name: 'São Pedro das Missões',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4319372,
        name: 'São Pedro do Butiá',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4319406,
        name: 'São Pedro do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4319505,
        name: 'São Sebastião do Caí',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4319604,
        name: 'São Sepé',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4319703,
        name: 'São Valentim',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4319711,
        name: 'São Valentim do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4319737,
        name: 'São Valério do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4319752,
        name: 'São Vendelino',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4319802,
        name: 'São Vicente do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4319901,
        name: 'Sapiranga',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4320008,
        name: 'Sapucaia do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4320107,
        name: 'Sarandi',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4320206,
        name: 'Seberi',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4320230,
        name: 'Sede Nova',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4320263,
        name: 'Segredo',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4320305,
        name: 'Selbach',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4320321,
        name: 'Senador Salgado Filho',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4320354,
        name: 'Sentinela do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4320404,
        name: 'Serafina Corrêa',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4320453,
        name: 'Sério',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4320503,
        name: 'Sertão',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4320552,
        name: 'Sertão Santana',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4320578,
        name: 'Sete de Setembro',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4320602,
        name: 'Severiano de Almeida',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4320651,
        name: 'Silveira Martins',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4320677,
        name: 'Sinimbu',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4320701,
        name: 'Sobradinho',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4320800,
        name: 'Soledade',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4320859,
        name: 'Tabaí',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4320909,
        name: 'Tapejara',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4321006,
        name: 'Tapera',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4321105,
        name: 'Tapes',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4321204,
        name: 'Taquara',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4321303,
        name: 'Taquari',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4321329,
        name: 'Taquaruçu do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4321352,
        name: 'Tavares',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4321402,
        name: 'Tenente Portela',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4321436,
        name: 'Terra de Areia',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4321451,
        name: 'Teutônia',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4321469,
        name: 'Tio Hugo',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4321477,
        name: 'Tiradentes do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4321493,
        name: 'Toropi',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4321501,
        name: 'Torres',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4321600,
        name: 'Tramandaí',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4321626,
        name: 'Travesseiro',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4321634,
        name: 'Três Arroios',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4321667,
        name: 'Três Cachoeiras',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4321709,
        name: 'Três Coroas',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4321808,
        name: 'Três de Maio',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4321832,
        name: 'Três Forquilhas',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4321857,
        name: 'Três Palmeiras',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4321907,
        name: 'Três Passos',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4321956,
        name: 'Trindade do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4322004,
        name: 'Triunfo',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4322103,
        name: 'Tucunduva',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4322152,
        name: 'Tunas',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4322186,
        name: 'Tupanci do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4322202,
        name: 'Tupanciretã',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4322251,
        name: 'Tupandi',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4322301,
        name: 'Tuparendi',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4322327,
        name: 'Turuçu',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4322343,
        name: 'Ubiretama',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4322350,
        name: 'União da Serra',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4322376,
        name: 'Unistalda',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4322400,
        name: 'Uruguaiana',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4322509,
        name: 'Vacaria',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4322525,
        name: 'Vale Verde',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4322533,
        name: 'Vale do Sol',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4322541,
        name: 'Vale Real',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4322558,
        name: 'Vanini',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4322608,
        name: 'Venâncio Aires',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4322707,
        name: 'Vera Cruz',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4322806,
        name: 'Veranópolis',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4322855,
        name: 'Vespasiano Corrêa',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4322905,
        name: 'Viadutos',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4323002,
        name: 'Viamão',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4323101,
        name: 'Vicente Dutra',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4323200,
        name: 'Victor Graeff',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4323309,
        name: 'Vila Flores',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4323358,
        name: 'Vila Lângaro',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4323408,
        name: 'Vila Maria',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4323457,
        name: 'Vila Nova do Sul',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4323507,
        name: 'Vista Alegre',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4323606,
        name: 'Vista Alegre do Prata',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4323705,
        name: 'Vista Gaúcha',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4323754,
        name: 'Vitória das Missões',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4323770,
        name: 'Westfália',
        ibge_state_id: 43,
      },
      {
        ibge_id: 4323804,
        name: 'Xangri-lá',
        ibge_state_id: 43,
      },
    ],
  });

  await prisma.ibgeCity.createMany({
    data: [
      {
        ibge_id: 5000203,
        name: 'Água Clara',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5000252,
        name: 'Alcinópolis',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5000609,
        name: 'Amambai',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5000708,
        name: 'Anastácio',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5000807,
        name: 'Anaurilândia',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5000856,
        name: 'Angélica',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5000906,
        name: 'Antônio João',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5001003,
        name: 'Aparecida do Taboado',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5001102,
        name: 'Aquidauana',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5001243,
        name: 'Aral Moreira',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5001508,
        name: 'Bandeirantes',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5001904,
        name: 'Bataguassu',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5002001,
        name: 'Batayporã',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5002100,
        name: 'Bela Vista',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5002159,
        name: 'Bodoquena',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5002209,
        name: 'Bonito',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5002308,
        name: 'Brasilândia',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5002407,
        name: 'Caarapó',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5002605,
        name: 'Camapuã',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5002704,
        name: 'Campo Grande',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5002803,
        name: 'Caracol',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5002902,
        name: 'Cassilândia',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5002951,
        name: 'Chapadão do Sul',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5003108,
        name: 'Corguinho',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5003157,
        name: 'Coronel Sapucaia',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5003207,
        name: 'Corumbá',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5003256,
        name: 'Costa Rica',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5003306,
        name: 'Coxim',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5003454,
        name: 'Deodápolis',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5003488,
        name: 'Dois Irmãos do Buriti',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5003504,
        name: 'Douradina',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5003702,
        name: 'Dourados',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5003751,
        name: 'Eldorado',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5003801,
        name: 'Fátima do Sul',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5003900,
        name: 'Figueirão',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5004007,
        name: 'Glória de Dourados',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5004106,
        name: 'Guia Lopes da Laguna',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5004304,
        name: 'Iguatemi',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5004403,
        name: 'Inocência',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5004502,
        name: 'Itaporã',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5004601,
        name: 'Itaquiraí',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5004700,
        name: 'Ivinhema',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5004809,
        name: 'Japorã',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5004908,
        name: 'Jaraguari',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5005004,
        name: 'Jardim',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5005103,
        name: 'Jateí',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5005152,
        name: 'Juti',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5005202,
        name: 'Ladário',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5005251,
        name: 'Laguna Carapã',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5005400,
        name: 'Maracaju',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5005608,
        name: 'Miranda',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5005681,
        name: 'Mundo Novo',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5005707,
        name: 'Naviraí',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5005806,
        name: 'Nioaque',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5006002,
        name: 'Nova Alvorada do Sul',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5006200,
        name: 'Nova Andradina',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5006259,
        name: 'Novo Horizonte do Sul',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5006275,
        name: 'Paraíso das Águas',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5006309,
        name: 'Paranaíba',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5006358,
        name: 'Paranhos',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5006408,
        name: 'Pedro Gomes',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5006606,
        name: 'Ponta Porã',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5006903,
        name: 'Porto Murtinho',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5007109,
        name: 'Ribas do Rio Pardo',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5007208,
        name: 'Rio Brilhante',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5007307,
        name: 'Rio Negro',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5007406,
        name: 'Rio Verde de Mato Grosso',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5007505,
        name: 'Rochedo',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5007554,
        name: 'Santa Rita do Pardo',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5007695,
        name: 'São Gabriel do Oeste',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5007703,
        name: 'Sete Quedas',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5007802,
        name: 'Selvíria',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5007901,
        name: 'Sidrolândia',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5007935,
        name: 'Sonora',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5007950,
        name: 'Tacuru',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5007976,
        name: 'Taquarussu',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5008008,
        name: 'Terenos',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5008305,
        name: 'Três Lagoas',
        ibge_state_id: 50,
      },
      {
        ibge_id: 5008404,
        name: 'Vicentina',
        ibge_state_id: 50,
      },
    ],
  });

  await prisma.ibgeCity.createMany({
    data: [
      {
        ibge_id: 5100102,
        name: 'Acorizal',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5100201,
        name: 'Água Boa',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5100250,
        name: 'Alta Floresta',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5100300,
        name: 'Alto Araguaia',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5100359,
        name: 'Alto Boa Vista',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5100409,
        name: 'Alto Garças',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5100508,
        name: 'Alto Paraguai',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5100607,
        name: 'Alto Taquari',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5100805,
        name: 'Apiacás',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5101001,
        name: 'Araguaiana',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5101209,
        name: 'Araguainha',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5101258,
        name: 'Araputanga',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5101308,
        name: 'Arenápolis',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5101407,
        name: 'Aripuanã',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5101605,
        name: 'Barão de Melgaço',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5101704,
        name: 'Barra do Bugres',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5101803,
        name: 'Barra do Garças',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5101852,
        name: 'Bom Jesus do Araguaia',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5101902,
        name: 'Brasnorte',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5102504,
        name: 'Cáceres',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5102603,
        name: 'Campinápolis',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5102637,
        name: 'Campo Novo do Parecis',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5102678,
        name: 'Campo Verde',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5102686,
        name: 'Campos de Júlio',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5102694,
        name: 'Canabrava do Norte',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5102702,
        name: 'Canarana',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5102793,
        name: 'Carlinda',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5102850,
        name: 'Castanheira',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5103007,
        name: 'Chapada dos Guimarães',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5103056,
        name: 'Cláudia',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5103106,
        name: 'Cocalinho',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5103205,
        name: 'Colíder',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5103254,
        name: 'Colniza',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5103304,
        name: 'Comodoro',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5103353,
        name: 'Confresa',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5103361,
        name: "Conquista D'Oeste",
        ibge_state_id: 51,
      },
      {
        ibge_id: 5103379,
        name: 'Cotriguaçu',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5103403,
        name: 'Cuiabá',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5103437,
        name: 'Curvelândia',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5103452,
        name: 'Denise',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5103502,
        name: 'Diamantino',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5103601,
        name: 'Dom Aquino',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5103700,
        name: 'Feliz Natal',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5103809,
        name: "Figueirópolis D'Oeste",
        ibge_state_id: 51,
      },
      {
        ibge_id: 5103858,
        name: 'Gaúcha do Norte',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5103908,
        name: 'General Carneiro',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5103957,
        name: "Glória D'Oeste",
        ibge_state_id: 51,
      },
      {
        ibge_id: 5104104,
        name: 'Guarantã do Norte',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5104203,
        name: 'Guiratinga',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5104500,
        name: 'Indiavaí',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5104526,
        name: 'Ipiranga do Norte',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5104542,
        name: 'Itanhangá',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5104559,
        name: 'Itaúba',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5104609,
        name: 'Itiquira',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5104807,
        name: 'Jaciara',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5104906,
        name: 'Jangada',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5105002,
        name: 'Jauru',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5105101,
        name: 'Juara',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5105150,
        name: 'Juína',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5105176,
        name: 'Juruena',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5105200,
        name: 'Juscimeira',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5105234,
        name: "Lambari D'Oeste",
        ibge_state_id: 51,
      },
      {
        ibge_id: 5105259,
        name: 'Lucas do Rio Verde',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5105309,
        name: 'Luciara',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5105507,
        name: 'Vila Bela da Santíssima Trindade',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5105580,
        name: 'Marcelândia',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5105606,
        name: 'Matupá',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5105622,
        name: "Mirassol d'Oeste",
        ibge_state_id: 51,
      },
      {
        ibge_id: 5105903,
        name: 'Nobres',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106000,
        name: 'Nortelândia',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106109,
        name: 'Nossa Senhora do Livramento',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106158,
        name: 'Nova Bandeirantes',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106174,
        name: 'Nova Nazaré',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106182,
        name: 'Nova Lacerda',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106190,
        name: 'Nova Santa Helena',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106208,
        name: 'Nova Brasilândia',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106216,
        name: 'Nova Canaã do Norte',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106224,
        name: 'Nova Mutum',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106232,
        name: 'Nova Olímpia',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106240,
        name: 'Nova Ubiratã',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106257,
        name: 'Nova Xavantina',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106265,
        name: 'Novo Mundo',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106273,
        name: 'Novo Horizonte do Norte',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106281,
        name: 'Novo São Joaquim',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106299,
        name: 'Paranaíta',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106307,
        name: 'Paranatinga',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106315,
        name: 'Novo Santo Antônio',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106372,
        name: 'Pedra Preta',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106422,
        name: 'Peixoto de Azevedo',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106455,
        name: 'Planalto da Serra',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106505,
        name: 'Poconé',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106653,
        name: 'Pontal do Araguaia',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106703,
        name: 'Ponte Branca',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106752,
        name: 'Pontes e Lacerda',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106778,
        name: 'Porto Alegre do Norte',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106802,
        name: 'Porto dos Gaúchos',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106828,
        name: 'Porto Esperidião',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5106851,
        name: 'Porto Estrela',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107008,
        name: 'Poxoréu',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107040,
        name: 'Primavera do Leste',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107065,
        name: 'Querência',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107107,
        name: 'São José dos Quatro Marcos',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107156,
        name: 'Reserva do Cabaçal',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107180,
        name: 'Ribeirão Cascalheira',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107198,
        name: 'Ribeirãozinho',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107206,
        name: 'Rio Branco',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107248,
        name: 'Santa Carmem',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107263,
        name: 'Santo Afonso',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107297,
        name: 'São José do Povo',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107305,
        name: 'São José do Rio Claro',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107354,
        name: 'São José do Xingu',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107404,
        name: 'São Pedro da Cipa',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107578,
        name: 'Rondolândia',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107602,
        name: 'Rondonópolis',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107701,
        name: 'Rosário Oeste',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107743,
        name: 'Santa Cruz do Xingu',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107750,
        name: 'Salto do Céu',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107768,
        name: 'Santa Rita do Trivelato',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107776,
        name: 'Santa Terezinha',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107792,
        name: 'Santo Antônio do Leste',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107800,
        name: 'Santo Antônio de Leverger',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107859,
        name: 'São Félix do Araguaia',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107875,
        name: 'Sapezal',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107883,
        name: 'Serra Nova Dourada',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107909,
        name: 'Sinop',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107925,
        name: 'Sorriso',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107941,
        name: 'Tabaporã',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5107958,
        name: 'Tangará da Serra',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5108006,
        name: 'Tapurah',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5108055,
        name: 'Terra Nova do Norte',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5108105,
        name: 'Tesouro',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5108204,
        name: 'Torixoréu',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5108303,
        name: 'União do Sul',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5108352,
        name: 'Vale de São Domingos',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5108402,
        name: 'Várzea Grande',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5108501,
        name: 'Vera',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5108600,
        name: 'Vila Rica',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5108808,
        name: 'Nova Guarita',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5108857,
        name: 'Nova Marilândia',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5108907,
        name: 'Nova Maringá',
        ibge_state_id: 51,
      },
      {
        ibge_id: 5108956,
        name: 'Nova Monte Verde',
        ibge_state_id: 51,
      },
    ],
  });

  await prisma.ibgeCity.createMany({
    data: [
      {
        ibge_id: 5200050,
        name: 'Abadia de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5200100,
        name: 'Abadiânia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5200134,
        name: 'Acreúna',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5200159,
        name: 'Adelândia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5200175,
        name: 'Água Fria de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5200209,
        name: 'Água Limpa',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5200258,
        name: 'Águas Lindas de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5200308,
        name: 'Alexânia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5200506,
        name: 'Aloândia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5200555,
        name: 'Alto Horizonte',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5200605,
        name: 'Alto Paraíso de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5200803,
        name: 'Alvorada do Norte',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5200829,
        name: 'Amaralina',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5200852,
        name: 'Americano do Brasil',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5200902,
        name: 'Amorinópolis',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5201108,
        name: 'Anápolis',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5201207,
        name: 'Anhanguera',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5201306,
        name: 'Anicuns',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5201405,
        name: 'Aparecida de Goiânia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5201454,
        name: 'Aparecida do Rio Doce',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5201504,
        name: 'Aporé',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5201603,
        name: 'Araçu',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5201702,
        name: 'Aragarças',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5201801,
        name: 'Aragoiânia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5202155,
        name: 'Araguapaz',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5202353,
        name: 'Arenópolis',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5202502,
        name: 'Aruanã',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5202601,
        name: 'Aurilândia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5202809,
        name: 'Avelinópolis',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5203104,
        name: 'Baliza',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5203203,
        name: 'Barro Alto',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5203302,
        name: 'Bela Vista de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5203401,
        name: 'Bom Jardim de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5203500,
        name: 'Bom Jesus de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5203559,
        name: 'Bonfinópolis',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5203575,
        name: 'Bonópolis',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5203609,
        name: 'Brazabrantes',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5203807,
        name: 'Britânia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5203906,
        name: 'Buriti Alegre',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5203939,
        name: 'Buriti de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5203962,
        name: 'Buritinópolis',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5204003,
        name: 'Cabeceiras',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5204102,
        name: 'Cachoeira Alta',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5204201,
        name: 'Cachoeira de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5204250,
        name: 'Cachoeira Dourada',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5204300,
        name: 'Caçu',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5204409,
        name: 'Caiapônia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5204508,
        name: 'Caldas Novas',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5204557,
        name: 'Caldazinha',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5204607,
        name: 'Campestre de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5204656,
        name: 'Campinaçu',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5204706,
        name: 'Campinorte',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5204805,
        name: 'Campo Alegre de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5204854,
        name: 'Campo Limpo de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5204904,
        name: 'Campos Belos',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5204953,
        name: 'Campos Verdes',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5205000,
        name: 'Carmo do Rio Verde',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5205059,
        name: 'Castelândia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5205109,
        name: 'Catalão',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5205208,
        name: 'Caturaí',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5205307,
        name: 'Cavalcante',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5205406,
        name: 'Ceres',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5205455,
        name: 'Cezarina',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5205471,
        name: 'Chapadão do Céu',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5205497,
        name: 'Cidade Ocidental',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5205513,
        name: 'Cocalzinho de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5205521,
        name: 'Colinas do Sul',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5205703,
        name: 'Córrego do Ouro',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5205802,
        name: 'Corumbá de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5205901,
        name: 'Corumbaíba',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5206206,
        name: 'Cristalina',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5206305,
        name: 'Cristianópolis',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5206404,
        name: 'Crixás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5206503,
        name: 'Cromínia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5206602,
        name: 'Cumari',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5206701,
        name: 'Damianópolis',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5206800,
        name: 'Damolândia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5206909,
        name: 'Davinópolis',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5207105,
        name: 'Diorama',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5207253,
        name: 'Doverlândia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5207352,
        name: 'Edealina',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5207402,
        name: 'Edéia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5207501,
        name: 'Estrela do Norte',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5207535,
        name: 'Faina',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5207600,
        name: 'Fazenda Nova',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5207808,
        name: 'Firminópolis',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5207907,
        name: 'Flores de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5208004,
        name: 'Formosa',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5208103,
        name: 'Formoso',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5208152,
        name: 'Gameleira de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5208301,
        name: 'Divinópolis de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5208400,
        name: 'Goianápolis',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5208509,
        name: 'Goiandira',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5208608,
        name: 'Goianésia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5208707,
        name: 'Goiânia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5208806,
        name: 'Goianira',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5208905,
        name: 'Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5209101,
        name: 'Goiatuba',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5209150,
        name: 'Gouvelândia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5209200,
        name: 'Guapó',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5209291,
        name: 'Guaraíta',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5209408,
        name: 'Guarani de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5209457,
        name: 'Guarinos',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5209606,
        name: 'Heitoraí',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5209705,
        name: 'Hidrolândia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5209804,
        name: 'Hidrolina',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5209903,
        name: 'Iaciara',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5209937,
        name: 'Inaciolândia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5209952,
        name: 'Indiara',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5210000,
        name: 'Inhumas',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5210109,
        name: 'Ipameri',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5210158,
        name: 'Ipiranga de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5210208,
        name: 'Iporá',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5210307,
        name: 'Israelândia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5210406,
        name: 'Itaberaí',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5210562,
        name: 'Itaguari',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5210604,
        name: 'Itaguaru',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5210802,
        name: 'Itajá',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5210901,
        name: 'Itapaci',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5211008,
        name: 'Itapirapuã',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5211206,
        name: 'Itapuranga',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5211305,
        name: 'Itarumã',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5211404,
        name: 'Itauçu',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5211503,
        name: 'Itumbiara',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5211602,
        name: 'Ivolândia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5211701,
        name: 'Jandaia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5211800,
        name: 'Jaraguá',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5211909,
        name: 'Jataí',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5212006,
        name: 'Jaupaci',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5212055,
        name: 'Jesúpolis',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5212105,
        name: 'Joviânia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5212204,
        name: 'Jussara',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5212253,
        name: 'Lagoa Santa',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5212303,
        name: 'Leopoldo de Bulhões',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5212501,
        name: 'Luziânia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5212600,
        name: 'Mairipotaba',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5212709,
        name: 'Mambaí',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5212808,
        name: 'Mara Rosa',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5212907,
        name: 'Marzagão',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5212956,
        name: 'Matrinchã',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5213004,
        name: 'Maurilândia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5213053,
        name: 'Mimoso de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5213087,
        name: 'Minaçu',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5213103,
        name: 'Mineiros',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5213400,
        name: 'Moiporá',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5213509,
        name: 'Monte Alegre de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5213707,
        name: 'Montes Claros de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5213756,
        name: 'Montividiu',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5213772,
        name: 'Montividiu do Norte',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5213806,
        name: 'Morrinhos',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5213855,
        name: 'Morro Agudo de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5213905,
        name: 'Mossâmedes',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5214002,
        name: 'Mozarlândia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5214051,
        name: 'Mundo Novo',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5214101,
        name: 'Mutunópolis',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5214408,
        name: 'Nazário',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5214507,
        name: 'Nerópolis',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5214606,
        name: 'Niquelândia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5214705,
        name: 'Nova América',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5214804,
        name: 'Nova Aurora',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5214838,
        name: 'Nova Crixás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5214861,
        name: 'Nova Glória',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5214879,
        name: 'Nova Iguaçu de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5214903,
        name: 'Nova Roma',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5215009,
        name: 'Nova Veneza',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5215207,
        name: 'Novo Brasil',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5215231,
        name: 'Novo Gama',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5215256,
        name: 'Novo Planalto',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5215306,
        name: 'Orizona',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5215405,
        name: 'Ouro Verde de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5215504,
        name: 'Ouvidor',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5215603,
        name: 'Padre Bernardo',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5215652,
        name: 'Palestina de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5215702,
        name: 'Palmeiras de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5215801,
        name: 'Palmelo',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5215900,
        name: 'Palminópolis',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5216007,
        name: 'Panamá',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5216304,
        name: 'Paranaiguara',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5216403,
        name: 'Paraúna',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5216452,
        name: 'Perolândia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5216809,
        name: 'Petrolina de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5216908,
        name: 'Pilar de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5217104,
        name: 'Piracanjuba',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5217203,
        name: 'Piranhas',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5217302,
        name: 'Pirenópolis',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5217401,
        name: 'Pires do Rio',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5217609,
        name: 'Planaltina',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5217708,
        name: 'Pontalina',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5218003,
        name: 'Porangatu',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5218052,
        name: 'Porteirão',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5218102,
        name: 'Portelândia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5218300,
        name: 'Posse',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5218391,
        name: 'Professor Jamil',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5218508,
        name: 'Quirinópolis',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5218607,
        name: 'Rialma',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5218706,
        name: 'Rianápolis',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5218789,
        name: 'Rio Quente',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5218805,
        name: 'Rio Verde',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5218904,
        name: 'Rubiataba',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5219001,
        name: 'Sanclerlândia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5219100,
        name: 'Santa Bárbara de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5219209,
        name: 'Santa Cruz de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5219258,
        name: 'Santa Fé de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5219308,
        name: 'Santa Helena de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5219357,
        name: 'Santa Isabel',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5219407,
        name: 'Santa Rita do Araguaia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5219456,
        name: 'Santa Rita do Novo Destino',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5219506,
        name: 'Santa Rosa de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5219605,
        name: 'Santa Tereza de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5219704,
        name: 'Santa Terezinha de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5219712,
        name: 'Santo Antônio da Barra',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5219738,
        name: 'Santo Antônio de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5219753,
        name: 'Santo Antônio do Descoberto',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5219803,
        name: 'São Domingos',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5219902,
        name: 'São Francisco de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5220009,
        name: "São João d'Aliança",
        ibge_state_id: 52,
      },
      {
        ibge_id: 5220058,
        name: 'São João da Paraúna',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5220108,
        name: 'São Luís de Montes Belos',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5220157,
        name: 'São Luiz do Norte',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5220207,
        name: 'São Miguel do Araguaia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5220264,
        name: 'São Miguel do Passa Quatro',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5220280,
        name: 'São Patrício',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5220405,
        name: 'São Simão',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5220454,
        name: 'Senador Canedo',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5220504,
        name: 'Serranópolis',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5220603,
        name: 'Silvânia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5220686,
        name: 'Simolândia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5220702,
        name: "Sítio d'Abadia",
        ibge_state_id: 52,
      },
      {
        ibge_id: 5221007,
        name: 'Taquaral de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5221080,
        name: 'Teresina de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5221197,
        name: 'Terezópolis de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5221304,
        name: 'Três Ranchos',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5221403,
        name: 'Trindade',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5221452,
        name: 'Trombas',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5221502,
        name: 'Turvânia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5221551,
        name: 'Turvelândia',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5221577,
        name: 'Uirapuru',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5221601,
        name: 'Uruaçu',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5221700,
        name: 'Uruana',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5221809,
        name: 'Urutaí',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5221858,
        name: 'Valparaíso de Goiás',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5221908,
        name: 'Varjão',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5222005,
        name: 'Vianópolis',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5222054,
        name: 'Vicentinópolis',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5222203,
        name: 'Vila Boa',
        ibge_state_id: 52,
      },
      {
        ibge_id: 5222302,
        name: 'Vila Propício',
        ibge_state_id: 52,
      },
    ],
  });

  await prisma.ibgeCity.createMany({
    data: [
      {
        ibge_id: 5300108,
        name: 'Brasília',
        ibge_state_id: 53,
      },
    ],
  });
}
