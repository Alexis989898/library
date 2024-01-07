const plusBtn = document.querySelector(".plus-btn");
const dialogAdd = document.querySelector("#dialog-add");
const closeBtn = document.querySelector(".close-btn");
const formAdd = document.querySelector("#form-add");
const btnAdd = document.querySelector(".form-add-btn");
const bookList = document.querySelector(".book-list");

const myLibrary = [];

function Book(name, author, pages, status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
}



function addBookToLibrary(book) {
    myLibrary.push(book);
}

function removeBookFromLibrary(book) {
    const bookIndex = myLibrary.findIndex((x => x.name == book.name));
    myLibrary.splice(bookIndex, 1);
}

function createBookDiv(book) {
    const bookDiv = document.createElement("div");
    const bookName = document.createElement("span");
    const bookAuthor = document.createElement("span");
    const bookPages = document.createElement("span");
    const readCheck = document.createElement("input");
    const readCheckText = document.createElement("span");
    const readWrapper = document.createElement("div");
    const deleteBtn = document.createElement("button");

    deleteBtn.className = "delete-book";
    deleteBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"> <path fill="var(--text)" d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /> </svg>';
    deleteBtn.addEventListener("click", function (){
        removeBookFromLibrary(book);
        bookDiv.remove();
    })


    bookName.innerText = book.name;
    bookAuthor.innerText = book.author;
    bookPages.innerText = book.pages + " pages";

    readCheckText.innerText = "Read";
    readCheck.type = "checkbox";
    readCheckText.className = "read-text"
    readCheck.className = "read-check";
    readCheck.addEventListener('change', function () {
        if (this.checked) {
            bookDiv.style = "background: linear-gradient(var(--primary) 10%, var(--secondary) 90%);";
        } else {
            bookDiv.style = "background: linear-gradient(#400b0b 0%, #881616 100%);";
        }
    });

    readWrapper.appendChild(readCheckText);
    readWrapper.appendChild(readCheck);

    bookDiv.appendChild(deleteBtn);
    bookDiv.appendChild(bookName);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPages);
    bookDiv.appendChild(readWrapper);

    bookDiv.className = "book-wrapper";


    bookList.appendChild(bookDiv);
}


plusBtn.addEventListener("click", () => {
    dialogAdd.showModal();
});

closeBtn.addEventListener("click", () => {
    dialogAdd.close();
})

btnAdd.addEventListener("click", function (e) {
    e.preventDefault();

    const formData = new FormData(formAdd);

    if (formData.get("input-name") == "" || formData.get("input-author") == "") {
        alert("Input every information of the book");
    } else if (100000 >= formData.get("input-pages") <= 0) {
        alert("Input a number of pages from 1 to 100.000")
    } else {
        let formName = formData.get("input-name");
        let formAuthor = formData.get("input-author");
        let formPages = formData.get("input-pages");

        const newBook = new Book(formName, formAuthor, formPages, false);

        addBookToLibrary(newBook);
        createBookDiv(newBook);

        dialogAdd.close();
        formAdd.reset();
    }
})