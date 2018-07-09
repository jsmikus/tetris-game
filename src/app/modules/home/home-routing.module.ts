import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppHomeComponent } from './home.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'app/home',
      component: AppHomeComponent
    }
  ])],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
