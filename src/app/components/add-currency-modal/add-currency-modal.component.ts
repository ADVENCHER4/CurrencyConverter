import {Component} from '@angular/core';
import {ModalService} from '../../services/modal.service';
import {
  CurrenciesListComponent,
} from '../currencies-list/currencies-list.component';
import {
  NewCurrenciesListComponent,
} from '../new-currencies-list/new-currencies-list.component';

@Component({
  selector: 'app-add-currency-modal',
  standalone: true,
  imports: [
    CurrenciesListComponent,
    NewCurrenciesListComponent,
  ],
  templateUrl: './add-currency-modal.component.html',
  styleUrl: './add-currency-modal.component.scss',
})
export class AddCurrencyModalComponent {
  constructor(private modalService: ModalService) {}

  contentClick(event: MouseEvent) {
    event.stopPropagation();
  }

  close() {
    this.modalService?.close();
  }
}
