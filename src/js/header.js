import { refs } from './refs';
import { markupButton } from './button';
import MyLibrary from './mylibrary';

//-----------------------------------------------------------

refs.buttonHeaderHome.classList.add('nav-btn--underline');

//-----------------------------------------------------------

refs.buttonHeaderHome.addEventListener('click', onOpenHomePage);
refs.buttonHeaderLibrary.addEventListener('click', onOpenLibraryPage);

//-----------------------------------------------------------

const myLibrary = new MyLibrary('STORAGE_KEY1', 'STORAGE_KEY2');

//-----------------------------------------------------------

function onOpenHomePage() {
  refs.header.classList.remove('header-library');
  refs.buttonHeaderHome.classList.add('nav-btn--underline');
  refs.buttonHeaderLibrary.classList.remove('nav-btn--underline');
}
function onOpenLibraryPage() {
  refs.header.classList.add('header-library');
  refs.buttonHeaderLibrary.classList.add('nav-btn--underline');
  refs.buttonHeaderHome.classList.remove('nav-btn--underline');

  refs.headerForm.innerHTML = '';
  markupButton('Watched', 'watched');
  markupButton('queue', 'queue');
  document
    .querySelector('[data-action="queue"]')
    .classList.add('button--rightLocation');

  if (myLibrary.getMyLibrary().length) {
    console.log('отрисовываем все фильмы библиотеки');
  } else {
    console.log('Ваша библиотека пуста');
  }

  refs.buttonQueue = document.querySelector('[data-action="queue"]');
  refs.buttonWatched = document.querySelector('[data-action="watched"]');

  refs.buttonQueue.addEventListener('click', onOpenQueueFilms);
  refs.buttonWatched.addEventListener('click', onOpenWatchedFilms);
}

//-----------------------------------------------------------

function onOpenQueueFilms() {
  refs.buttonQueue.classList.add('button--active');
  refs.buttonWatched.classList.remove('button--active');

  console.log('Рендер фильмов, поставленных в очередь');
}

function onOpenWatchedFilms() {
  refs.buttonWatched.classList.add('button--active');
  refs.buttonQueue.classList.remove('button--active');

  console.log('Рендер просмотренных фильмов');
}
