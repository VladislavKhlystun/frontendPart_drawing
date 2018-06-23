import { Component, ViewChild, ElementRef } from '@angular/core';
import { DrawService } from './services/draw.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('risovalka') canvas: ElementRef;

  constructor(private drawService: DrawService) {
  }

  ngAfterViewInit() {
    // bootstrap draw service
    this.drawService.setElement(
      this.canvas.nativeElement
    );
  }

  drawLine() {
    this.drawService.drawLine(0, 100);
  }

  startDraw(event: MouseEvent) {
    // get relative coordinates
    const {x, y} = this.getRelativeCoordinates(event);

    this.drawService.moveTo(x, y);
    this.drawLine();
  }


  /**
   * Get coordinates from MouseEvent relative to element
   * 
   * @param {MouseEvent} e 
   * 
   * @returns relative coordinates
   */
  getRelativeCoordinates(e: MouseEvent) {
    const rect = (<HTMLElement>e.target).getBoundingClientRect();
    const x = e.clientX - rect.left; //x position within the element.
    const y = e.clientY - rect.top;  //y position within the element.
    
    return {x, y};
  }
}
