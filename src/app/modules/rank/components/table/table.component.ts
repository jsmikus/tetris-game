import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ScoresService } from '../../service/scores.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
    showSpinner: boolean = true;

    displayedColumns: string[] = ['playerPosition', 'playerName', 'playerScore'];
    dataSource: MatTableDataSource<any>;

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private scoresService: ScoresService) {
    }

    ngOnInit() {
        this.scoresService.getPlayers().subscribe(data => {
            this.dataSource = new MatTableDataSource(data);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        });
        this.showSpinner = false;
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }
}
