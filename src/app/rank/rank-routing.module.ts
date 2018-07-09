import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RankComponent } from './rank.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'app/rank',
      component: RankComponent
    }
  ])],
  exports: [RouterModule]
})
export class RankRoutingModule {
}
