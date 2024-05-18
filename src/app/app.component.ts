import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {
  CurrenciesListComponent,
} from './components/currencies-list/currencies-list.component';
import {
  AddCurrencyModalComponent,
} from './components/add-currency-modal/add-currency-modal.component';
import {ModalService} from './services/modal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, HeaderComponent, CurrenciesListComponent,
    AddCurrencyModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    public modalService: ModalService,
  ) {}
}
