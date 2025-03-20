import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private intervalId: any;

  constructor() {}

  startTimer(duration: number, onComplete: () => void) {
    let timeLeft = duration;
    this.intervalId = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
      } else {
        clearInterval(this.intervalId);
        onComplete();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
