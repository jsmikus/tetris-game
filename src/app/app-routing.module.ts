import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RankComponent } from 'src/app/rank/rank.component';
import { AboutComponent } from 'src/app/about/about.component';
import { GameComponent } from 'src/app/game/game.component';

const routes: Routes = [
  { path: '', redirectTo: 'app/home', pathMatch: 'full' },
  { path: 'app', redirectTo: 'app/home', pathMatch: 'full' },
  { path: 'app/game', component: GameComponent, data: { title: 'Let\'s play!' } },
  { path: 'app/rank', component: RankComponent, data: { title: 'Best Scores' } },
  { path: 'app/about', component: AboutComponent, data: { title: 'How it was created?' } }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
