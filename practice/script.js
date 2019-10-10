function clearHistory(event) {
  let checked = event.target;
  for (let i = 0; i < check.length; i++) {
    if (check[i] !== checked) {
      check[i].checked = false;
      check[i].removeEventListener('click', clearHistory);
      line.textContent = '';
    }
  }
}


function sayHello(event) {
  let names = [];

  for (let i = 0; i < check.length; i++) {
    if (check[i].checked === true) names.push(check[i].value);
  }

  const line = document.querySelector('div[id="line"]');

  if (names.length > 0) {
    line.textContent = 'Hello ' + names.join(' ');
    
    for (let i = 0; i < check.length; i++) {
      check[i].addEventListener('click', clearHistory);
    }

  } else {
    line.textContent = 'Please select an option';
    line.style.color = 'red';

    setTimeout(() => {
      line.textContent = '';
      line.style.color = 'black';
    }, 700);
  }

}

const say = document.querySelector('input[type="button"]');
say.addEventListener('click', sayHello);

const check = document.querySelectorAll('input[type="checkbox"]');

/*
const select = document.querySelector('select');
select.addEventListener('change', sayHello);
*/
