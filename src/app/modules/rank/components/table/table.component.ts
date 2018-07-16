import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

import { Player } from '../../scores/player';
import { ScoresService } from '../../service/scores.service';
import { SCORES } from '../../scores/mock-scores';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

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
