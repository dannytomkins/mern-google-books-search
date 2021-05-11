import React, { useState, useEffect } from "react";

import api from '../utils/api'
import Card from '../components/Card'

function Saved() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        api.getSavedBooks()
        .then(books => 
            setBooks(books.data)
          )
          .catch(err => console.log(err));
      }, [])

      const handleDeleteBook = _id => {
        api.deleteBook(_id).then(results =>{
            console.log(results, "results from handleDeleteBook")
            api.getSavedBooks()
            .then(books => 
                setBooks(books.data)
            )
        })
    }

    return (
        <>
        <p>SAVED</p>
        <div className="row">
        {books.length > 0 ? books.map(book =>{
            return (
                <div class="card" >
                <div class="card-body">
                    <div className="row">
                        <div className="col-sm-2">
                            <img class="card-img-top" src={book.image ? book.image : "https://lh3.googleusercontent.com/proxy/b9i__UFsIY_s0-ZzOMk4xiWOtEvKPnYu_XIKdLZTJLwoGEiCpusHMukhSksOlU8B2O_d9o_I6CCld8_zr85EScSSh8I32RnJmO-fxvqiLJzbPKoAKcainbuUcIhCTgpXbw"} alt="Card image cap" />
                        </div>
                        <div className="col-sm-10">
                            <h5 class="card-title">{book.title}</h5>
                            <h6>{book.authors}</h6>
                            <p class="card-text">{book.description}</p>
                            <a href={book.link} class="btn btn-primary">More info</a>
                            <button onClick={() => handleDeleteBook(book._id)} class="btn btn-primary">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            )
        }) : "No books saved." }
        </div>
        </>
    )
}

export default Saved