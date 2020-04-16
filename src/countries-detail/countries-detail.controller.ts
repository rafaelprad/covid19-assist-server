import { Controller, Get, HttpService, Logger } from '@nestjs/common';
import * as cheerio from 'cheerio';
import { ICountryDetail } from '../models/icountry-detail';

@Controller('countries-detail')
export class CountriesDetailController {

  private STR_SITE_CORONAVIRUS_METER: string = 'https://www.worldometers.info/coronavirus';

  constructor(private readonly httpService: HttpService) { }

  @Get('/')
  public async getCountriesDetail(): Promise<ICountryDetail[] | void> {
    let result: ICountryDetail[] | void = [];

    Logger.log('fetchCountriesDetails');

    await this.fetchCountriesDetail().then((value) => {
      result = value;
    });
    Logger.log('fetchCountriesDetails :: end');

    return result;
  }

  public async fetchCountriesDetail(): Promise<ICountryDetail[] | void> {
    let result: ICountryDetail[] = [];
    let strUrl = this.STR_SITE_CORONAVIRUS_METER;

    Logger.log('fetchCountriesDetails');

    const response = await this.httpService.get(strUrl).toPromise();

    const html = cheerio.load(response.data);
    const countriesTable = html("table#main_table_countries_today");
    const countriesTableCells = countriesTable
      .children("tbody")
      .children("tr")
      .children("td");

    const totalColumns = 11;
    const countryColIndex = 0;
    const casesColIndex = 1;
    const todayCasesColIndex = 2;
    const deathsColIndex = 3;
    const todayDeathsColIndex = 4;
    const curedColIndex = 5;
    const activeColIndex = 6;
    const criticalColIndex = 7;
    const casesPerOneMillionColIndex = 8;
    const deathsPerOneMillionColIndex = 9;
    const firstCaseColIndex = 10;

    let resultCountryDetail: ICountryDetail = <ICountryDetail>{};
    for (let i = 0; i < countriesTableCells.length - totalColumns; i += 1) {
      const cell = countriesTableCells[i];

      // get country
      if (i % totalColumns === countryColIndex) {
        let country =
          cell.children[0].data ||
          cell.children[0].children[0].data ||
          // country name with link has another level
          cell.children[0].children[0].children[0].data ||
          cell.children[0].children[0].children[0].children[0].data ||
          "";
        country = country.trim();
        if (country.length === 0) {
          // parse with hyperlink
          country = cell.children[0].next.children[0].data || "";
        }
        resultCountryDetail = <ICountryDetail>{};
        resultCountryDetail.country = country.trim() || "";
        result.push(resultCountryDetail);
      }
      // get cases
      if (i % totalColumns === casesColIndex) {
        let cases = cell.children.length != 0 ? cell.children[0].data : "";
        resultCountryDetail.cases = parseInt(
          cases.trim().replace(/,/g, "") || "0",
          10
        );
      }
      // get today cases
      if (i % totalColumns === todayCasesColIndex) {
        let cases = cell.children.length != 0 ? cell.children[0].data : "";
        resultCountryDetail.todayCases = parseInt(
          cases.trim().replace(/,/g, "") || "0",
          10
        );
      }
      // get deaths
      if (i % totalColumns === deathsColIndex) {
        let deaths = cell.children.length != 0 ? cell.children[0].data : "";
        resultCountryDetail.deaths = parseInt(
          deaths.trim().replace(/,/g, "") || "0",
          10
        );
      }
      // get today deaths
      if (i % totalColumns === todayDeathsColIndex) {
        let deaths = cell.children.length != 0 ? cell.children[0].data : "";
        resultCountryDetail.todayDeaths = parseInt(
          deaths.trim().replace(/,/g, "") || "0",
          10
        );
      }
      // get cured
      if (i % totalColumns === curedColIndex) {
        let cured = cell.children.length != 0 ? cell.children[0].data : "";
        resultCountryDetail.recovered = parseInt(
          cured.trim().replace(/,/g, "") || 0,
          10
        );
      }
      // get active
      if (i % totalColumns === activeColIndex) {
        let cured = cell.children.length != 0 ? cell.children[0].data : "";
        resultCountryDetail.active = parseInt(
          cured.trim().replace(/,/g, "") || 0,
          10
        );
      }
      // get critical
      if (i % totalColumns === criticalColIndex) {
        let critical = cell.children.length != 0 ? cell.children[0].data : "";
        resultCountryDetail.critical = parseInt(
          critical.trim().replace(/,/g, "") || "0",
          10
        );
      }
      // get total cases per one million population
      if (i % totalColumns === casesPerOneMillionColIndex) {
        let casesPerOneMillion = cell.children.length != 0 ? cell.children[0].data : "";
        resultCountryDetail.casesPerOneMillion = parseInt(
          casesPerOneMillion.trim().replace(/,/g, "") || "0",
          10
        );
      }
      // get total deaths per one million population
      if (i % totalColumns === deathsPerOneMillionColIndex) {
        let deathsPerOneMillion = cell.children.length != 0 ? cell.children[0].data : "";
        resultCountryDetail.deathsPerOneMillion = parseInt(
          deathsPerOneMillion.trim().replace(/,/g, "") || "0",
          10
        );
      }
      // get first case date
      if (i % totalColumns === firstCaseColIndex) {
        let firstCase = cell.children.length != 0 ? cell.children[0].data : "";
        resultCountryDetail.firstCase = firstCase;
      }

    }

    Logger.log('fetchCountriesDetails :: end');

    return result;
  }
}
