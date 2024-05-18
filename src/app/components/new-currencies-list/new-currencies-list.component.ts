import {Component} from '@angular/core';
import {CurrencyService} from '../../services/currency.service';
import {
  NewCurrencyBlockComponent,
} from '../new-currency-block/new-currency-block.component';

@Component({
  selector: 'app-new-currencies-list',
  standalone: true,
  imports: [
    NewCurrencyBlockComponent,
  ],
  templateUrl: './new-currencies-list.component.html',
  styleUrl: './new-currencies-list.component.scss',
})
export class NewCurrenciesListComponent {
  constructor(public currencyService: CurrencyService) {}
}
