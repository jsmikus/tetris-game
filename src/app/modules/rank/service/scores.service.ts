import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from "rxjs/operators";
import { Observable } from "rxjs/internal/Observable";

@Injectable()
export class ScoresService {

    constructor(private afs: AngularFirestore) { }

    getPlayers(): Observable<Player[]>{
        return this.afs.collection('players', ref => ref.orderBy('playerScore', 'desc'))
            .valueChanges()
            .pipe(map(data=> data.map((playerData, index) => <Player>{playerPosition: index + 1, ...playerData})));
    }
}

export interface Player {

    playerPosition: number;
    playerName: string;
    playerScore: number;
}