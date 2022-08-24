import './App.css'
import Nav from '../Nav/Nav'
import SearchBar from '../Searchbar/Searchbar'
import SearcHistory from '../SearchHistory/SearchHistory'
import SearchResults from '../SearchResults/SearchResults'
import { useState, useEffect } from 'react'
import { css } from '@emotion/react'

function App() {
    const [terms, setTerms] = useState(['hello there', 'i have the highground'])

    const addTerm = (term) => {
        setTerms([term, ...terms])
    }

    const [movies, setMovies] = useState([])

    useEffect(
        () => {
            // do things
            console.log('page rendered')
        },
        [
            // watch things
        ]
    )
    return (
        // pass props and funcs to components
        <div className='app'>
            <Nav />
            <SearchBar userInput={terms[0]} addTerm={addTerm} />
            <main
                css={css`
                    display: flex;
                    flex-flow: column wrap;
                    padding: 0.25rem 2rem;
                `}
            >
                <h1
                    css={css`
                        font-size: 2rem;
                    `}
                >
                    Hello there
                </h1>
                <SearcHistory terms={terms} />
                <SearchResults movies={movies} />
            </main>
        </div>
    )
}

export default App
