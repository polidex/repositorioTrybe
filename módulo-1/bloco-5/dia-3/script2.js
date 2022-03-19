function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
function createDaysOfTheMounth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.getElementById('days');
  const holidays = [24, 25, 31];
  const fridays = [4, 11, 18, 25];

  for (let i = 0; i < dezDaysList.length; i += 1) {
    const days = dezDaysList[i];
    const createDays = document.createElement('li');
    createDays.innerHTML = days;
    createDays.classList.add("day");

    for (let iHD = 0; iHD < holidays.length; iHD += 1) {
      if (dezDaysList[i] === holidays[iHD]) {
        createDays.classList.add("holiday");
      }
    }

    for (let iFD = 0; iFD < fridays.length; iFD += 1) {
      if (dezDaysList[i] === fridays[iFD]) {
        createDays.classList.add("friday");
      }
    }
      daysList.appendChild(createDays);
    }
  }
  
createDaysOfTheMounth();