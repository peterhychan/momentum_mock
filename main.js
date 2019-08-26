const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');
const quote = document.getElementById('quote');

function getTime() {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(minute)}<span>:</span>${addZero(second)}`;

  setTimeout(getTime, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBackground() {
  let today = new Date();
  let hour = today.getHours();
  switch(true){
    case(hour<12):
      document.body.style.backgroundImage = "url('./img/day.jpg')";
      greeting.textContent = 'Morning, ';
      break;
    case(hour<18):
      document.body.style.backgroundImage = "url('./img/day.jpg')";
      greeting.textContent = 'Good Afternoon, ';
      break;
    default:
      document.body.style.backgroundImage = "url('./img/evening.jpg')";
      greeting.textContent = 'How Is Your Day, ';
      break;
  }
}

function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = 'Dream Chaser';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

function setName(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

function setQuote(){
  const x = Math.floor(Math.random()*10);
  const random_quote = [
    "'Today I will do what others would not, so tomorrow I can do what others cannot.'",
    "'Life is not about finding yourself. Life is about creating yourself.'",
    "'I have found that if you love life, life will love you back.'",
    "'Life is really simple, but we insist on making it complicated.'",
    "'In the end, it's not the years in your life that count. It's the life in your years.'",
    "'A decision made at night may be changed in the morning.'",
    "'A little axe can cut down a big tree.'",
    "'A rolling stone gathers no moss.'",
    "'Never say never.'",
    "'You may say I am a dreamer. But I am not the only one.'"
  ];
  quote.textContent=random_quote[x];
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

getTime();
setQuote();
setBackground();
getName();

