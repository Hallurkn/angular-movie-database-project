import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public wordIndex = 0;
  public zingWords = ['desires', 'needs', 'craves', 'yearns', 'wants'];
  public bgColors = ['lightblue', 'lightgrey', 'lightgoldenrodyellow', 'lightyellow', 'lightsteelblue'];

  constructor() { }

  ngOnInit() {
    this.initWords();
  }

  initWords() {
    setInterval(() => {
      if (this.wordIndex === (this.zingWords.length - 1)) {
        this.wordIndex = 0;
      } else {
        this.wordIndex++;
      }
    }, 500);
  }
}
