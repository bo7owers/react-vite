import './App.css'
import Nav from '../Nav/Nav'
import SearchBar from '../Searchbar/Searchbar'
import SearcHistory from '../SearchHistory/SearchHistory'
import { useState } from 'react'
import { css } from '@emotion/react'

function App() {
    const [terms, setTerms] = useState(['hello there', 'i have te highground'])

    const addTerm = (term) => {
        setTerms([term, ...terms])
    }
    return (
        // pass props and funcs to components
        <div className='app'>
            <Nav />
            <SearchBar userInput={terms[0]} addTerm={addTerm} />
            <SearcHistory terms={terms} />
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
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nam, dolorum. Vero, sequi nemo. Eaque debitis commodi, fugit
                    ex doloremque molestiae. Doloribus illum, optio
                    reprehenderit hic unde reiciendis similique soluta! Iure!
                    Hic assumenda architecto iste, qui, rerum minus sapiente
                    inventore, veritatis explicabo quaerat modi ipsa rem soluta
                    repellat voluptatem deleniti ex dolorem libero tempora quas
                    optio iusto. Quisquam tempora sed officia. Maxime est id,
                    reprehenderit eligendi assumenda sapiente harum, tenetur
                    consectetur architecto quaerat, recusandae facilis in? Ipsa
                    ad aut, at accusantium voluptatibus, voluptatum ducimus
                    tenetur nemo, nisi dignissimos animi soluta quam.
                </p>
            </main>
        </div>
    )
}

export default App
