import React, { useState, useEffect } from "react";


import Searchbar from '../components/Searchbar'

function Search() {

    const [searchTerm, setSearchTerm] = useState("")
    const [results, setResults] = useState([])



    const handleSubmit = event => {
        const {value} = event.target
        setSearchTerm(value)
        console.log(value)

    }
    
    return (
        <>
        <p>SEARCH</p>
        <Searchbar searchTerm={searchTerm} handleSubmit={handleSubmit}/>
        </>
    )
}

export default Search