import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { DataSource } from '@angular/cdk/collections';
import { ScoresService} from '../../service/scores.service';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    playerDetails = {
        playerName: '',
        playerScore: ''
    }

    displayedColumns: string[] = ['position', 'name', 'score']
    dataSource = new PlayerDataSource(this.player);

    constructor(private player: ScoresService, private afs: AngularFirestore) {

    }

export class PlayerDataSource extends DataSource<any> {

    constructor(private player: ScoresService) {
        super()
    }

    connect() {
        return this.player.getPlayers();
    }

    disconnect() {

    }
}
