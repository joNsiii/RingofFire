import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GlobalService } from '../global.service';
import { TodoCardComponent } from '../todo-card/todo-card.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    PlayerComponent,
    MatButtonModule,
    MatIconModule,
    DialogAddPlayerComponent,
    TodoCardComponent,
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

  // we import our service.ts
  constructor(private globalService: GlobalService) {}

  // pick a card from stack and put in 'playedCard-array'
  pickCard() {
    if (!this.pickCardAnimation) {
      this.pickCardAnimation = true;
      this.hoverOverCard = false;
      this.currentCard = this.game.stack.pop();
      this.game.playedCard.push(this.currentCard);
      this.playedCard = true;
      this.highlightCurrentPlayer();

      setTimeout(() => {
        this.pickCardAnimation = false;
        this.currentPlayedCard = this.currentCard;
      }, 1200);
    }
  }

  // open our dialog
  openDialog() {
    this.globalService.openDialog();
  }

  // we show which player is selected
  highlightCurrentPlayer() {
    this.game.currentPlayer++;
    if (this.game.currentPlayer > this.game.players.length - 1) {
      this.game.currentPlayer = 0;
    }
  }

  // here we check which target we clicked
  filterClickedItem(event: MouseEvent) {
    const target = event.target as HTMLElement;
    // if target 'add-btn' we open a dialog to add player
    if (target.classList.contains('mat-mdc-button-touch-target')) {
      this.game.btn = true;
      this.openDialog();
    }
    // if target is img and no players are added, we open a dialog where u need to add players before u can start the game.
    if(target.tagName == 'IMG') {
      if(this.game.players.length == 0) {
        this.openDialog();
        return
      }else {
        this.pickCard();
      }
    }
  }
}
