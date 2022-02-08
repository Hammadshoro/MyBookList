class Book{
   constructor (title,author,isbn){
       this.title=title;
       this.author=author;
       this.isbn=isbn;

   }
}

class UI {
    static displayBooks() {
        const StoredBooks =[
            {
            title:'Book One',
            author:'hammad shoro',
            isbn:'4555671'
        }, 
       {
           title:'Book Two',
           author:'alex albert',
           isbn:'4556367'
       }    
    ];
       const books = StoredBooks;
       books.forEach((book)=> UI.addBookToList(book));
 
    }
       static addBookToList(book){
       const list = document.querySelector('#book-list');
       const row = document.createElement('tr');
       row.innerHTML =  `<td>${book.title}</td>
                        <td>${book.author}</td>
                        <><td>${book.isbn}</td>
                        <td><a href="a" class="btn btn-danger btn-sm delete">X</a></td>
                        `;

                        list.appendChild(row);

    }
    static deleteBook(el){
        if(el.classlist.contains('delet')){
            el.parentElement.parentElement.remove();

        }
    }
   
    static showAlert(message,classname){
        const div = document.createElement('div');
        div.className = `alert alert-${classname}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div,form);
        setTimeout(() =>document.querySelector('.alert').remove(),
        3000);
    }

    static clearField(){
    document.querySelector('#tilte').value='';
    document.querySelector('#author').value='';
    document.querySelector('#isbn').value='';
    }

}

    document.addEventListener('DOMContentLoaded',UI.displayBooks);
    document.querySelector('#book-list').addEventListener('submit',(e)
    =>
     {
        e.preventDefault();
         const title = document.querySelector('#title').value;
         const author = document.querySelector('#author').value;
         const isbn = document.querySelector('#isbn').value;
         
         
         if (title ==='' || author ==='' || isbn===''){
             UI.Alert('please fill the field','danger');
         } else{
             const book = new Book(title,author,isbn);
         
            UI.addBookToList(book);

            UI.showAlert('Book Added','succes')
   
            UI.clearField();
        }
         
     });

     document.querySelector('#book-list').addEventListener('click',(e)
      =>{
          UI.deletebook(e.target)
      } );

     