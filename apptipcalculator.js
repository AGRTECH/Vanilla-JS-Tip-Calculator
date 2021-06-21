const billamount = document.getElementById('billamount');
let service = document.getElementById('service');
const numOfPeople = document.querySelector('.people');
const calculateBtn = document.querySelector('.calculate-btn')
let total = document.querySelector('.total');
let totalHTwo = document.querySelector('.totaltext');

calculateBtn.addEventListener('click', function(){


  if(service.value === 'horrible'){
    service = 0.05;
  } else if(service.value === 'ok'){
    service = 0.15;
  } else if(service.value === 'good'){
    service = 0.20;
  } else if(service.value === 'amazing'){
    service = 0.30;
  }

  

  totalHTwo.innerHTML = 'Total tip is: $' + parseInt((billamount.value)) * (service) / parseInt((numOfPeople.value)) + ' per person';

})

