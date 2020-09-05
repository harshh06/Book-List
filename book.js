// class for book
class book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
};

//ui class
class UI{
    //no need of contructor .. static functions

    static addBookToList(book){
        // creating a new table row..
        var newRow = document.createElement('tr');
        newRow.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href = "#" class = "btn btn-danger btn-sm delete">X</a></td>
        `
        var tableRow = document.querySelector('#book-list');
        tableRow.appendChild(newRow);
    }
    static clearAll(){
        document.getElementById('title').value = "";
        document.getElementById('author').value = "";
        document.getElementById('isbn').value = "";
    }

    static deleteBook(target){
        if(target.classList.contains('delete')){
            target.parentElement.parentElement.remove();
            alert('Book removed!!');
        }
    }
    static showAlert(message, classType){
        var div = document.createElement('div');
        div.className = `alert alert-${classType}`;
        div.appendChild(document.createTextNode(message));
        var container = document.querySelector('.container');
        var form = document.querySelector('#book-form');
        container.insertBefore(div, form);
        // remove the displayed message after 3 sec..
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
        // 3sec = 3000 ms..
    }

}

//events

//to displat book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var isbn = document.getElementById('isbn').value;
    newBook = new book(title, author, isbn);
    UI.addBookToList(newBook);
    UI.showAlert('Book Aded Successfully !! ;)', 'success');
    UI.clearAll();
});

//to delete book
document.querySelector('#book-list').addEventListener('click', (e) =>{
    UI.deleteBook(e.target);
});

