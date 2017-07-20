import { Component, OnInit } from '@angular/core';
import {SentenceService} from '../sentence.service';
@Component({
  selector: 'dl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  random_num = 0
  sentences = []
  constructor(private sentenceService: SentenceService) { }

  ngOnInit() {
    this.sentenceService.getSentences().subscribe(sentences => {
      this.sentences = sentences;
      this.random_num = Math.floor(Math.random() * this.sentences.length);
    });
  }

}
