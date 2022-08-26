import './App.css'
import Nav from '../Nav/Nav'
import SearchBar from '../Searchbar/Searchbar'
import SearcHistory from '../SearchHistory/SearchHistory'
import SearchResults from '../SearchResults/SearchResults'
import { useState, useEffect } from 'react'
import { css } from '@emotion/react'

function App() {
    const [terms, setTerms] = useState([])
    const [results, setResults] = useState([])
    const [dataType, setDataType] = useState('films')

    const addTerm = (term) => {
        setTerms([term, ...terms])
    }

    useEffect(
        () => {
            // do things
            fetchData()
        },
        [
            // watch things
        ]
    )

    const fetchData = async (type) => {
        let url = `https://swapi.dev/api/${dataType}`
        let resp = await fetch(url)
        if (!resp.ok) throw new Error(resp.statusText)
        let data = await resp.json()

        setResults(data.results)
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
                <SearcHistory terms={terms} />
                <SearchResults results={results} />
            </main>
        </div>
    )
}

export default App
