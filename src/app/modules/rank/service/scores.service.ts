import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class ScoresService {

    constructor(private afs: AngularFirestore) { }

    getPlayers() {
        return this.afs.collection('players', ref => ref.orderBy('playerScore', 'desc')).valueChanges();
    }
}