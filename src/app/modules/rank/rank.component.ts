import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  score: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', score: 3354},
  {position: 2, name: 'Helium', score: 3293},
  {position: 3, name: 'Lithium', score: 3111},
  {position: 4, name: 'Beryllium', score: 2993},
  {position: 5, name: 'Boron', score: 2955},
  {position: 6, name: 'Carbon', score: 2854},
  {position: 7, name: 'Nitrogen', score: 2670},
  {position: 8, name: 'Oxygen', score: 2435},
  {position: 9, name: 'Fluorine', score: 2137},
  {position: 10, name: 'Neon', score: 2099},
];

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss']
})

export class RankComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'score'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;

}