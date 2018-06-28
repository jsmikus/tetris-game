import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { NavComponent } from './nav/nav.component';
import { RankComponent } from './rank/rank.component';
import { AboutComponent } from './about/about.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RankComponent,
    AboutComponent,
    GameComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    HomeModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
