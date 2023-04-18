import books from "./books"
import Book from "./Book"


const BookList = () => {

const getBook =(id)=>{
    const book = books.find((book)=>book.id==id);
    console.log(book)
}

return (
    <div className="bookListCover">
    <h1 className="listTittle">Amazon Best Sellers in Books</h1>
    <section className='bookList'>
        {books.map((book, index)=>{
            return <Book {...book} key={book.id} getBook={getBook} number={index}/>
        })}
    </section>
    </div>
)
}

export default BookList