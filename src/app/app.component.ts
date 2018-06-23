import { Component, ViewChild, ElementRef } from '@angular/core';
import { DrawService } from './services/draw.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('risovalka') canvas: ElementRef;

  private is_drawing = false;

  constructor(private drawService: DrawService) {
  }

  ngAfterViewInit() {
    // bootstrap draw service
    this.drawService.setElement(
      this.canvas.nativeElement
    );
  }

  draw(event: MouseEvent) {
    if (!this.is_drawing) {
      return;
    }

    // get relative coordinates on mouse move
    const {x, y} = this.getRelativeCoordinates(event);

    // TODO change painting method based on drawing tool
    this.drawService.drawLine(x, y);
  }

  omMouseUp(event: MouseEvent) {
    this.moveTo(event);
    this.is_drawing = false;
  }

  omMouseDown(event: MouseEvent) {
    this.moveTo(event);
    this.is_drawing = true;
  }

  startDraw(event: MouseEvent) {
    this.moveTo(event);
  }

  /**
   * Move canvas cursor
   * 
   * @param {MouseEvent} event
   * @returns void 
   */
  moveTo(event: MouseEvent) {
    // get relative coordinates
    const {x, y} = this.getRelativeCoordinates(event);

    this.drawService.moveTo(x, y);
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
