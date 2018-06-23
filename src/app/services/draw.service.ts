import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawService {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  /**
   * Set canvas element
   * 
   * @param {HTMLCanvasElement} canvas
   */
  setElement(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }

  /**
   * Method for drawind Line, takes coordinates as a params
   * 
   * @param {number} x
   * @param {number} y
   * 
   * @returns void 
   */
  drawLine(x: number, y: number) {
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
    this.ctx.save();
  }

  /**
   * Method for move canvas cursor, takes coordinates as a params
   * 
   * @param {number} x
   * @param {number} y
   * 
   * @returns void 
   */
  moveTo(x: number, y: number) {
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
  }
}
