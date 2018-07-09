import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'app/about',
      component: AboutComponent
    }
  ])],
  exports: [RouterModule]
})
export class AboutRoutingModule {
}
