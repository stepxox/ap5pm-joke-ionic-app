import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokeApiService {
  private apiUrl = 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes';
  private headers = {
    'X-RapidAPI-Key': 'f9d20c663dmsh2229b9fde221db0p128f52jsn954c5436def1',
    'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
  };

  constructor(private http: HttpClient) {}

  getJokes(limit: number = 1) {
    return this.http.get(this.apiUrl, { headers: this.headers, params: { limit } });
  }
}
