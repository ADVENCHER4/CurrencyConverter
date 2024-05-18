import {Component, Input} from '@angular/core';
import {CurrencyService} from '../../services/currency.service';

@Component({
  selector: 'app-new-currency-block',
  standalone: true,
  imports: [],
  templateUrl: './new-currency-block.component.html',
  styleUrl: './new-currency-block.component.scss',
})
export class NewCurrencyBlockComponent {
  @Input()
  public code?: string;

  constructor(private currencyService: CurrencyService) {}

  addCode() {
    this.currencyService.addCurrencyCode(this.code!);
  }
}
