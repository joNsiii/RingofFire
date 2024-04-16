import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../app/dialog-add-player/dialog-add-player.component';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  game: Game = new Game();
  dialogRef: any;
  name: string = '';
  avatar: number = 0;

  constructor(private dialog: MatDialog) {
    this.newGame();
    console.log(this.game);
  }

  newGame() {
    this.game;
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(DialogAddPlayerComponent, {
      data: { name: this.name },
    });
  }

  chooseName() {
    this.dialogRef.afterClosed().subscribe((name: string) => {
      if(this.game.players.length >= 6) {
        return
      }else {
        this.game.players.push(name);
        this.randomNumber();
      }
    });
  }

  randomNumber() {
    this.avatar = Math.round(Math.random() * 7);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
