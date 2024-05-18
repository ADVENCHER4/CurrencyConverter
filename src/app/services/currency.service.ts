import {Injectable} from '@angular/core';
import {interval} from 'rxjs';
import {FetchCurrencyService} from './fetch-currency.service';
import {Rate} from '../models/rate.model';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  public rates: Rate[] = [
    new Rate('USD', 0, 0),
    new Rate('EUR', 0, 0),
    new Rate('GBP', 0, 0)];
  public newCodes: string[] = ['CNY', 'JPY', 'TRY'];
  public updateTime: number = 0;
  private period: number = 5000;

  constructor(private currencyService: FetchCurrencyService) {
    this.startTimer();
  }

  addCurrencyCode(newCode: string) {
    this.rates.push(new Rate(newCode, 0, 0));
    this.newCodes = this.newCodes.filter(code => code !== newCode);
    this.fillRates();
  }

  startTimer() {
    this.fillRates();
    interval(this.period).subscribe(() => {
      this.fillRates();
    });
  }

  fillRates() {
    this.updateTime = Date.now();
    this.currencyService.getExchangeRates().subscribe(response => {
        for (const rate of this.rates) {
          const prevRate = rate.rate;
          // костыль с делением единицы на значение курса нужен, чтобы уменьшить количество запросов к api, которых и так мало
          rate.rate = 1 / response[rate.code];
          rate.diff = rate.rate - prevRate;
        }
      },
    );
  }

}
