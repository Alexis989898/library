const btnAdd = window.document.querySelector(".add-btn");

btnAdd.addEventListener("click", openDialog);

const myLibrary = [];

function Book(name, author, pages, status) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
}