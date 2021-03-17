import React, { useState, useEffect } from "react";


import Searchbar from '../components/Searchbar'
import api from '../utils/api'
import Card from '../components/Card'

function Search() {

    const [searchTerm, setSearchTerm] = useState("")
    const [results, setResults] = useState([])



    const handleInput = event => {
        const {value} = event.target
        setSearchTerm(value)
        console.log(value)
    }
    const handleSubmit = event => {
        event.preventDefault()
        api.getAPI(searchTerm).then(results => {
            console.log(results)
            setResults(results.data)
        })
    }
    const handleSaveBook = book => {
        const newBook = {
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink
        }
        api.saveBook(newBook).then(results =>{
            console.log(results)
        })
    }
    
    return (
        <>
        <p>SEARCH</p>
        <Searchbar searchTerm={searchTerm} handleInput={handleInput}  handleSubmit={handleSubmit}/>
        <div className="row">
        {results.length > 0 ? results.map(book =>{
            return (
                <div className="col-sm-12">
                <Card  book={book} handleSaveBook={handleSaveBook} />
                </div>
            )
        }) : "book not found" }
        </div>
        </>
    )
}

export default Search