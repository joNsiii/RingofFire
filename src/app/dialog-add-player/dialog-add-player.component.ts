import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule, _closeDialogVia } from '@angular/material/dialog';
import { GameComponent } from '../game/game.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [
    MatDialogModule,
    CommonModule,
    GameComponent,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    GameComponent,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss',
})
export class DialogAddPlayerComponent {

  name: string = '';
  avatar: string = '';

  onNoClick() {
    this.name = '';
  }


}
