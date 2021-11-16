import React from 'react'
import {Button, Card} from 'react-bootstrap'
const MovieDisplay = ({ movieList, toggle }) => {
    return (
        <div className="movie-list">
            {

                movieList.map(
                    (m) => <Movie key={m.id} movie={m} toggle={toggle} />

                )
            }
        </div>

    )
}
function Movie(props) {
    const toggler = (e) => {
        props.toggle(props.movie.id, e.target.name)
    }
    return (
        
            <Card>
            <h2>
                Movie : {props.movie.name}
            </h2>
            <br />
            <br />
            <div className="space-around">
                <h4>
                    Year: {props.movie.year}
                </h4>
                <h4>
                    {
                        props.movie.watched ?
                            "(Movie has been watched)" :
                            "(Movie is yet be watched)"
                    }
                </h4>
            </div>
            <br></br>
                <br />
            <span className="container space-bet">
                <Button  variant="success" name="toggle" onClick={toggler}>
                    Toggle
                </Button>
                <Button variant="danger" name="remove" onClick={toggler}>Remove</Button>
            </span>
            </Card>
    );
}
export default MovieDisplay
