function Card(props) {
    return (
        <div class="card" >
            <div class="card-body">
                <div className="row">
                    <div className="col-sm-2">
                        <img class="card-img-top" src={props.book.volumeInfo.imageLinks ? props.book.volumeInfo.imageLinks.thumbnail : "https://lh3.googleusercontent.com/proxy/b9i__UFsIY_s0-ZzOMk4xiWOtEvKPnYu_XIKdLZTJLwoGEiCpusHMukhSksOlU8B2O_d9o_I6CCld8_zr85EScSSh8I32RnJmO-fxvqiLJzbPKoAKcainbuUcIhCTgpXbw"} alt="Card image cap" />
                    </div>
                    <div className="col-sm-10">
                        <h5 class="card-title">{props.book.volumeInfo.title}</h5>
                        <h6>{props.book.volumeInfo.authors}</h6>
                        <p class="card-text">{props.book.volumeInfo.description}</p>
                        <a href={props.book.volumeInfo.infoLink} class="btn btn-primary">More info</a>
                        <button onClick={() => { props.handleSaveBook(props.book) }} class="btn btn-primary">Save to Favorites</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Card