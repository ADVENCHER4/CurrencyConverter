import {Component, Input} from '@angular/core';
import {DecimalPipe} from '@angular/common';
import {Rate} from '../../models/rate.model';
import {DiffPipe} from '../../pipes/diff.pipe';

@Component({
  selector: 'app-currency-block',
  standalone: true,
  imports: [
    DecimalPipe,
    DiffPipe,
  ],
  templateUrl: './currency-block.component.html',
  styleUrl: './currency-block.component.scss',
})
export class CurrencyBlockComponent {
  @Input()
  public rate?: Rate;
}
