import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GameComponent } from './game.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'app/game',
      component: GameComponent
    }
  ])],
  exports: [RouterModule]
})
export class GameRoutingModule {
}
