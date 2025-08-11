import { prisma } from '..'

export default async function ufsSeeder() {
  if ((await prisma.uF.count()) > 0) return

  await prisma.uF.createMany({
    data: [
      {
        ibge_id: 11,
        acronym: 'RO',
        name: 'Rondônia'
      },
      {
        ibge_id: 12,
        acronym: 'AC',
        name: 'Acre'
      },
      {
        ibge_id: 13,
        acronym: 'AM',
        name: 'Amazonas'
      },
      {
        ibge_id: 14,
        acronym: 'RR',
        name: 'Roraima'
      },
      {
        ibge_id: 15,
        acronym: 'PA',
        name: 'Pará'
      },
      {
        ibge_id: 16,
        acronym: 'AP',
        name: 'Amapá'
      },
      {
        ibge_id: 17,
        acronym: 'TO',
        name: 'Tocantins'
      },
      {
        ibge_id: 21,
        acronym: 'MA',
        name: 'Maranhão'
      },
      {
        ibge_id: 22,
        acronym: 'PI',
        name: 'Piauí'
      },
      {
        ibge_id: 23,
        acronym: 'CE',
        name: 'Ceará'
      },
      {
        ibge_id: 24,
        acronym: 'RN',
        name: 'Rio Grande do Norte'
      },
      {
        ibge_id: 25,
        acronym: 'PB',
        name: 'Paraíba'
      },
      {
        ibge_id: 26,
        acronym: 'PE',
        name: 'Pernambuco'
      },
      {
        ibge_id: 27,
        acronym: 'AL',
        name: 'Alagoas'
      },
      {
        ibge_id: 28,
        acronym: 'SE',
        name: 'Sergipe'
      },
      {
        ibge_id: 29,
        acronym: 'BA',
        name: 'Bahia'
      },
      {
        ibge_id: 31,
        acronym: 'MG',
        name: 'Minas Gerais'
      },
      {
        ibge_id: 32,
        acronym: 'ES',
        name: 'Espírito Santo'
      },
      {
        ibge_id: 33,
        acronym: 'RJ',
        name: 'Rio de Janeiro'
      },
      {
        ibge_id: 35,
        acronym: 'SP',
        name: 'São Paulo'
      },
      {
        ibge_id: 41,
        acronym: 'PR',
        name: 'Paraná'
      },
      {
        ibge_id: 42,
        acronym: 'SC',
        name: 'Santa Catarina'
      },
      {
        ibge_id: 43,
        acronym: 'RS',
        name: 'Rio Grande do Sul'
      },
      {
        ibge_id: 50,
        acronym: 'MS',
        name: 'Mato Grosso do Sul'
      },
      {
        ibge_id: 51,
        acronym: 'MT',
        name: 'Mato Grosso'
      },
      {
        ibge_id: 52,
        acronym: 'GO',
        name: 'Goiás'
      },
      {
        ibge_id: 53,
        acronym: 'DF',
        name: 'Distrito Federal'
      }
    ]
  })
}