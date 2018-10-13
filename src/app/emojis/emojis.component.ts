import { Component, OnInit } from '@angular/core';
import { Emoji } from '../emoji';
import { EmojiService } from '../emoji.service';

@Component({
  selector: 'app-emojis',
  templateUrl: './emojis.component.html',
  styleUrls: ['./emojis.component.css']
})
export class EmojisComponent implements OnInit {

  emojis: Emoji[];

  getEmojis(): void {
    this.emojis = this.emojiService.getEmojis();
  }

  constructor(private emojiService: EmojiService) { }

  likedEmoji: Emoji;
  onLike(emoji: Emoji): void{
    if(emoji.liked === '+'){
      emoji.liked = '-'
    }else{
      emoji.liked = '+'
    }
  }

  ngOnInit() {
    this.getEmojis();
  } 
}
