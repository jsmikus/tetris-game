import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AboutRoutingModule } from './modules/about/about-routing.module';
import { GameRoutingModule } from './modules/game/game-routing.module';
import { RankRoutingModule } from './modules/rank/rank-routing.module';
import { LoginRoutingModule } from './login/login-routing.module';

import { HomeModule } from './modules/home/home.module';
import { SharedModule } from './shared/shared.module';

import { NavComponent } from 'src/app/shared/components/nav/nav.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';

import { AboutComponent } from './modules/about/about.component';
import { GameComponent } from './modules/game/game.component';
import { RankComponent } from './modules/rank/rank.component';
import { TableComponent } from './modules/rank/components/table/table.component';
import { FooterComponent } from './shared/components/footer/footer.component';

import { MatInputModule, MatTableModule, MatToolbarModule, MatSortModule, MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { LoginComponent } from './login/login.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthService } from './services/auth.service';
import { ScoresService} from './modules/rank/service/scores.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ToolbarComponent,
    RankComponent,
    AboutComponent,
    GameComponent,
    TableComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    AboutRoutingModule,
    GameRoutingModule,
    RankRoutingModule,
    LoginRoutingModule,
    SharedModule,
    HomeModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule
  ],
  providers: [ScoresService, AuthService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
