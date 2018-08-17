import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as PIXI from 'pixi.js/dist/pixi.js';
import {style} from '@angular/animations';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @ViewChild('game')
  private gameContainer: ElementRef;
  private app = new PIXI.Application();
  private scene = new PIXI.Graphics();
  private style = new PIXI.TextStyle({
      fontFamily: "Lato",
      fill: "white",
  });
  private player = new PIXI.Text("Player: Username", this.style);
  private score = new PIXI.Text("Score:", this.style);

  constructor(private renderer: Renderer2) {
      this.app.renderer.backgroundColor = 0x414143;
      this.app.renderer.autoResize = true;
      this.app.renderer.resize(1000, 750);
      this.scene.lineStyle(2, 0x00000, 1);
      this.scene.beginFill(0xD3D3D3);
      this.scene.drawRect(0, 0, 400, 600);
      this.scene.endFill();
      this.scene.x = 300;
      this.scene.y = 60;
      this.app.stage.addChild(this.scene);
      this.app.stage.addChild(this.player);
      this.app.stage.addChild(this.score);
      this.player.position.set(400, 15);
      this.score.position.set(200, 250);
  }

  ngOnInit(): void {
      this.renderer.appendChild(this.gameContainer.nativeElement, this.app.view);
  }
}
