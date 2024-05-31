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

function App() {
  const availableBooks = books.filter((book) => book.available);
  const unavailableBooks = books.filter((book) => !book.available);
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
        {books.map((book) => (
          <tr key={book.id} className="cart-row">
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.genre}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookTable;
