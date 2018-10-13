import { Injectable } from '@angular/core';

import { Emoji } from './emoji';
import { EMOJIS } from './mock-emojis';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmojiService {

  emojisUrl = 'assets/emojis.json';

  getEmojis(): Emoji[] {
    return EMOJIS;
  }

  constructor(private http: HttpClient) { }
}
