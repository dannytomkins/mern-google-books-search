import axios from "axios";

export default {
    getAPI: function(title){
    return    axios.get("/api/googlebooks/"+title)
    },
    saveBook: function(newBook){
        return axios.post("/api/books", newBook)
    },
    deleteBook: function(bookId){
        return axios.delete("/api/books/"+bookId)
    },
    getSavedBooks: function(){
        return axios.get("/api/books")
    }
}