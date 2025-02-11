import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {lastValueFrom} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AwtrixService {
	constructor(
		private http: HttpClient
	) {
	}

	public async writeText(text: string) {
		await lastValueFrom(this.http.post(environment.apiPath + '/text', {text}));
	}
}
