// select Element From DOM

const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

// function to generate joke

const generateJoke = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        const data = JSON.parse(this.responseText);
        jokeEl.innerHTML = data.value;
      } else {
        jokeEl.innerHTML = 'Something went wrong';
      }
    }
    // if (xhr.readyState === 4 && xhr.status === 200) {
    //   const data = JSON.parse(xhr.responseText);
    //   jokeEl.innerHTML = data.value;
    // }
  };
  xhr.send();
};

jokeBtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);
