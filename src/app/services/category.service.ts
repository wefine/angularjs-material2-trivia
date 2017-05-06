import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Category } from '../model/category';
import '../rxjs-extensions';

@Injectable()
export class CategoryService {

    private _serviceUrl = 'http://localhost:3500/categories';  // URL to web api

    constructor(private http: Http) {
    }

    getCategories(): Observable<Category[]> {
        const url = this._serviceUrl;
        return this.http.get(url)
            .map(res => res.json());
    }
}
