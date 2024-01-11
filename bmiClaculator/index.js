const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const result = document.querySelector('#result');
const weight = parseFloat(document.querySelector('#weight').value);
    const height = parseFloat(document.querySelector('#height').value);
if(height == "" || height < 0 || isNaN(height)) {
  result.innerHTML = 'please enter a valid height'
}  else if(weight == "" || weight < 0 || isNaN(weight)) {
  result.innerHTML = 'please enter a valid weight'
} else {
  const bmi = (weight * ((height * height) / 10000)).toFixed(2);
  // weightGuide(bmi,result);
  result.innerHTML = `Your BMI is ${bmi} ${weightGuideMessage(bmi)}`;
}
})

function weightGuideMessage(bmi) {
  if (bmi < 18.5) {
    return 'You are underweight. Eat more!';
  } else if (bmi <= 24.9) {
    return 'You are normal. Keep it up!';
  } else if (bmi <= 30) {
    return 'You are overweight. Eat less!';
  } else {
    return 'You are obese. Eat less!';
  }
}

