import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { css } from '@emotion/react'

export default function Film({ findFilm }) {
    const [film, setFilm] = useState(null)

    // url params
    const { id } = useParams()

    useEffect(() => {
        setFilm(findFilm(id))
    }, [findFilm, id])

    let details = (
        <>
            <p>{film && `The movie was released on ${film.release_date}`}</p>
            <p>{film && `${film.opening_crawl}`}</p>
        </>
    )
    return (
        <>
            <h2>{film && film.title}</h2>
            {film && details}
            <p>{!film && 'nothing'}</p>
        </>
    )
}
