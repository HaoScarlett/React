import BookTable from "./BookTable";

const books = [
  {
    id: 1,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    available: true,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    available: false,
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    available: true,
  },
  {
    id: 4,
    title: "Moby Dick",
    author: "Herman Melville",
    genre: "Adventure",
    available: false,
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    available: true,
  },
];

const filterBooks = (books,isAvailable)=> books.filter(book => book.available === isAvailable);

function App() {
  const availableBooks = filterBooks(books,true);
  const unavailableBooks = filterBooks(books,false);
  return (
    <>
      <div>
        <h2>Books Available </h2>
        <BookTable books={availableBooks} />
      </div>
      <div>
        <h2>Books Unavailable</h2>
        <BookTable books={unavailableBooks} />
      </div>
    </>
  );
}

export default App;

function BookTable({ books }) {
  return (
    <table className="shopping-cart">
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        {books.map({id,title,author,genre} => (
          <tr key={id} className="cart-row">
            <td>{title}</td>
            <td>{author}</td>
            <td>{genre}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookTable;
