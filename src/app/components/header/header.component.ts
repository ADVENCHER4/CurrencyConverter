import {Component} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ModalService} from '../../services/modal.service';
import {CurrencyService} from '../../services/currency.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    DatePipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    private modalService: ModalService,
    public currencyService: CurrencyService,
  ) {}

  openModal() {
    this.modalService?.open();
  }
}
