const waking = () => 'Acordando!!';
const breakFast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (func) => func();

console.log(doingThings(waking));