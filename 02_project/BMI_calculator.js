const form1 = document.querySelector('form')
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form1.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const height1 = parseInt(document.querySelector('#height').value);
    const weight1 = parseInt(document.querySelector('#weight').value);
    const results1 = document.querySelector('#results');
  
    if (height1 === '' || height1 < 0 || isNaN(height1)) {
      results1.innerHTML = `Please give a valid height ${height1}`;
    } else if (weight1 === '' || weight1 < 0 || isNaN(weight1)) {
      results1.innerHTML = `Please give a valid weight ${weight1}`;
    } else {
      const bmi = (weight1 / ((height1 * height1) / 10000)).toFixed(2);
      //show the result
      results1.innerHTML = `<span>${bmi}</span>`;
    }
});