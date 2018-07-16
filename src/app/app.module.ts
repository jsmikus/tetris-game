import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AboutRoutingModule } from './modules/about/about-routing.module';
import { GameRoutingModule } from './modules/game/game-routing.module';
import { RankRoutingModule } from './modules/rank/rank-routing.module';

import { HomeModule } from './modules/home/home.module';
import { SharedModule } from './shared/shared.module';

import { NavComponent } from './shared/components/nav/nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';

import { AboutComponent } from './modules/about/about.component';
import { GameComponent } from './modules/game/game.component';
import { RankComponent } from './modules/rank/rank.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RankComponent,
    AboutComponent,
    GameComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    AboutRoutingModule,
    GameRoutingModule,
    RankRoutingModule,
    SharedModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
