import { Component } from '@angular/core';
import { JokeApiService } from '../services/joke-api/joke-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  jokes: any[] = [];
  jokeLimit: number = 1;
  constructor(private jokeApiService: JokeApiService) {}

  ionViewWillEnter() {
    this.jokes = [];
  }
  generateJokes() {
    this.jokeApiService.getJokes(this.jokeLimit).subscribe((data: any) => {
      this.jokes = [...this.jokes, ...data];
    });
  }

  clearJokes() {
    this.jokes = [];
  }

  updateJokeLimit(newLimit: number) {
    this.jokeLimit = newLimit;
  }
}
