const addButton = document.getElementById('add-button');
const bookContainer = document.getElementById('book-container');
const formContainer = document.getElementById('form-container');
const submitButton = document.getElementById('submit-button');

const myLibrary = [
  {
    title: 'The Secret Life of Clouds', author: 'Skyler Rain', pages: 342, genre: 'Romance', read: false,
  },
  {
    title: 'The Mermaid\'s Curse', author: 'Marina Ocean', pages: 198, genre: 'Young Adult', read: true,
  },
  {
    title: 'The Witch\'s Almanac', author: 'Willow Moonstone', pages: 160, genre: 'Non-fiction', read: false,
  },
  {
    title: 'The Lost City of Atlantis', author: 'Leo Oceanus', pages: 294, genre: 'Historical Fiction', read: true,
  },
  {
    title: 'The Dragon\'s Hoard', author: 'Draco Flameheart', pages: 412, genre: 'Fantasy', read: false,
  },
];

function Book(title, author, genre, pages, read = '(un)read') {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.read = read;
  this.remove = function () {
    this.title = '';
    this.author = '';
    this.genre = '';
    this.pages = '';
    this.read = '';
  };
}

const resetLibrary = () => { bookContainer.textContent = ''; };

const showLibrary = () => {
  const createCard = (title, author, genre, pages) => {
    const libraryBook = document.createElement('div');
    const libraryBookTitle = document.createElement('div');
    const libraryBookAuthor = document.createElement('div');
    const libraryBookGenre = document.createElement('div');
    const libraryBookPages = document.createElement('div');
    const toggleLabel = document.createElement('label');
    const toggleCheckbox = document.createElement('input');
    const toggleSpan = document.createElement('span');
    const libraryBookRemove = document.createElement('button');

    libraryBook.classList.add('book');
    libraryBookTitle.classList.add('book-title');
    libraryBookAuthor.classList.add('book-author');
    libraryBookGenre.classList.add('book-genre');
    libraryBookPages.classList.add('book-pages');
    toggleLabel.classList.add('switch');
    toggleCheckbox.classList.add('read-toggle');
    toggleCheckbox.type = 'checkbox';
    toggleSpan.classList.add('slider', 'round');
    libraryBookRemove.id = 'book-delete-button';

    libraryBookTitle.textContent = title;
    libraryBookAuthor.textContent = author;
    libraryBookGenre.textContent = (`Genre: ${genre}`);
    libraryBookPages.textContent = (`${pages} pages`);
    libraryBookRemove.textContent = 'Remove';

    toggleLabel.append(toggleCheckbox, toggleSpan);

    libraryBookRemove.addEventListener('click', () => {
      console.log('remove');
    });

    // eslint-disable-next-line max-len
    libraryBook.append(libraryBookTitle, libraryBookAuthor, libraryBookGenre, libraryBookPages, toggleLabel, libraryBookRemove);
    bookContainer.appendChild(libraryBook);
  };

  myLibrary.forEach((book) => createCard(book.title, book.author, book.genre, book.pages));
};

const addBookToLibrary = () => {
  const newTitle = document.getElementById('new-book-title');
  const newAuthor = document.getElementById('new-book-author');
  const newGenre = document.getElementById('new-book-genre');
  const newPages = document.getElementById('new-book-pages');

  const newBook = Object.create(Book);
  newBook.title = newTitle.value;
  newBook.author = newAuthor.value;
  newBook.genre = newGenre.value;
  newBook.pages = newPages.value;

  myLibrary.push(newBook);
  // eslint-disable-next-line no-restricted-globals
  event.preventDefault();
  resetLibrary();
  showLibrary();

  newTitle.value = '';
  newAuthor.value = '';
  newGenre.value = '';
  newPages.value = '';

  formContainer.classList.remove('form-container-enabled');
  formContainer.classList.add('form-container-disabled');
};

const showForm = () => {
  formContainer.classList.remove('form-container-disabled');
  formContainer.classList.add('form-container-enabled');
};

addButton.addEventListener('click', showForm);
submitButton.addEventListener('click', addBookToLibrary);

showLibrary();
