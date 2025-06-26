import React, { useState } from "react";
import Modal from "./components/Modal";
import Image1 from "./assets/mockingbird.jpg";
import Image2 from "./assets/1984.jpg";
import Image3 from "./assets/great-gatsby.jpg";
import Image4 from "./assets/pride-and-prejudice.jpg";
import Image5 from "./assets/moby.jpg";
import Image6 from "./assets/catcher.jpg";
import Image7 from "./assets/lord.jpeg";
import Image8 from "./assets/hobbit.png";
import Image9 from "./assets/new.jpg";
import Image10 from "./assets/punishment.jpg";

function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      image: Image1,
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      year: 1949,
      image: Image2,
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      image: Image3,
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      image: Image4,
    },
    {
      id: 5,
      title: "Moby-Dick",
      author: "Herman Melville",
      year: 1851,
      image: Image5,
    },
    {
      id: 6,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951,
      image: Image6,
    },
    {
      id: 7,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      year: 1954,
      image: Image7,
    },
    {
      id: 8,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937,
      image: Image8,
    },
    {
      id: 9,
      title: "Brave New World",
      author: "Aldous Huxley",
      year: 1932,
      image: Image9,
    },
    {
      id: 10,
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      year: 1866,
      image: Image10,
    },
  ]);

  const [showNotif, setShowNotif] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleBuyNow = () => {
    setShowNotif(true);
    setTimeout(() => setShowNotif(false), 2000);
  };

  return (
    <>
      {showNotif && (
        <div className="fixed top-2 right-2 z-50 py-5 px-7 rounded bg-green-500 text-white shadow-lg transition-all duration-300">
          <h1>Congratulations, successful!</h1>
        </div>
      )}

      {openModal && <Modal closeModal={setOpenModal} />}

      <div className="mx-auto relative z-0">
        <ul className="grid grid-cols-3 gap-5 justify-between p-5 *:p-5 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4">
          {books.map((book) => (
            <li
              key={book.id}
              className="bg-black/40 relative grid grid-cols-1 items-center gap-2 rounded hover:scale-105 transition-all"
            >
              <span
                onClick={() => setOpenModal(true)}
                className="openModalBtn absolute top-2 right-3 bg-gray-500 p-0.5 px-2.5 rounded-full font-semibold cursor-pointer text-sm"
              >
                !
              </span>
              <div>
                <h3 className="font-semibold text-white">{book.title}</h3>
                <p className="text-white">{book.author}</p>
              </div>
              <img
                src={book.image}
                alt={book.title}
                width="100"
                className="mx-auto mt-5 rounded"
              />
              <button className="btn btn-neutral mt-3" onClick={handleBuyNow}>
                Buy now
              </button>
            </li>
          ))}
        </ul>

        <div className="container">
          <div className="text-center py-6">
            <h1 className="text-white font-bold">Created by Asadbek Tursunaliyev</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
