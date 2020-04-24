
const addZero = (time: number): string => ('0' + time).slice(-2);
export const timeToDay = (time: number): string => addZero(Math.floor(time / (1000 * 60 * 60 * 24)));
export const timeToHours = (time: number): string =>  addZero(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
export const timeToMin = (time: number): string => addZero(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
export const timeToSec = (time: number): string => addZero(Math.floor((time % (1000 * 60)) / 1000));
     // var timeToHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     // var timeToMin = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     // var timeToSec = Math.floor((distance % (1000 * 60)) / 1000);
