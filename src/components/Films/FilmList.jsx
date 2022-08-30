import { Route, NavLink, Routes, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Film from '../Film/Film'
import { css } from '@emotion/react'

export default function Films(props) {
    const [list, setList] = useState([])

    useEffect(() => {
        ;(function getFilms() {
            let url = `https://swapi.dev/api/films/`

            fetch(url)
                .then((resp) => {
                    if (!resp.ok) throw new Error(resp.statusText)
                    return resp.json()
                })
                .then((data) => {
                    setList(data.results)
                })
                .catch(console.warn)
        })()
    }, [])

    const findFilm = (id) => {
        return list.find((item, index) => parseInt(id) === index + 1)
    }

    return (
        <>
            <div className='results'>
                <h2>All the films in the db</h2>
                {list.length === 0 && (
                    <p>
                        This is Star Wars, there aren't any Star Trek films here
                    </p>
                )}
                {list.map((film, index) => (
                    <p key={film.title}>
                        <NavLink
                            className={(navigationData) =>
                                navigationData.isActive ? 'active' : null
                            }
                            to={`/films/${index + 1}`}
                            css={css`
                                &.active {
                                    color: green;
                                }
                            `}
                        >
                            {film.title}
                        </NavLink>
                    </p>
                ))}
            </div>
            <div className='details' aria-live='polite'>
                <Routes path='/films/'>
                    <Route
                        path=':id'
                        element={<Film findFilm={findFilm} />}
                    ></Route>
                </Routes>
            </div>
        </>
    )
}
