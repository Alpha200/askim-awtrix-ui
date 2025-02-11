import {Component, ElementRef, ViewChild} from '@angular/core';
import {AwtrixService} from '../services/awtrix.service';
import {FormsModule} from '@angular/forms';

@Component({
	selector: 'app-awtrix-text',
	imports: [
		FormsModule,
	],
	templateUrl: './awtrix-text.component.html',
	styleUrl: './awtrix-text.component.scss'
})
export class AwtrixTextComponent {
	public awtrixText: string = "";
	@ViewChild('textInput')
	textInput!: ElementRef;

	constructor(
		private awtrixService: AwtrixService,
	) {
	}

	public async sendText() {
		const text = this.awtrixText;

		if (text != null && text.length > 0) {
			try {
				await this.awtrixService.writeText(text.toUpperCase());
				this.awtrixText = "";
				this.textInput.nativeElement.focus();
			} catch (e) {
				console.error(e);
			}
		}
	}

	public async onKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			await this.sendText();
		}
	}
}
