import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  private mouseDownAt = 0;
  private prevPercentage = 0;
  private percentage = 0;
  private isDragging = false;
  private track: HTMLElement | null = null;
  private scrollTimeout: any;

  ngOnInit(): void {
    this.track = document.getElementById('image-track');
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(e: MouseEvent) {
    this.isDragging = true;
    this.mouseDownAt = e.clientX;
  }

  @HostListener('mouseup')
  onMouseUp() {
    this.isDragging = false;
    this.prevPercentage = this.percentage;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (!this.isDragging) return;

    const mouseDelta = this.mouseDownAt - e.clientX;
    this.handleMove(mouseDelta, -100);
  }

  @HostListener('wheel', ['$event'])
  onWheel(e: WheelEvent) {
    e.preventDefault();
    clearTimeout(this.scrollTimeout);
    this.handleMove(e.deltaY, -150);

    this.scrollTimeout = setTimeout(() => {
      this.prevPercentage = this.percentage;
    }, 150);
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(e: TouchEvent) {
    e.preventDefault(); // Prevent default scrolling
    this.mouseDownAt = e.touches[0].clientX;
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(e: TouchEvent) {
    e.preventDefault(); // Prevent default scrolling
    const touchDelta = this.mouseDownAt - e.touches[0].clientX;
    this.handleMove(touchDelta, -100);
  }

  @HostListener('touchend')
  onTouchEnd() {
    this.prevPercentage = this.percentage;
  }

  private handleMove(delta: number, sensitivity: number) {
    const maxDelta = window.innerWidth / 2;
    const percentage = (delta / maxDelta) * sensitivity;
    const nextPercentRaw = this.prevPercentage + percentage;

    this.percentage = Math.max(Math.min(nextPercentRaw, 0), -100);
    this.updatePosition(this.percentage);
  }

  private updatePosition(nextPercentage: number) {
    if (this.track) {
      this.track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
      }, {
        duration: 1200,
        fill: 'forwards'
      });

      const images = Array.from(this.track.getElementsByClassName('image'));
      for (const image of images) {
        image.animate({
          objectPosition: `${nextPercentage + 100}% center`
        }, {
          duration: 1200,
          fill: 'forwards'
        });
      }
    }
  }
}
