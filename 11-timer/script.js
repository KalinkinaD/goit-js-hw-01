'use strict';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;

    this.refs = {
      days: this.selector.querySelector('span[data-value="days"]'),
      hours: this.selector.querySelector('span[data-value="hours"]'),
      mins: this.selector.querySelector('span[data-value="mins"]'),
      secs: this.selector.querySelector('span[data-value="secs"]'),
    };
    this.updateClockface();
  }
  updateClockface() {
    this.timerId = setInterval(() => {
      this.startTime = Date.now();
      this.deltaTime = this.targetDate.getTime() - this.startTime;
      this.days = String(
        Math.floor(this.deltaTime / (1000 * 60 * 60 * 24)),
      ).padStart(2, '0');
      this.hours = String(
        Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      ).padStart(2, '0');
      this.mins = String(
        Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60)),
      ).padStart(2, '0');
      this.secs = String(
        Math.floor((this.deltaTime % (1000 * 60)) / 1000),
      ).padStart(2, '0');

      this.refs.days.textContent = this.days;
      this.refs.hours.textContent = this.hours;
      this.refs.mins.textContent = this.mins;
      this.refs.secs.textContent = this.secs;
    }, 1000);
  }
}
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 12, 2020'),
});
