import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Player } from './player';
import { SCORES } from './mock-scores';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  constructor() { }

  getScores(): Observable<Player[]> {
    return of(SCORES);
  }

}
