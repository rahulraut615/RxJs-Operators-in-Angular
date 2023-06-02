import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs'
import { Search } from '../Interface/search.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
url = "http://localhost:3000/data"

  constructor(private http:HttpClient) { 
  
  }

  getSearch(searchWord):Observable<Search>{
   return this.http.get<Search>(this.url+'?q='+searchWord)
  }
}
