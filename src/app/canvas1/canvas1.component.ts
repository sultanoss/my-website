import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-canvas1',
  templateUrl: './canvas1.component.html',
  styleUrls: ['./canvas1.component.scss'],
})
export class Canvas1Component implements OnInit, AfterViewInit {
  @ViewChild('myCanvas') myCanvas!: ElementRef<HTMLCanvasElement>;
  public ctx!: CanvasRenderingContext2D | null;
  ngAfterViewInit(): void {
    this.ctx = this.myCanvas.nativeElement.getContext('2d');
    this.draw();
  }

  private draw() {
    this.ctx.fillStyle = 'red';
    this.ctx.lineWidth = 5;
    this.ctx.beginPath();
    this.ctx.arc(100, 100, 50, 0, Math.PI * 2);
    this.ctx.fill();
  }

  ngOnInit(): void {}
}
