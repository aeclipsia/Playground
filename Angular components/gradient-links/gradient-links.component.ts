import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-gradient-links',
  standalone: true,
  templateUrl: './gradient-links.component.html',
  styleUrls: ['./gradient-links.component.css']
})
export class GradientLinksComponent implements AfterViewInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const links = this.elRef.nativeElement.querySelectorAll('.link');
    
    links.forEach((link: HTMLElement) => {
      this.renderer.listen(link, 'mousemove', (e: MouseEvent) => {
        const decimal = e.clientX / link.offsetWidth;
        const basePercent = 60;
        const percentRange = 20;
        const adjustablePercent = percentRange * decimal;
        const colorPercent = basePercent + adjustablePercent;
        link.style.setProperty('--color-percent', `${colorPercent}%`);
      });
    });
  }
}
