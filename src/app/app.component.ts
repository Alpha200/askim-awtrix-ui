import {Component} from '@angular/core';
import {AwtrixTextComponent} from './awtrix-text/awtrix-text.component';

@Component({
	selector: 'app-root',
	imports: [AwtrixTextComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
}
