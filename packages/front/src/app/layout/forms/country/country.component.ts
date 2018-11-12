import { Component, OnInit, Input } from '@angular/core';
import { CountryService } from '../../../shared/services';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {
  public countries;
  public selectedCountry;
  public population;

  constructor(private countryService: CountryService) {
    this.countryService.search()
    .subscribe(
      countries => {
        this.countries = countries;
      },
      err => {
        console.log('countryService.search====>', err)
      }
    )
    this.countryService.messages
    .subscribe(
      countries => {
        this.countries = countries;
      },
      err => {
        console.log('countryService.search====>', err)
      }
    )
  }

  public send() {
    this.countryService.update(this.selectedCountry, {population: this.population})
    .subscribe(
      success => {
        this.clean()
      },
      err => {
        console.log('countryService.update====>', err) 
      }
    )
  }

  public clean() {
    this.selectedCountry = undefined
    this.population = ""
  }
}
