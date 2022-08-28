import './App.css'
import Nav from '../Nav/Nav'
import SearchBar from '../Searchbar/Searchbar'
import SearchHistory from '../SearchHistory/SearchHistory'
// import SearchResults from '../SearchResults/SearchResults'
import { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Main from '../ChoosingRoutes/Main'

function App() {
    const [terms, setTerms] = useState([])

    const addTerm = (term) => {
        // Create array from sarting with user input
        let newTermsArr = new Set([term, ...terms])
        setTerms(Array.from(newTermsArr))
    }

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
                <SearchHistory terms={terms} />
                <Main />
            </main>
        </div>
    )
}

export default App
