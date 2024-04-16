import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { MatDialog } from '@angular/material/dialog';

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
  hoverOverCard = true;
  pickCardAnimation = false;
  playedCard = false;
  game: Game = new Game();
  currentCard: any;
  currentPlayedCard: string = '';
  name: string = '';
  dialogRef: any;

  constructor(public dialog: MatDialog) {
    this.newGame();
    console.log(this.game);
  }

  newGame() {
    this.game;
  }

  pickCard() {
    if (!this.pickCardAnimation) {
      this.pickCardAnimation = true;
      this.hoverOverCard = false;
      this.currentCard = this.game.stack.pop();
      this.game.playedCard.push(this.currentCard);
      this.playedCard = true;

      setTimeout(() => {
        this.pickCardAnimation = false;
        this.currentPlayedCard = this.currentCard;
      }, 1200);
    }
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(DialogAddPlayerComponent, {
      data: {name: this.name}
    });
    

    this.dialogRef.afterClosed().subscribe((name: string) => {
      if (name !== '') {
        this.game.players.push(name);
      }
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
