import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardHeaderComponent } from './commons/components/card-header/card-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'barber-shop-ui';
}
