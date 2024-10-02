import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hover-card',
  standalone: true,
  templateUrl: './hover-card.component.html',
  styleUrls: ['./hover-card.component.css'],
  encapsulation: ViewEncapsulation.None  // Disable encapsulation
})
export class HoverCardComponent implements AfterViewInit {
  subtitleText = "Libero sint, facere excepturi, ratione fugiat ab eveniet tempore natus magni eum dolorum esse necessitatibus enim corrupti aspernatur praesentium facilis. Ex, hic?";

  ngAfterViewInit() {
    this.createSubtitle(this.subtitleText);
  }

  createWord(text: string, index: number) {
    const word = document.createElement("span");
    word.innerHTML = text;
    word.classList.add("card-subtitle-word");
    word.style.transitionDelay = `${index * 40}ms`;
    return word;
  }

  addWord(text: string, index: number) {
    const subtitle = document.getElementsByClassName("card-subtitle")[0];
    subtitle.appendChild(this.createWord(text, index));
  }

  createSubtitle(text: string) {
    text.split(" ").forEach((word, index) => this.addWord(word, index));
  }
}
