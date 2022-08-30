import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Films from '../Films/FilmList'
import People from '../People/People'
import Planets from '../Planets/Planets'

export default function MainCont(props) {
    return (
        <div className='mainContent'>
            <Routes>
                <Route path='/films/*' element={<Films />} />
                <Route path='/people/*' element={<People />} />
                <Route path='/planets/*' element={<Planets />} />
                <Route path='/' exact element={<Home />} />
            </Routes>
        </div>
    )
}
