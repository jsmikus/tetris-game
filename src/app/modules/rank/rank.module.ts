import {NgModule} from '@angular/core';
import {RankComponent} from './rank.component';
import {SharedModule} from '../../shared/shared.module';
import {TableComponent} from './components/table/table.component';

@NgModule({
  declarations: [
    RankComponent,
    TableComponent
  ],
  imports: [
    RankModule,
    SharedModule
  ],
  exports: [
    RankComponent
  ]
})
export class RankModule {
}
