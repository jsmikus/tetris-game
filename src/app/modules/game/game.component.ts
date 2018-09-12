import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as PIXI from 'pixi.js/dist/pixi.js';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @ViewChild('game')
  private gameContainer: ElementRef;
  private app = new PIXI.Application();

  constructor(private renderer: Renderer2) {
      this.app.renderer.backgroundColor = 0x414143;
      this.app.renderer.autoResize = true;
      this.app.renderer.resize(1000, 750);
  }

  ngOnInit(): void {
      this.renderer.appendChild(this.gameContainer.nativeElement, this.app.view);
  }
}
