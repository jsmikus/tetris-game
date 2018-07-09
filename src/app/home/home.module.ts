import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { AppHomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AppHomeComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule
  ],
  exports: [
    AppHomeComponent
  ]
})
export class HomeModule {
}
