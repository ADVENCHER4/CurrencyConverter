import {Component} from '@angular/core';
import {
  CurrencyBlockComponent,
} from '../currency-block/currency-block.component';
import {CurrencyService} from '../../services/currency.service';

@Component({
  selector: 'app-currencies-list',
  standalone: true,
  imports: [
    CurrencyBlockComponent,
  ],
  templateUrl: './currencies-list.component.html',
  styleUrl: './currencies-list.component.scss',
})
export class CurrenciesListComponent {
  constructor(
    public currencyService: CurrencyService,
  ) {}
}
