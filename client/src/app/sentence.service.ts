import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';

@Injectable()
export class SentenceService {

  constructor(private http: Http) { }

  getSentences() {
    return this.http.get('http://localhost:8080')
      .map(response => response.json())
      .map(sentences => this.transformSentences(sentences));
  }

  getSentence(_id: string) {
    return this.getSentences().map(sentences => {
      for (let sentence of sentences) {
        if (sentence._id === _id) {
          return sentence;
        }
      }
      return null;
    });
  }
  getRandomSentence() {
    return this.http.get('http://localhost:8080/random')
      .map(response => response.json())
      .map(sentence => this.transformSentences([sentence]))
      .map(sentences => sentences[0]);
  }

  transformSentences(originalSentences) {
    return originalSentences.map(sentence => {
      sentence.words = sentence.sentence
        .match(/{{.+?}}/g)
        .map(word => word.replace(/[{}]/g, ''));

      return sentence;
    });
  }

  interpolate(sentence, queryParams) {
    for (let key in queryParams) {
      sentence.sentence = sentence.sentence.replace(/{{.+?}}/, queryParams[key]);
    }

    return sentence;
  }
}
