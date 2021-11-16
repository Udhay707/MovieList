import React,{useState} from 'react'
import {Button} from 'react-bootstrap'
const AddMovie = ({adder}) => {
    const [movie, setMovie] = useState(null)
    const [year, setYear] = useState(null)
    function movieAdder(){
        const movieObj ={
            name: movie,
            year: year
        }
        if (movieObj.name && movieObj.year){
            adder(movieObj)
        }
    }
    return (
        <div className="add-movie">
            <span className="space-bet">
            <label name="name">Movie Name</label>
            <input name="name" placeholder="Enter Movie Name" onChange={e=>setMovie(e.target.value)}/>
            </span>
            <span className="space-bet">
            <label name="year">Year</label>
            <input name="year" placeholder="Year" onChange={r=>setYear(r.target.value)}/>
            </span>
            <Button variant="primary" onClick={movieAdder}>Add to list </Button>
        </div>
    )
}

export default AddMovie
