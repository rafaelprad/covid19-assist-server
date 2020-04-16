export interface ICountryDetail {
  id: string,
  country: string,
  cases: number,
  todayCases: number,
  deaths: number,
  todayDeaths: number,
  recovered: number,
  active: number,
  critical: number,
  casesPerOneMillion: number,
  deathsPerOneMillion: number,
  firstCase: string
}