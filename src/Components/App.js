import React, { useReducer } from 'react'
import AddMovie from './AddMovie'
import MovieDisplay from './MovieDisplay'
import { INITIAL_STATE, ACTIONS, movieReducer } from './StateUtils'
import './App.css';
const App = () => {
    const [state, dispatch] = useReducer(movieReducer, INITIAL_STATE)
    function toggleStatus(id, buttonName) {
        if (buttonName === "toggle") {
            const actions = {
                type: ACTIONS.TOGGLE_MOVIE_STATUS,
                payload: {
                    id: id
                }
            }
            dispatch(actions)
        }
        else {
            const actions = {
                type: ACTIONS.REMOVE_MOVIE,
                payload: {
                    id: id
                }
            }
            dispatch(actions)
        }
    }
    function onAdd(movieObj) {
        const action = {
            type: ACTIONS.ADD_MOVIE,
            payload: {
                ...movieObj
            }
        };
        dispatch(action)

    }
    return (
        <div className="base">
                <AddMovie adder={onAdd} />
            <MovieDisplay movieList={state.movies} toggle={toggleStatus} />

        </div>
    )
}

export default App
