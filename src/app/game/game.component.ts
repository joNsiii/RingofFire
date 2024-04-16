import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    PlayerComponent,
    MatButtonModule,
    MatIconModule,
    DialogAddPlayerComponent,
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  [x: string]: any;
  hoverOverCard = true;
  pickCardAnimation = false;
  playedCard = false;
  currentCard: any;
  currentPlayedCard: string = '';
  game = this.globalService.game;

  constructor(private globalService: GlobalService) {}

  pickCard() {
    if (this.game.players.length == 0) {
      alert('add player to pick card´s');
    } else {
      if (!this.pickCardAnimation) {
        this.pickCardAnimation = true;
        this.hoverOverCard = false;
        this.currentCard = this.game.stack.pop();
        this.game.playedCard.push(this.currentCard);
        this.playedCard = true;

        setTimeout(() => {
          this.highlightCurrentPlayer();
          this.pickCardAnimation = false;
          this.currentPlayedCard = this.currentCard;
        }, 1200);
      }
    }
  }
  openDialog() {
    this.globalService.openDialog();
  }

  highlightCurrentPlayer() {
    this.game.currentPlayer++;
    if (this.game.currentPlayer > this.game.players.length - 1) {
      this.game.currentPlayer = 0;
    }
  }
}
