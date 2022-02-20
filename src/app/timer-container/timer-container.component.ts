import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-container',
  templateUrl: './timer-container.component.html',
  styleUrls: ['./timer-container.component.scss']
})
export class TimerContainerComponent implements OnInit {
  @Input() time?: number;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.playAudio();
  }

  playAudio(): void {
    let audio = new Audio();
    audio.src = "../../../assets/audio/bell.mp3";
    audio.load();
    audio.play();
  }

}
