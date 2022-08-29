import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, SelectMultipleControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-timer-container',
  templateUrl: './timer-container.component.html',
  styleUrls: ['./timer-container.component.scss']
})
export class TimerContainerComponent implements OnInit {

  intervalForm = this.fb.group({
    intervals: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  playAudio(): void {
    let audio = new Audio();
    audio.src = "../../../assets/audio/bell.mp3";
    audio.load();
    audio.play();
  }

  get intervals(): FormArray {
    return this.intervalForm.get('intervals') as FormArray;
  }

  sleep(ms: number): Promise<any> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async onSubmit(): Promise<void> {
    // TODO: Use EventEmitter with form value
    console.warn(this.intervalForm.value);
    this.playAudio();

    for (var interval of this.intervals.controls) {
      await this.sleep(interval.value*60000);
      this.playAudio();
      // console.log(typeof interval.value);
    }

    this.playAudio();
  }

  addInterval(): void {
    this.intervals.push(this.fb.control(''));
  }

}
