import React from 'react'

function Searchbar(props) {
    return (
        <form onSubmit={props.handleSubmit}>
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search by title." aria-label="Title" aria-describedby="basic-addon2" value={props.searchTerm} onChange={props.handleInput} />
                <div className="input-group-append">
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
        </div>
        </form>
    )
}

export default Searchbar





// value={props.searchTerm} 

// onClick={props.handleSubmit}