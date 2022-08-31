import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from '../Home/Home'
import Films from '../Films/FilmList'
import People from '../People/People'
import Planets from '../Planets/Planets'
import Person from '../Person/Person'
import { useEffect, useState } from 'react'

export default function MainCont(props) {
    const { pathname } = useLocation()
    const [people, setPeople] = useState([])

    useEffect(() => {
        ;(async function () {
            if (pathname.indexOf('/people') > -1) {
                let resp = await fetch(`https://swapi.dev/api/people`)
                let data = await resp.json()
                setPeople(data.results)
            }
        })()
    }, [pathname])
    return (
        <div className='mainContent'>
            <Routes>
                <Route path='/films/*' element={<Films />} />
                <Route path='/people'>
                    <Route path='/people/' element={<People list={people} />} />
                    <Route
                        path='/people/:id'
                        element={<Person list={people} />}
                    />
                </Route>
                <Route path='/planets/*' element={<Planets />} />
                <Route path='/' exact element={<Home />} />
            </Routes>
        </div>
    )
}
