import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as PIXI from 'pixi.js/dist/pixi.js';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit{

  @ViewChild('game')
  private gameContainer: ElementRef;

  private app = new PIXI.Application({width: 600, height: 800});

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
      this.renderer.appendChild(this.gameContainer.nativeElement, this.app.view);
  }
}
