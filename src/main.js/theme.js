import foodList from '../menu.json';
import itemsTemplate from '../templates/galery-items.hbs';

const markup = itemsTemplate(foodList);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  list: document.querySelector('.js-menu'),
  toolbar: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

refs.list.insertAdjacentHTML('beforeend', markup);
refs.toolbar.addEventListener('change', changeTheme);
refs.body.classList.add('light-theme');

// function that changes theme of bodys //

const changesTheme = (oldTheme, newTheme) => {
  refs.body.classList.add(newTheme);
  refs.body.classList.remove(oldTheme);
  localStorage.setItem('theme', newTheme);
};

function changeTheme(event) {
  event.preventDefault();
  if (refs.body.className === Theme.LIGHT) {
    changesTheme(Theme.LIGHT, Theme.DARK);
  } else {
    changesTheme(Theme.DARK, Theme.LIGHT);
  }
}

const saved = localStorage.getItem('theme', JSON.stringify(Theme));
console.log(saved);

if (saved === Theme.DARK) {
  refs.toolbar.checked = true;
  refs.body.className = Theme.DARK;
}

// function changeTheme(event) {
//   event.preventDefault();
//   if (refs.body.className === Theme.LIGHT) {
//     refs.body.classList.add(Theme.DARK);
//     refs.body.classList.remove(Theme.LIGHT);
//     localStorage.setItem('theme', Theme.DARK);
//   } else {
//     refs.body.classList.remove(Theme.DARK);
//     refs.body.classList.add(Theme.LIGHT);
//     localStorage.setItem('theme', Theme.LIGHT);
//   }
// }
