const btnAdd = document.querySelector(".add-btn");
const dialogAdd = document.querySelector("#dialog-add");
const closeBtn = document.querySelector(".close-btn");

const myLibrary = [];

function Book(name, author, pages, status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary() {
}

btnAdd.addEventListener("click", () => {
    dialogAdd.showModal();
});

closeBtn.addEventListener("click", () => {
    dialogAdd.close();
})