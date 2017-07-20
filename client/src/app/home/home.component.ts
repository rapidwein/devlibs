import { Component, OnInit } from '@angular/core';
import {SentenceService} from '../sentence.service';
@Component({
  selector: 'dl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sentence = {}
  constructor(private sentenceService: SentenceService) { }

  ngOnInit() {
    this.sentenceService.getRandomSentence().subscribe(sentence => {
      this.sentence = sentence;
    });
  }

}
