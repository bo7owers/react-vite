import { useParams } from 'react-router-dom'

export default function Person({ list }) {
    const { id } = useParams()

    let person = list.find((item, index) => parseInt(id) === index + 1)

    return (
        <>
            {person && <h2>{person.name}</h2>}
            {person && (
                <p>
                    {person.name} was born in {person.birth_year}
                </p>
            )}
        </>
    )
}
