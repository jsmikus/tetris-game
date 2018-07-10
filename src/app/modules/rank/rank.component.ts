import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

import { Player } from '../../player';
import { ScoresService } from '../../scores.service';
import { SCORES } from 'src/app/mock-scores';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss']
})

export class RankComponent implements OnInit {

  scores: Player[];
  displayedColumns: string[] = ['position', 'name', 'score'];
  dataSource = new MatTableDataSource(SCORES);

  constructor(private scoresService: ScoresService) { }

  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.getScores();
  }

  getScores(): void {
    this.scoresService.getScores()
        .subscribe(scores => this.scores = scores);
  }
}
