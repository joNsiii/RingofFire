import { Component, Input } from '@angular/core';
import { GameComponent } from '../game/game.component';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [GameComponent],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent {
  
  @Input() name: string | undefined;
  @Input() activePlayer: boolean = false;

  game = this.globalService.game;
  avatar = this.globalService.avatar;


  constructor(private globalService: GlobalService) {
  }

  
}
