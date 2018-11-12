import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../../shared/services';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnInit {
  public countries: any[];
  multi: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private countryService: CountryService) {
  }

  ngOnInit() {
    this.countryService.search()
    .subscribe(
      countries => {
        this.countries = countries
        .filter(country => {return country.population})
        .map(
          country => {
            if (country.population) {
              return {name: country.name, value: country.population}
            }
          }
        );
      },
      err => {
        console.log('countryService.search====>', err)
      }
    )
  }
}
