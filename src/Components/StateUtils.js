import {v4 as uuidv4} from 'uuid';
const INITIAL_STATE = {
    movies:[
        {
            id: uuidv4(),
            name: "Avengers",
            year: 2012,
            watched: false
        },
        {
            id: uuidv4(),
            name: "Spider-Man",
            year: 2002,
            watched: false
        },
        {
            id: uuidv4(),
            name: "Joker",
            year: 2019,
            watched: false
        },
        {
            id: uuidv4(),
            name: "Superman",
            year: 1978,
            watched: false
        }

    ]
};
const ACTIONS ={
    ADD_MOVIE : "Add Movie",
    TOGGLE_MOVIE_STATUS:  "Toggle Movie",
    REMOVE_MOVIE: "Remove"
}

function movieReducer (state, action){
    switch(action.type){
        case ACTIONS.TOGGLE_MOVIE_STATUS:
            const movies=state.movies
            const updatedMovies=movies.map(movie=>
                {   
                    if(action.payload.id === movie.id){
                        return{
                            ...movie,
                            watched: !movie.watched
                        }
                            
                    }
                    return movie;
                }
                
            );
        return {
            movies: updatedMovies
        }
        case ACTIONS.ADD_MOVIE:
            console.log(state)
            return{
                movies :[{
                    id: uuidv4(),
                    ...action.payload}, 
                    
                    ...state.movies]
            }
        case ACTIONS.REMOVE_MOVIE:
            let movie1=state.movies
            movie1=movie1.filter(obj=> obj.id !== action.payload.id)
            return  {movies:[...movie1]}
    }
}
export{
    movieReducer,
    ACTIONS,
    INITIAL_STATE
};