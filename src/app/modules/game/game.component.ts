import { Component, OnInit } from '@angular/core';
import * as PIXI from 'pixi.js/dist/pixi.js';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  title = 'app';

  constructor() {
    // Create a Pixi Application
    const app = new PIXI.Application({width: 600, height: 800});

    app.renderer.view.style.display = 'block';
    app.renderer.view.style.margin = 'auto';

    // Add the canvas that Pixi automatically created for you to the HTML document
    document.body.appendChild(app.view);
  }

}
