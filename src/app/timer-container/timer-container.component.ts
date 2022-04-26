import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-timer-container',
  templateUrl: './timer-container.component.html',
  styleUrls: ['./timer-container.component.scss']
})
export class TimerContainerComponent implements OnInit {
  // @Input() time?: number;

  intervalForm = this.fb.group({
    intervals: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  // onSubmit(): void {
  //   this.playAudio();
  // }

  // playAudio(): void {
  //   let audio = new Audio();
  //   audio.src = "../../../assets/audio/bell.mp3";
  //   audio.load();
  //   audio.play();
  // }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.intervalForm.value);
  }

  get intervals() {
    return this.intervalForm.get('intervals') as FormArray;
  }

  addInterval() {
    this.intervals.push(this.fb.control(''));
  }

}
